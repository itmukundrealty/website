"use client";

import React, { useState, useEffect } from 'react';
import { TextInput, SelectInput } from './FormSection';
import { motion, AnimatePresence } from 'framer-motion';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface ApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
}

export default function ApplyModal({ isOpen, onClose, jobTitle = "" }: ApplyModalProps) {
    const [fileName, setFileName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [jobOptions, setJobOptions] = useState<string[]>([]);

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
                } else {
                    setJobOptions(["General Application"]);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setJobOptions(["General Application"]);
            }
        };

        if (isOpen) {
            fetchJobs();
        }
    }, [isOpen]);

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

            const fullName = formData.get("modal_fullName") as string;
            const email = formData.get("modal_email") as string;
            const phone = formData.get("modal_phone") as string;
            const position = formData.get("modal_position") as string;
            const about = formData.get("modal_about") as string;
            const file = formData.get("modal_cv") as File;

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
                position: position || jobTitle || "General Application",
                about,
                cvUrl,
                createdAt: serverTimestamp()
            });

            setSubmitSuccess(true);
            setTimeout(() => {
                onClose();
                setSubmitSuccess(false);
                setFileName("");
            }, 2000);

        } catch (error: any) {
            console.error("Error submitting application:", error);
            setSubmitError("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const options = jobTitle && !jobOptions.includes(jobTitle) ? [jobTitle, ...jobOptions] : (jobOptions.length > 0 ? jobOptions : ["General Application"]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: 'auto' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative bg-white w-full max-w-2xl max-h-[95vh] overflow-y-auto z-10 p-8 sm:p-12 md:p-14 flex flex-col justify-start rounded-md shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-[#808080] hover:text-[#0097DC] transition-colors p-2"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="mb-10 mt-2">
                            <h2 className="text-[32px] md:text-[40px] font-medium text-[#505153] leading-tight mb-2">Apply Now</h2>
                            <p className="text-[#808080] text-[15px] font-light">Join the Mukund Team{jobTitle ? ` as a ${jobTitle}` : ''}</p>
                        </div>

                        {submitSuccess ? (
                            <div className="flex flex-col items-center justify-center py-10">
                                <svg className="w-20 h-20 text-green-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 className="text-2xl font-medium text-[#505153] mb-2">Application Submitted!</h3>
                                <p className="text-[#808080] text-center">Thank you for applying. We will review your application and get back to you soon.</p>
                            </div>
                        ) : (
                            <form className="w-full" onSubmit={handleSubmit}>
                                <TextInput id="modal_fullName" label="Your Full Name" required />
                                <TextInput id="modal_email" label="Your Email" type="email" required />
                                <TextInput id="modal_phone" label="Your Phone Number" type="tel" required />

                                <SelectInput
                                    id="modal_position"
                                    label="Select the Position you'd be applying for"
                                    required
                                    options={options}
                                    defaultValue={jobTitle}
                                />

                                <TextInput id="modal_about" label="Tell Us About Yourself" isTextArea required />

                                {/* File Upload */}
                                <div className="mb-10 w-full">
                                    <p className="text-[#808080] font-light text-[15px] mb-3">Upload your CV / Photo <span className="text-[#0097DC] text-lg font-medium ml-1">*</span></p>
                                    <div className="relative border border-gray-200 rounded-sm w-full py-3 px-4 flex items-center gap-3 transition-colors hover:border-gray-300">
                                        <input
                                            type="file"
                                            id="modal_cv"
                                            name="modal_cv"
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
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
