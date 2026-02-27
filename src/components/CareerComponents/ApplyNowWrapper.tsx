"use client";

import React, { useState } from 'react';
import ApplyModal from './ApplyModal';

interface ApplyNowWrapperProps {
    jobTitle: string;
}

export default function ApplyNowWrapper({ jobTitle }: ApplyNowWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0097DC] hover:bg-[#007bb5] transition-colors text-white px-8 py-3 pb-3.5 text-lg font-medium"
            >
                Apply Now
            </button>

            <ApplyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={jobTitle}
            />
        </>
    );
}
