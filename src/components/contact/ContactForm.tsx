"use client";

import React from "react";
import ThankYouModal from "./ThankYouModal";

export default function ContactForm() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        phone: "",
        comments: "",
        consent: false,
    });
    const [status, setStatus] = React.useState<{
        loading: boolean;
        error: string | null;
        success: boolean;
    }>({
        loading: false,
        error: null,
        success: false,
    });

    const [showModal, setShowModal] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            const response = await fetch("https://cms-mukund.vercel.app/api/enquiries/general", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            setStatus({ loading: false, error: null, success: true });
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
            comments: "",
            consent: false,
        });
        setStatus((prev) => ({ ...prev, success: false }));
    };

    return (
        <section className="w-full  lg:min-h-[60vh] lg2:min-h-[90vh] flex items-center justify-center bg-white  px-6 md:px-12 lg:px-20 xl:px-54 xl:py-24 py-26 md:py-24">
            <div className="mx-auto w-full">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-start">

                    {/* LEFT COLUMN - Info */}
                    <div className="flex flex-col justify-start pt-4">
                        <h1 className="text-4xl lg:text-6xl  leading-[1.1]  md:text-[56px]">
                            <span className="font-thin text-[#505153] block">Reach Out</span>
                            <span className="font-medium text-[#505153] block">to Mukund Realty</span>
                        </h1>

                        <p className="mt-8 max-w-[320px] text-lg font-thin leading-relaxed text-[#7a7a7a]">
                            Whether it&apos;s a new brief or a quick question, we&apos;d love to hear from you.
                        </p>

                        <div className="my-10 h-[1px] w-full max-w-[320px] bg-[#d4d4d4]"></div>

                        <div className="space-y-1">
                            <p className="text-[14px] text-[#7a7a7a]">
                                Alternately for your Queries contact
                            </p>
                            <p className="gap-2 text-[16px] font-medium text-[#1e88c8]">
                                <a href="tel:+917090933700" className="hover:underline">
                                    +91 70909 33700
                                </a>
                            </p>
                            <p className="text-[16px] font-medium text-[#1e88c8]">
                                <a href="mailto:sales@mukundrealty.com" className="hover:underline">
                                    sales@mukundrealty.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Form */}
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Full Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="peer w-full border-b border-[#d4d4d4] bg-transparent pb-3 text-[15px] text-[#505153] focus:border-[#2b2b2b] focus:outline-none transition-colors"
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
                                    className="peer w-full border-b border-[#d4d4d4] bg-transparent pb-3 text-[15px] text-[#505153] focus:border-[#2b2b2b] focus:outline-none transition-colors"
                                    required
                                />
                                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                                    Your Email <span className="text-[#0097DC]">*</span>
                                </label>
                            </div>

                            {/* Phone Number */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="peer w-full border-b border-[#d4d4d4] bg-transparent pb-3 text-[15px] text-[#505153] focus:border-[#2b2b2b] focus:outline-none transition-colors"
                                    required
                                />
                                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                                    Your Phone Number <span className="text-[#0097DC]">*</span>
                                </label>
                            </div>

                            {/* Comments */}
                            <div className="relative">
                                <input
                                    type="text"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    placeholder=" "
                                    className="peer w-full border-b border-[#d4d4d4] bg-transparent pb-3 text-[15px] text-[#505153] focus:border-[#2b2b2b] focus:outline-none transition-colors"
                                    required
                                />
                                <label className="absolute left-0 top-0 text-[15px] text-[#505153] duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                                    Your Comments <span className="text-[#0097DC]">*</span>
                                </label>
                            </div>

                            <div className="flex flex-col items-start gap-6 pt-4 md:flex-row md:items-center md:justify-between">
                                {/* Checkbox */}
                                <label className="flex cursor-pointer items-center gap-3">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="mt-1 h-4 w-4 accent-[#1e88c8] rounded-none"
                                    />
                                    <span className="max-w-[300px] text-[10px] text-[#505153]">
                                        Consent to contact me via Call, SMS, Email, or WhatsApp
                                    </span>
                                </label>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className="bg-[#1e88c8] px-8 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
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
