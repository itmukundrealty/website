'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const TextInput = ({ label, required = false, type = "text", id, onChange, isTextArea = false }: { label: string, required?: boolean, type?: string, id: string, onChange?: (e: any) => void, isTextArea?: boolean }) => {
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHasValue(e.target.value.length > 0);
        if (onChange) onChange(e);
    };

    return (
        <div className="relative mb-10 w-full group">
            {isTextArea ? (
                <textarea
                    id={id}
                    name={id}
                    required={required}
                    rows={1}
                    onChange={handleChange}
                    className={`peer w-full border-b border-gray-300 bg-transparent pb-3 pt-2 text-[#505153] placeholder-transparent focus:border-[#0097DC]  focus:outline-none resize-none ${hasValue ? 'border-[#505153]' : ''}`}
                    placeholder={label}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    onChange={handleChange}
                    className={`peer w-full border-b border-gray-300 bg-transparent pb-3 pt-2 text-[#505153] placeholder-transparent focus:border-[#0097DC] focus:outline-none ${hasValue ? 'border-[#505153]' : ''}`}
                    placeholder={label}
                />
            )}
            <label
                htmlFor={id}
                className={`absolute left-0 transition-all font-light pointer-events-none
                    ${hasValue
                        ? '-top-4 text-[13px] text-[#0097DC]'
                        : 'top-2 text-[15px] text-[#808080] peer-focus:-top-4 peer-focus:text-[13px] peer-focus:text-[#0097DC]'}
                `}
            >
                {label} {required && <span className="text-[#0097DC] text-lg font-medium ml-1">*</span>}
            </label>
        </div>
    );
};

export const SelectInput = ({ label, required = false, id, options, defaultValue = "" }: { label: string, required?: boolean, id: string, options: string[], defaultValue?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const hasValue = selectedValue !== "";

    return (
        <div className="relative mb-10 w-full group" ref={dropdownRef}>
            <input type="hidden" id={id} name={id} required={required} value={selectedValue} />
            <div
                className={`w-full border-b border-gray-300 bg-transparent pb-3 pt-2 text-left cursor-pointer focus:outline-none transition-colors duration-300 flex justify-between items-center ${hasValue ? 'border-[#505153] text-[#505153]' : 'text-transparent'} ${isOpen ? 'border-[#0097DC]' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={hasValue ? "opacity-100" : "opacity-0"}>{hasValue ? selectedValue : "Placeholder"}</span>
                <div className={`pointer-events-none text-[#0097DC] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
            <label
                className={`absolute left-0 transition-all duration-300 font-light pointer-events-none
                    ${hasValue || isOpen
                        ? '-top-4 text-[13px] text-[#0097DC]'
                        : 'top-2 text-[15px] text-[#808080]'}
                `}
            >
                {label} {required && <span className="text-[#0097DC] text-lg font-medium ml-1">*</span>}
            </label>
            <div
                className={`absolute z-10 w-full bg-white border border-gray-100 shadow-lg rounded-sm mt-1 overflow-hidden transition-all duration-300 origin-top
                    ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}
                `}
            >
                <ul className="max-h-60 overflow-y-auto py-1">
                    {options.map((opt, i) => (
                        <li
                            key={i}
                            className={`px-4 py-2 text-[15px] font-light cursor-pointer transition-colors hover:bg-gray-50 hover:text-[#0097DC] ${selectedValue === opt ? 'bg-gray-50 text-[#0097DC]' : 'text-[#505153]'}`}
                            onClick={() => {
                                setSelectedValue(opt);
                                setIsOpen(false);
                            }}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default function FormSection() {
    const [fileName, setFileName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [jobOptions, setJobOptions] = useState<string[]>(["General Application"]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const q = query(collection(db, "careers"), where("isActive", "==", true));
                const querySnapshot = await getDocs(q);
                const jobs: string[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.heading) {
                        jobs.push(data.heading);
                    }
                });
                if (jobs.length > 0) {
                    setJobOptions(jobs);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("");
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const formData = new FormData(e.currentTarget);

            const fullName = formData.get("fullName") as string;
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;
            const position = formData.get("position") as string;
            const about = formData.get("about") as string;
            const file = formData.get("cv") as File;

            let cvUrl = "";

            if (file && file.size > 0) {
                // Upload file to Firebase Storage
                const storageRef = ref(storage, `career_cvs/${Date.now()}_${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                cvUrl = await getDownloadURL(snapshot.ref);
            }

            // Save to Firestore
            await addDoc(collection(db, "career_applications"), {
                fullName,
                email,
                phone,
                position: position || "General Application",
                about,
                cvUrl,
                createdAt: serverTimestamp()
            });

            setSubmitSuccess(true);

            // Re-render empty form
            setTimeout(() => {
                setSubmitSuccess(false);
                setFileName("");
            }, 3000);

            // Reset form fields
            (e.target as HTMLFormElement).reset();

        } catch (error: any) {
            console.error("Error submitting application:", error);
            setSubmitError("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="apply" className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[700px]">
            {/* Left Side - Image Background */}
            <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-full">
                {/* Fallback color / background image wrapper */}
                <div className="absolute inset-0 bg-[#A6C0DA]">
                    {/* Assuming you will replace with actual hands image, testing placeholder for now */}
                    <Image
                        src="/images/formImages.png"
                        alt="Join the Mukund Team"
                        fill
                        className="object-cover"
                        onError={(e) => {
                            // If the image doesn't exist yet, it'll just show the bluish fallback color similar to the photo
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
                {/* Text Overlay */}
                <div className="absolute bottom-12 md:bottom-20 left-8 md:left-16 text-white font-outfit">
                    <p className="text-[40px] md:text-[52px] font-light leading-10 mb-0 tracking-wide">Join the</p>
                    <p className="text-[40px] md:text-[52px] font-medium leading-tight tracking-wide">Mukund Team</p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 sm:px-16 md:px-20 lg:px-32 py-16 md:py-20 lg:py-24">
                {submitSuccess ? (
                    <div className="flex flex-col items-center justify-center py-10 w-full max-w-lg mx-auto md:mx-0">
                        <svg className="w-20 h-20 text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-medium text-[#505153] mb-2">Application Submitted!</h3>
                        <p className="text-[#808080] text-center">Thank you for applying. We will review your application and get back to you soon.</p>
                    </div>
                ) : (
                    <form className="w-full max-w-lg mx-auto md:mx-0" onSubmit={handleSubmit}>
                        <TextInput id="fullName" label="Your Full Name" required />
                        <TextInput id="email" label="Your Email" type="email" required />
                        <TextInput id="phone" label="Your Phone Number" type="tel" required />

                        <SelectInput
                            id="position"
                            label="Select the Position you'd be applying for"
                            required
                            options={jobOptions}
                        />

                        <TextInput id="about" label="Tell Us About Yourself" isTextArea required />

                        {/* File Upload */}
                        <div className="mb-10 w-full">
                            <p className="text-[#808080] font-light text-[15px] mb-3">Upload your CV / Photo <span className="text-[#0097DC] text-lg font-medium ml-1">*</span></p>
                            <div className="relative border border-gray-200 rounded-sm w-full py-3 px-4 flex items-center gap-3 transition-colors hover:border-gray-300">
                                <input
                                    type="file"
                                    id="cv"
                                    name="cv"
                                    required
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                />
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-400 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                <span className={`font-light text-[14px] truncate ${fileName ? 'text-[#505153]' : 'text-[#808080]'}`}>
                                    {fileName || "Select a File to Upload (.pdf, .jpg, .png)"}
                                </span>
                            </div>
                        </div>

                        {submitError && (
                            <div className="mb-4 text-red-500 text-sm font-medium">
                                {submitError}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-[#0097DC] hover:bg-[#007bb5] transition-colors text-white px-10 py-3 text-[15px] font-medium w-fit mt-2 flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}