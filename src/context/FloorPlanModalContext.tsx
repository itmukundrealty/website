"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { PROJECTS_LIST } from "@/data/projects";

export interface OpenModalOptions {
    pdfUrl?: string;
    projectName?: string;
    fileName?: string;
}

interface FloorPlanModalContextType {
    isOpen: boolean;
    targetPdfUrl: string;
    projectName: string;
    fileName: string;
    openFloorPlanModal: (options?: OpenModalOptions) => void;
    closeFloorPlanModal: () => void;
}

const FloorPlanModalContext = createContext<FloorPlanModalContextType | undefined>(undefined);

// Mapping of project IDs to default floor plan files
export const PROJECT_PDF_MAP: Record<string, { name: string; pdfUrl: string; fileName: string }> = {
    rudraksh: {
        name: "Rudraksh",
        pdfUrl: "/downloadFloorPlan/typical layout.pdf",
        fileName: "Rudraksh-Typical-Floorplan.pdf",
    },
    ashoka: {
        name: "Ashoka Business Center",
        pdfUrl: "/floorPlans/ashoka/pdf/Mukund Realty - Ashoka - First Floor - Floorplan.pdf",
        fileName: "Ashoka-Business-Center-Floorplan.pdf",
    },
    kedar: {
        name: "Kedar",
        pdfUrl: "/floorPlans/kedar/pdf/Mukund Realty - Kedar- Typical Floor - Floorplan.pdf",
        fileName: "Kedar-Typical-Floorplan.pdf",
    },
    kailash: {
        name: "Kailash",
        pdfUrl: "/completedFloorplans/Kailash-FloorPlans.pdf",
        fileName: "Kailash-Floorplans.pdf",
    },
    nandadeep: {
        name: "Nandadeep Apartments",
        pdfUrl: "/completedFloorplans/Nandadeep-FloorPlans.pdf",
        fileName: "Nandadeep-Floorplans.pdf",
    },
    mathura: {
        name: "Mathura Residency",
        pdfUrl: "/completedFloorplans/Mathura-FloorPlans.pdf",
        fileName: "Mathura-Floorplans.pdf",
    },
    nandagokul: {
        name: "Nandagokul Apartments",
        pdfUrl: "/completedFloorplans/Nandagokul-FloorPlans.pdf",
        fileName: "Nandagokul-Floorplans.pdf",
    },
    gokuldham: {
        name: "Gokuldham",
        pdfUrl: "/completedFloorplans/Gokuldham-FloorPlan.pdf",
        fileName: "Gokuldham-Floorplan.pdf",
    },
    ajanta: {
        name: "Ajanta Business Center",
        pdfUrl: "/floorPlans/ashoka/pdf/Mukund Realty - Ashoka - First Floor - Floorplan.pdf",
        fileName: "Ajanta-Business-Center-Floorplan.pdf",
    },
    evanna: {
        name: "Evanna Homes",
        pdfUrl: "/completedFloorplans/Evanna-FloorPlans.pdf",
        fileName: "Evanna-Homes-Floorplans.pdf",
    },
    kudva: {
        name: "Kudva's Grandeur",
        pdfUrl: "/completedFloorplans/Kudva's Grandeur-FloorPlan.pdf",
        fileName: "Kudvas-Grandeur-Floorplan.pdf",
    },
    madhuban: {
        name: "Madhuban Apartments",
        pdfUrl: "/completedFloorplans/Madhuban-FloorPlans.pdf",
        fileName: "Madhuban-Floorplans.pdf",
    },
    bhargavi: {
        name: "Bhargavi Gloria Residency",
        pdfUrl: "/completedFloorplans/Bhargavi-FloorPlans.pdf",
        fileName: "Bhargavi-Floorplans.pdf",
    },
    "mukund-sadhan": {
        name: "Mukund Sadan",
        pdfUrl: "/completedFloorplans/MukundSadan-FloorPlans.pdf",
        fileName: "Mukund-Sadan-Floorplans.pdf",
    },
    "mukund-sadan": {
        name: "Mukund Sadan",
        pdfUrl: "/completedFloorplans/MukundSadan-FloorPlans.pdf",
        fileName: "Mukund-Sadan-Floorplans.pdf",
    },
};

export function detectProjectFromPath(pathname: string): string {
    const cleanPath = pathname.toLowerCase();
    for (const project of PROJECTS_LIST) {
        if (cleanPath.includes(project.id.toLowerCase()) || cleanPath.includes(project.href.toLowerCase().replace("/", ""))) {
            return project.name;
        }
    }
    // Fallback checks
    if (cleanPath.includes("ashoka")) return "Ashoka Business Center";
    if (cleanPath.includes("kedar")) return "Kedar";
    if (cleanPath.includes("rudraksh")) return "Rudraksh";
    if (cleanPath.includes("kailash")) return "Kailash";
    if (cleanPath.includes("bhargavi")) return "Bhargavi Gloria Residency";
    if (cleanPath.includes("evanna")) return "Evanna Homes";
    if (cleanPath.includes("gokuldham")) return "Gokuldham";
    if (cleanPath.includes("kudva")) return "Kudva's Grandeur";
    if (cleanPath.includes("madhuban")) return "Madhuban Apartments";
    if (cleanPath.includes("mathura")) return "Mathura Residency";
    if (cleanPath.includes("mukund-sadan") || cleanPath.includes("mukund-sadhan")) return "Mukund Sadan";
    if (cleanPath.includes("nandadeep")) return "Nandadeep Apartments";
    if (cleanPath.includes("nandagokul")) return "Nandagokul Apartments";
    if (cleanPath.includes("ajanta")) return "Ajanta Business Center";

    return "Rudraksh"; // Default project
}

export function FloorPlanModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [targetPdfUrl, setTargetPdfUrl] = useState<string>("");
    const [projectName, setProjectName] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");

    const openFloorPlanModal = useCallback((options?: OpenModalOptions) => {
        let detected = options?.projectName;
        if (!detected && typeof window !== "undefined") {
            detected = detectProjectFromPath(window.location.pathname);
        }

        const project = detected || "Rudraksh";
        const pdf = options?.pdfUrl || "/downloadFloorPlan/typical layout.pdf";
        const file = options?.fileName || pdf.split("/").pop() || "Floorplan.pdf";

        setProjectName(project);
        setTargetPdfUrl(pdf);
        setFileName(file);
        setIsOpen(true);
    }, []);

    const closeFloorPlanModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Listen for global custom event
    useEffect(() => {
        const handleCustomEvent = (e: Event) => {
            const customEvent = e as CustomEvent<OpenModalOptions>;
            openFloorPlanModal(customEvent.detail);
        };

        window.addEventListener("openFloorPlanModal", handleCustomEvent);
        return () => window.removeEventListener("openFloorPlanModal", handleCustomEvent);
    }, [openFloorPlanModal]);

    // Global click interceptor for download links
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement)?.closest("a, button, [data-floorplan-download]");
            if (!target) return;

            // Never intercept clicks inside the modal itself or internal re-downloads
            if (target.hasAttribute("data-direct-download") || target.closest("#floorplan-download-modal-portal")) {
                return;
            }

            const text = (target.textContent || "").toLowerCase().trim();
            const hasFloorPlanAttr = target.getAttribute("data-floorplan-download") === "true";
            const isFloorPlanClick =
                hasFloorPlanAttr ||
                text.includes("download floor") ||
                text.includes("floor plan") ||
                text.includes("floorplan");

            if (isFloorPlanClick) {
                e.preventDefault();
                e.stopPropagation();
                const href = target.getAttribute("href") || "";
                const pdf = target.getAttribute("data-pdf-url") || (href.endsWith(".pdf") || href.endsWith(".zip") ? href : "");
                const project = target.getAttribute("data-project-name") || "";
                openFloorPlanModal({ pdfUrl: pdf, projectName: project });
                return;
            }

            // Check if anchor tag linking directly to a floorplan PDF with download attribute
            if (target instanceof HTMLAnchorElement && target.hasAttribute("download")) {
                const href = target.getAttribute("href") || "";
                if (href.toLowerCase().endsWith(".pdf") || href.toLowerCase().endsWith(".zip")) {
                    e.preventDefault();
                    e.stopPropagation();
                    openFloorPlanModal({
                        pdfUrl: href,
                        fileName: target.getAttribute("download") || href.split("/").pop() || "Floorplan.pdf",
                    });
                }
            }
        };

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, [openFloorPlanModal]);

    return (
        <FloorPlanModalContext.Provider
            value={{
                isOpen,
                targetPdfUrl,
                projectName,
                fileName,
                openFloorPlanModal,
                closeFloorPlanModal,
            }}
        >
            {children}
        </FloorPlanModalContext.Provider>
    );
}

export function useFloorPlanModal() {
    const context = useContext(FloorPlanModalContext);
    if (!context) {
        throw new Error("useFloorPlanModal must be used within a FloorPlanModalProvider");
    }
    return context;
}

// Global helper to trigger modal from anywhere
export function triggerFloorPlanDownload(options?: OpenModalOptions) {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("openFloorPlanModal", { detail: options || {} }));
    }
}

