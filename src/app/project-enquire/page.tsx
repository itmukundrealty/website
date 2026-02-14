"use client";


import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquireProject from "@/components/EnquireComponents/EnquireProject";
import InformationSection from "@/components/EnquireComponents/InformationSection";
import { useState } from "react";
import FaqSection from "@/components/contact/FaqSection";

const FAQ_DATA = [
    {
        question: "Who should consider Ashoka Business Center for workspace needs?",
        answer: "It is ideal for startups, growing enterprises, IT professionals, and established companies seeking a productive, connected, and well-equipped business environment in Mangalore.",
    },
    {
        question: "What types of spaces are available at Ashoka Business Center?",
        answer: "We offer a range of flexible office spaces, retail units, and professional suites designed to meet diverse business requirements.",
    },
    {
        question: "What amenities does Ashoka Business Center provide?",
        answer: "The center provides high-speed internet, conference rooms, professional security, ample parking, and modern infrastructure support.",
    },
    {
        question: "Where is Ashoka Business Center located?",
        answer: "It is strategically located in a prime commercial hub of Mangalore, ensuring easy accessibility and professional visibility.",
    },
    {
        question: "Is there ample parking available for visitors?",
        answer: "Yes, Ashoka Business Center features dedicated multi-level parking facilities for both tenants and visitors to ensure hassle-free access.",
    },
    {
        question: "Are the commercial spaces customizable?",
        answer: "Absolutely. We offer bare-shell and warm-shell options, allowing businesses to design and customize their office interiors according to their brand identity.",
    },
    {
        question: "What kind of power backup is provided?",
        answer: "The center is equipped with 100% DG power backup to ensure uninterrupted operations for all businesses 24/7.",
    },
    {
        question: "Is the premises secure?",
        answer: "Security is a top priority. The building monitors common areas with 24/7 CCTV surveillance and employs professional security personnel round the clock.",
    },
];

export default function ProjectEnquirePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <EnquireProject />
            <FaqSection faqData={FAQ_DATA} />
            <Footer />
        </div>
    );
}
