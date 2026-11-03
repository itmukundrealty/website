"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
    X,
    ChevronDown,
    Download,
    CheckCircle2,
    FileText,
    ShieldCheck,
    User,
    Mail,
    Phone,
    Building2,
    Check,
} from "lucide-react";
import { PROJECTS_LIST } from "@/data/projects";
import { useFloorPlanModal, PROJECT_PDF_MAP } from "@/context/FloorPlanModalContext";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { disableLenis, enableLenis } from "@/components/SmoothScroll";

// Common showcase image from the home page CTA section
const COMMON_SHOWCASE_IMAGE = "/images/LandingPageImg/designedBg.png";

export default function FloorPlanDownloadModal() {
    const { isOpen, closeFloorPlanModal, targetPdfUrl, projectName, fileName } = useFloorPlanModal();

    const [mounted, setMounted] = useState(false);
    const [selectedProject, setSelectedProject] = useState<string>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [consent, setConsent] = useState(true);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const formTimeRef = useRef<number>(Date.now());

    // SSR safety check for createPortal
    useEffect(() => {
        setMounted(true);
    }, []);

    // When modal opens/closes, freeze/unfreeze Lenis smooth scroll and background
    useEffect(() => {
        if (isOpen) {
            formTimeRef.current = Date.now();
            setIsSuccess(false);
            setErrorMessage(null);
            setIsDropdownOpen(false);

            // Completely freeze background and Lenis smooth scroll
            disableLenis();

            // Find matching project name from list
            const matched = PROJECTS_LIST.find(
                (p) =>
                    p.name.toLowerCase() === projectName.toLowerCase() ||
                    p.id.toLowerCase() === projectName.toLowerCase()
            );

            setSelectedProject(matched ? matched.name : projectName || "Rudraksh");

            // Close on escape key
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    closeFloorPlanModal();
                }
            };
            window.addEventListener("keydown", handleKeyDown);

            return () => {
                window.removeEventListener("keydown", handleKeyDown);
                enableLenis();
            };
        } else {
            enableLenis();
        }
    }, [isOpen, projectName, closeFloorPlanModal]);

    // Safety unmount cleanup
    useEffect(() => {
        return () => {
            enableLenis();
        };
    }, []);

    // Handle clicks outside the custom dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Determine the PDF URL to download
    const getFinalDownloadInfo = () => {
        const matchedCurrent =
            selectedProject.toLowerCase() === projectName.toLowerCase() ||
            selectedProject.toLowerCase().includes(projectName.toLowerCase());

        if (matchedCurrent && targetPdfUrl) {
            return {
                pdfUrl: targetPdfUrl,
                fileName: fileName || targetPdfUrl.split("/").pop() || `${selectedProject}-Floorplan.pdf`,
            };
        }

        const foundProject = PROJECTS_LIST.find((p) => p.name === selectedProject);
        const mapped = foundProject ? PROJECT_PDF_MAP[foundProject.id] : null;

        if (mapped) {
            return {
                pdfUrl: mapped.pdfUrl,
                fileName: mapped.fileName,
            };
        }

        return {
            pdfUrl: targetPdfUrl || "/downloadFloorPlan/typical layout.pdf",
            fileName: fileName || `${selectedProject}-Floorplan.pdf`,
        };
    };

    // Push enquiry to CRM
    const pushToCRM = async (leadData: { name: string; email: string; phone: string; project: string }) => {
        try {
            await fetch("/api/crm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: leadData.name,
                    email: leadData.email,
                    phone: leadData.phone,
                    project: leadData.project,
                    interestedIn: `${leadData.project} Floor Plan`,
                    _formTime: formTimeRef.current,
                }),
            });
        } catch (error) {
            console.error("CRM push error:", error);
        }
    };

    // Push enquiry to Accelr Webhook
    const pushToAccelr = async (leadData: { name: string; email: string; phone: string; project: string }) => {
        try {
            await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: leadData.name,
                    email: leadData.email,
                    phone: leadData.phone,
                    project: `${leadData.project} (Floor Plan Download)`,
                    pageUrl: typeof window !== "undefined" ? window.location.href : "https://mukundmgmrealty.com",
                    _formTime: formTimeRef.current,
                }),
            });
        } catch (error) {
            console.error("Accelr push error:", error);
        }
    };

    // Save lead to Firestore projectEnquiries collection
    const saveToFirestore = async (leadData: { 
        name: string; 
        email: string; 
        phone: string; 
        project: string; 
        pdfUrl: string;
        fileName?: string;
    }) => {
        try {
            await addDoc(collection(db, "projectEnquiries"), {
                name: leadData.name,
                email: leadData.email,
                phone: leadData.phone,
                project: leadData.project,
                enquiryType: "floorplan_download",
                downloadedFile: leadData.pdfUrl,
                fileName: leadData.fileName || leadData.pdfUrl?.split("/").pop() || "Floorplan.pdf",
                source: "Floor Plan Download",
                message: `Floor Plan Download: ${leadData.project} (${leadData.fileName || "Architectural Layout"})`,
                pageUrl: typeof window !== "undefined" ? window.location.href : "",
                consent: true,
                createdAt: new Date().toISOString(),
            });
        } catch (error) {
            console.error("Firestore enquiry save error:", error);
        }
    };

    // Trigger physical browser download
    const triggerBrowserDownload = (pdfUrl: string, downloadName: string) => {
        const link = document.createElement("a");
        link.href = encodeURI(pdfUrl);
        link.download = downloadName || pdfUrl.split("/").pop() || "Floorplan.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("data-direct-download", "true");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        // Validation
        const cleanName = name.trim();
        const cleanEmail = email.trim();
        const cleanPhone = phone.trim();

        if (!cleanName) {
            setErrorMessage("Please enter your name");
            return;
        }

        if (!cleanEmail || !/^\S+@\S+\.\S+$/.test(cleanEmail)) {
            setErrorMessage("Please enter a valid email address");
            return;
        }

        if (!cleanPhone || cleanPhone.replace(/\D/g, "").length < 7) {
            setErrorMessage("Please enter a valid phone number (minimum 7 digits)");
            return;
        }

        setIsSubmitting(true);

        const { pdfUrl, fileName: finalFileName } = getFinalDownloadInfo();

        const leadPayload = {
            name: cleanName,
            email: cleanEmail,
            phone: cleanPhone,
            project: selectedProject,
            pdfUrl,
            fileName: finalFileName,
        };

        try {
            // 1. Submit to internal CMS enquiry endpoint
            fetch("/api/enquiries/project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: cleanName,
                    email: cleanEmail,
                    phone: cleanPhone,
                    project: selectedProject,
                    enquiryType: "floorplan_download",
                    downloadedFile: pdfUrl,
                    fileName: finalFileName,
                    source: "Floor Plan Download",
                    message: `Requested Floor Plan Download for ${selectedProject} (${finalFileName})`,
                    consent: true,
                    _formTime: formTimeRef.current,
                }),
            }).catch((err) => console.warn("CMS API submission background notice:", err));

            // 2. Save directly to Firestore for 100% guarantee
            saveToFirestore(leadPayload);

            // 3. Push to MGM CRM
            pushToCRM(leadPayload);

            // 4. Push to Accelr
            pushToAccelr(leadPayload);

            // 5. Trigger download immediately
            triggerBrowserDownload(pdfUrl, finalFileName);

            // 6. Show success UI
            setIsSuccess(true);
            setTimeout(() => {
                closeFloorPlanModal();
            }, 3000);
        } catch (error: any) {
            console.error("Submission error:", error);
            triggerBrowserDownload(pdfUrl, finalFileName);
            setIsSuccess(true);
            setTimeout(() => {
                closeFloorPlanModal();
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted || !isOpen) return null;

    // Sort projects so that current project is first in dropdown
    const sortedProjects = [...PROJECTS_LIST].sort((a, b) => {
        if (a.name === selectedProject) return -1;
        if (b.name === selectedProject) return 1;
        return a.name.localeCompare(b.name);
    });

    const currentDownloadInfo = getFinalDownloadInfo();

    // Render using React Portal directly into document.body with max-w-6xl, common left image, upward dropdown, and rounded-none
    return createPortal(
        <div
            id="floorplan-download-modal-portal"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 2147483647,
                backgroundColor: "rgba(0, 0, 0, 0.78)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
            className="[&::-webkit-scrollbar]:hidden"
            data-lenis-prevent="true"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    closeFloorPlanModal();
                }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="floorplan-modal-title"
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 2147483647,
                    maxWidth: "1152px", // 6xl width (72rem)
                    width: "100%",
                    margin: "auto",
                }}
                className="max-w-6xl w-full bg-white rounded-none shadow-[0_30px_90px_rgba(0,0,0,0.6)] border border-gray-200 text-left transition-all flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent="true"
            >
                {/* Close Button */}
                <button
                    onClick={closeFloorPlanModal}
                    className="absolute top-4 right-4 p-2.5 text-gray-400 hover:text-black hover:bg-gray-100 transition-colors z-30 cursor-pointer rounded-none"
                    aria-label="Close modal"
                >
                    <X size={22} />
                </button>

                {/* LEFT SHOWCASE PANEL (Home Page CTA Image with Gradient, Project Name at Top, PDF Card at Bottom) */}
                <div className="w-full md:w-[400px] lg:w-[440px] shrink-0 relative min-h-[260px] md:min-h-[480px] bg-[#0C1824] overflow-hidden flex flex-col justify-between">
                    {/* Background Common CTA Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={COMMON_SHOWCASE_IMAGE}
                            alt="Mukund MGM Realty"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Subtle Luxury Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50 z-10" />
                    </div>

                    {/* Top: Project Name & Brand Badge */}
                    <div className="relative z-20 p-6 sm:p-8">
                        <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2bb8f5] bg-white/10 backdrop-blur-md px-3 py-1 border border-white/20 mb-2 rounded-none">
                            <Building2 size={12} className="text-[#2bb8f5]" />
                            <span>Mukund MGM Realty</span>
                        </div>
                        <p className="text-[11px] uppercase tracking-widest text-gray-300 font-medium">
                            Floor Plans & Layouts
                        </p>
                        <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-0.5">
                            <span className="font-semibold block">{selectedProject}</span>
                        </h3>
                    </div>

                    {/* Bottom: PDF Card Showing */}
                    <div className="relative z-20 p-6 sm:p-8 mt-auto">
                        <div className="flex items-center gap-3 p-3 bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-none">
                            <div className="w-9 h-9 bg-[#0097DC] text-white flex items-center justify-center shrink-0 shadow-sm rounded-none">
                                <FileText size={18} />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs font-semibold text-white truncate leading-tight">
                                    {currentDownloadInfo.fileName}
                                </p>
                                <p className="text-[11px] text-gray-300 truncate leading-tight mt-1 flex items-center gap-1.5">
                                    <Check size={12} className="text-emerald-400 shrink-0" /> Verified Official Architectural PDF
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM PANEL (Clean 2-column on desktop, rounded-none) */}
                <div className="flex-1 bg-white p-7 sm:p-10 flex flex-col justify-between relative">
                    {isSuccess ? (
                        /* Success View */
                        <div className="my-auto py-10 sm:py-16 text-center space-y-4">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50 rounded-none">
                                <CheckCircle2 size={36} strokeWidth={2.2} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl sm:text-3xl font-light text-[#1E1E1E]">
                                    Download <span className="font-semibold text-emerald-600">Started!</span>
                                </h3>
                                <p className="text-xs sm:text-sm font-light text-gray-600 max-w-sm mx-auto">
                                    Your architectural layouts for <strong className="text-gray-900 font-semibold">{selectedProject}</strong> have begun downloading.
                                </p>
                            </div>
                            <div className="pt-2">
                                <div className="inline-flex items-center gap-2 text-xs text-[#0097DC] font-medium bg-blue-50/80 border border-blue-100 px-4 py-2 rounded-none">
                                    <FileText size={14} />
                                    <span>{currentDownloadInfo.fileName}</span>
                                </div>
                            </div>
                            <div className="pt-4 flex flex-col items-center justify-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => triggerBrowserDownload(currentDownloadInfo.pdfUrl, currentDownloadInfo.fileName)}
                                    className="text-xs text-[#0097DC] hover:underline font-medium flex items-center gap-1.5 cursor-pointer rounded-none"
                                >
                                    <Download size={13} /> Didn't start? Click here to download again
                                </button>
                            </div>
                            <div className="pt-3">
                                <button
                                    type="button"
                                    onClick={closeFloorPlanModal}
                                    className="px-8 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-none"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Form View */
                        <div className="space-y-5">
                            {/* Header */}
                            <div className="pr-8">
                                <h2 id="floorplan-modal-title" className="text-2xl sm:text-3xl font-light text-[#505153] leading-tight">
                                    Download <span className="font-semibold text-[#1E1E1E]">Floor Plans</span>
                                </h2>
                                <p className="text-xs sm:text-sm font-light text-gray-500 mt-1.5 leading-relaxed">
                                    Please enter your contact details below to unlock and download the complete architectural layout and floor specifications for{" "}
                                    <strong className="text-gray-900 font-semibold">{selectedProject}</strong>.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* 2-Column Fields Grid on sm+ */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#505153] mb-1.5">
                                            Full Name <span className="text-[#0097DC]">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <User size={16} />
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full pl-10 pr-3.5 py-3 bg-gray-50/60 hover:bg-white focus:bg-white border border-gray-200 focus:border-[#0097DC] rounded-none text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#505153] mb-1.5">
                                            Email Address <span className="text-[#0097DC]">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <Mail size={16} />
                                            </div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="e.g. rahul@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-10 pr-3.5 py-3 bg-gray-50/60 hover:bg-white focus:bg-white border border-gray-200 focus:border-[#0097DC] rounded-none text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#505153] mb-1.5">
                                            Phone Number <span className="text-[#0097DC]">*</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <Phone size={16} />
                                            </div>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. +91 98765 43210"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="w-full pl-10 pr-3.5 py-3 bg-gray-50/60 hover:bg-white focus:bg-white border border-gray-200 focus:border-[#0097DC] rounded-none text-sm text-[#1E1E1E] placeholder-gray-400 focus:outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Dropdown - Opens Upwards so it NEVER breaks or clips at the bottom */}
                                    <div className="relative" ref={dropdownRef}>
                                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#505153] mb-1.5">
                                            Selected Project <span className="text-[#0097DC]">*</span>
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className={`relative w-full pl-10 pr-3.5 py-3 bg-gray-50/60 hover:bg-white focus:bg-white border rounded-none text-sm text-left flex items-center justify-between transition-all cursor-pointer ${
                                                isDropdownOpen
                                                    ? "border-[#0097DC] bg-white"
                                                    : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                                <Building2 size={16} />
                                            </div>
                                            <span className="text-sm font-medium text-[#1E1E1E] truncate">
                                                {selectedProject}
                                            </span>
                                            <div className="flex items-center gap-1.5 shrink-0 ml-1">
                                                {selectedProject.toLowerCase() === projectName.toLowerCase() && (
                                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0097DC] bg-blue-50 px-2 py-0.5 rounded-none">
                                                        Current
                                                    </span>
                                                )}
                                                <ChevronDown
                                                    size={16}
                                                    className={`text-gray-400 transition-transform duration-300 ${
                                                        isDropdownOpen ? "rotate-180 text-[#0097DC]" : ""
                                                    }`}
                                                />
                                            </div>
                                        </button>

                                        {/* Dropdown Menu - Upward Placement with high z-index & smooth scroll */}
                                        {isDropdownOpen && (
                                            <div className="absolute left-0 right-0 bottom-full mb-1.5 z-50 max-h-56 overflow-y-auto border border-gray-200 bg-white shadow-2xl py-1 divide-y divide-gray-50 rounded-none animate-in fade-in-50 zoom-in-95 duration-150">
                                                {sortedProjects.map((p) => {
                                                    const isCurrent = p.name === selectedProject;
                                                    const isPageProject = p.name.toLowerCase() === projectName.toLowerCase();
                                                    return (
                                                        <button
                                                            type="button"
                                                            key={p.id}
                                                            onClick={() => {
                                                                setSelectedProject(p.name);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer rounded-none ${
                                                                isCurrent
                                                                    ? "bg-blue-50/90 text-[#0097DC] font-semibold"
                                                                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-2 truncate pr-2">
                                                                {isCurrent ? (
                                                                    <Check size={14} className="text-[#0097DC] shrink-0" />
                                                                ) : (
                                                                    <span className="w-3.5 shrink-0" />
                                                                )}
                                                                <span className="truncate">{p.name}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1.5 shrink-0">
                                                                {isPageProject && (
                                                                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0097DC] bg-blue-100/60 px-1.5 py-0.5 rounded-none">
                                                                        Current
                                                                    </span>
                                                                )}
                                                                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                                                                    {p.type === "ongoing" ? "Ongoing" : "Completed"}
                                                                </span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Consent Checkbox */}
                                <div className="pt-0.5">
                                    <label className="flex items-start gap-2.5 text-xs text-gray-500 font-light cursor-pointer select-none leading-relaxed">
                                        <input
                                            type="checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            className="mt-0.5 h-4 w-4 rounded-none border-gray-300 text-[#0097DC] focus:ring-[#0097DC] cursor-pointer shrink-0"
                                        />
                                        <span>
                                            I agree to receive floor plans and project updates from Mukund Realty via WhatsApp, Call, or Email.
                                        </span>
                                    </label>
                                </div>

                                {/* Error message */}
                                {errorMessage && (
                                    <div className="bg-red-50 p-3 text-xs text-red-700 border border-red-200 rounded-none">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-1.5">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0097DC] hover:bg-[#0086c4] text-white py-4 px-6 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-none shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-4 w-4 animate-spin border-2 border-white border-t-transparent" />
                                                <span>Preparing Your Floor Plan...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Download size={16} />
                                                <span>Download Floor Plans</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Confidentiality Trust Badge */}
                                <div className="pt-0.5 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center font-light">
                                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                                    <span>Instant direct download • 100% confidential & safe</span>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
