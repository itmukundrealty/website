import React, { useEffect } from 'react';

interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
            <div className="relative w-full max-w-md scale-100 transform  bg-white p-8 shadow-2xl transition-all duration-300">
                <div className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>

                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Thank You!</h2>
                    <p className="mb-8 text-gray-600">
                        Your message has been received. We will get back to you shortly.
                    </p>

                    <button
                        onClick={onClose}
                        className="w-full  bg-[#1e88c8] py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#166ca3] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1e88c8] focus:ring-offset-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouModal;
