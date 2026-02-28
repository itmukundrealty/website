"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThankYouModal from "../contact/ThankYouModal";

const PROJECT_MAPS: Record<string, string> = {
  kedar: "https://www.google.com/maps?q=Kedar%20by%20Mukund%20MGM%20Realty&output=embed",
  rudraksh: "https://www.google.com/maps?q=Rudraksh%20by%20Mukund%20MGM%20Realty&output=embed",
  default: "https://www.google.com/maps?q=Ashoka%20Business%20Center&output=embed",
};

import { PROJECTS_LIST } from "@/data/projects";


function EnquireProjectContent() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project");

  const [currentProject, setCurrentProject] = useState<string>("");

  const mapSrc = PROJECT_MAPS[currentProject?.toLowerCase()] || PROJECT_MAPS["default"];

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    project: "",
    consent: true,
  });

  useEffect(() => {
    let sourceProject = projectParam;

    if (!sourceProject && typeof window !== "undefined") {
      const referrer = document.referrer;
      if (referrer) {
        try {
          const url = new URL(referrer);
          const pathSegments = url.pathname.split("/").filter(Boolean);
          if (pathSegments.length > 0 && pathSegments[0] !== "project-enquire") {
            sourceProject = pathSegments[0];
          }
        } catch (e) {
          // Ignore
        }
      }
    }

    if (sourceProject) {
      setCurrentProject(sourceProject);

      const projectData = PROJECTS_LIST.find(p => p.id.toLowerCase() === sourceProject?.toLowerCase());
      const displayName = projectData ? projectData.name : (sourceProject.charAt(0).toUpperCase() + sourceProject.slice(1).replace(/-/g, ' '));

      setFormData((prev) => ({
        ...prev,
        project: sourceProject,
        interestedIn: displayName,
      }));
    }
  }, [projectParam]);
  const [status, setStatus] = useState<{
    loading: boolean;
    error: string | null;
    success: boolean;
  }>({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelect = (option: string) => {
    setFormData((prev) => ({ ...prev, interestedIn: option }));
    setIsOpen(false);
  };

  const pushToCRM = async (data: typeof formData) => {
    try {
      await fetch("/api/crm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("CRM Push Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.interestedIn) {
      alert("Please select an option for 'Interested in'");
      return;
    }
    setStatus({ loading: true, error: null, success: false });

    try {
      // 1. Submit to internal API
      const response = await fetch("https://cms-mukund.vercel.app/api/enquiries/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // 2. Push to MGM CRM (asynchronously)
      pushToCRM(formData);

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestedIn: currentProject ? currentProject.charAt(0).toUpperCase() + currentProject.slice(1) : "",
        project: currentProject || "",
        consent: true,
      });
      alert("Form submitted successfully!");
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ loading: false, error: "Failed to submit form. Please try again.", success: false });
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interestedIn: currentProject ? currentProject.charAt(0).toUpperCase() + currentProject.slice(1) : "",
      project: currentProject || "",
      consent: true,
    });
    setStatus((prev) => ({ ...prev, success: false }));
  };

  return (
    <section className="w-full bg-white lg:pt-32 lg:pb-12  pt-24">
      <div className="mx-auto  px-6 md:px-12 lg:px-20 xl:px-54">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* LEFT — MAP */}
          <div className="order-2 lg:order-1 w-full h-[400px] lg:h-full bg-gray-200 overflow-hidden">
            <iframe src={mapSrc} className="w-full h-full border-0 grayscale-[30%]" loading="lazy" />
          </div>

          {/* RIGHT — FORM */}
          <div className="order-1 lg:order-2 pt-4">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl leading-[1.1] font-light text-[#505153]">
              Enquire About <br />
              <span className="font-semibold">
                {formData.project ? (
                  (() => {
                    const projectDisplayNames: Record<string, string> = {
                      kedar: "Kedar",
                      rudraksh: "Rudraksh",
                      ashoka: "Ashoka Business Center",
                      ajanta: "Ajanta Business Center",
                      bhargavi: "Bhargavi Gloria Residency",
                      evanna: "Evanna Homes",
                      kailash: "Kailash",
                      gokuldham: "Gokuldham",
                      kudva: "Kudva's Grandeur",
                      madhuban: "Madhuban Apartments",
                      mathura: "Mathura Residency",
                      "mukund-sadhan": "Mukund Sadan",
                      nandadeep: "Nandadeep Apartments",
                      nandagokul: "Nandagokul Apartments"
                    };
                    return projectDisplayNames[formData.project.toLowerCase()] ||
                      formData.project.charAt(0).toUpperCase() + formData.project.slice(1).replace(/-/g, ' ');
                  })()
                ) : "This Project"}
              </span>
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-[15px] text-[#7a7a7a] leading-relaxed max-w-[420px]">
              From availability to specifications, connect with us for complete project information.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-14 space-y-10">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-[#d4d4d4] pb-3 text-[15px] text-[#505153] focus:outline-none focus:border-[#2b2b2b] transition-colors"
                  required
                />
                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                  Your Full Name <span className="text-[#0097DC]">*</span>
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-[#d4d4d4] pb-3 text-[15px] text-[#505153] focus:outline-none focus:border-[#2b2b2b] transition-colors"
                  required
                />
                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                  Your Email <span className="text-[#0097DC]">*</span>
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-[#d4d4d4] pb-3 text-[15px] text-[#505153] focus:outline-none focus:border-[#2b2b2b] transition-colors"
                  required
                />
                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                  Your Phone Number <span className="text-[#0097DC]">*</span>
                </label>
              </div>

              {/* Interested Dropdown - Custom Implementation */}
              <div className="relative">
                <div className="relative w-full border-b border-[#d4d4d4] pb-3 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
                  {/* Selected Value or Placeholder Logic */}
                  <div className={`text-[15px] transition-colors ${formData.interestedIn ? "text-[#505153]" : "text-transparent"}`}>
                    {formData.interestedIn || "Select"}
                  </div>

                  {/* Custom Arrow */}
                  <ChevronDown
                    className={`absolute right-0 top-0 w-5 h-5 text-[#505153] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    strokeWidth={1.5}
                  />

                  {/* Floating Label */}
                  <label
                    className={`absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform origin-[0] pointer-events-none ${isOpen || formData.interestedIn ? "-translate-y-6 scale-75" : "translate-y-0 scale-100"}`}
                  >
                    Interested in <span className="text-[#0097DC]">*</span>
                  </label>
                </div>

                {/* Dropdown Options */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 right-0 top-full mt-1 bg-white shadow-lg border border-[#e5e5e5] rounded-md overflow-hidden z-20"
                    >
                      {(() => {
                        const projectOptions = PROJECTS_LIST.map(p => p.name).sort((a, b) => a.localeCompare(b));

                        // Reorder: put currently selected interestedIn value first if it's in the list
                        const sortedOptions = formData.interestedIn
                          ? [formData.interestedIn, ...projectOptions.filter(opt => opt !== formData.interestedIn)]
                          : projectOptions;

                        return sortedOptions.map((option) => (
                          <div
                            key={option}
                            className="px-4 py-3 text-[15px] text-[#505153] hover:bg-[#f5f5f5] cursor-pointer transition-colors"
                            onClick={() => handleSelect(option)}
                          >
                            {option}
                          </div>
                        ));
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Consent + Button Row */}
              <div className="flex items-center justify-between pt-6">
                <label className="flex items-center gap-2 text-[12px] text-[#7a7a7a]">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#1e88c8] rounded none"
                  />
                  Consent to contact me via Call, SMS, Email, or WhatsApp
                </label>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="bg-[#1e88c8] text-white text-[14px] px-10 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ThankYouModal isOpen={showModal} onClose={handleCloseModal} />
    </section>
  );
}
export default function EnquireProject() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <EnquireProjectContent />
    </Suspense>
  );
}
