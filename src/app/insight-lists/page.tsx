import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const page = () => {
    // Data array mirroring the exact alternating pattern in the image
    const insights = [
        {
            id: 1,
            image: "/images/insight1.png", // Surfer placeholder
            title: "Mukund Realty title sponsors Den Den 202...",
            link: "#"
        },
        {
            id: 2,
            image: "/images/insight2.png", // Speaker placeholder
            title: "Vertex Managed Workspace Wins Presti...",
            link: "#"
        },
        {
            id: 3,
            image: "/images/insight1.png",
            title: "Mukund Realty title sponsors Den Den 202...",
            link: "#"
        },
        {
            id: 4,
            image: "/images/insight2.png",
            title: "Vertex Managed Workspace Wins Presti...",
            link: "#"
        },
        {
            id: 5,
            image: "/images/insight1.png",
            title: "Mukund Realty title sponsors Den Den 202...",
            link: "#"
        },
        {
            id: 6,
            image: "/images/insight2.png",
            title: "Vertex Managed Workspace Wins Presti...",
            link: "#"
        },
        {
            id: 7,
            image: "/images/insight1.png",
            title: "Mukund Realty title sponsors Den Den 202...",
            link: "#"
        },
        {
            id: 8,
            image: "/images/insight2.png",
            title: "Vertex Managed Workspace Wins Presti...",
            link: "#"
        },
        {
            id: 9,
            image: "/images/insight1.png",
            title: "Mukund Realty title sponsors Den Den 202...",
            link: "#"
        }
    ];

    return (
        <>
            <Header />

            <section className=" mx-auto py-16 px-6 md:px-12 lg:px-20 xl:px-54 font-sans bg-white">
                {/* Heading */}
                <h2 className="text-[44px] leading-tight font-normal text-gray-900 mb-14 tracking-tight mt-20">
                    Insights
                </h2>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
                    {insights.map((item, index) => {
                        // Determine position to apply correct borders and padding based on the column
                        const isFirstCol = index % 3 === 0;
                        const isMiddleCol = index % 3 === 1;
                        const isLastCol = index % 3 === 2;

                        let colStyles = "";
                        if (isFirstCol) colStyles = "pr-8 border-r border-gray-200";
                        if (isMiddleCol) colStyles = "px-8 border-r border-gray-200";
                        if (isLastCol) colStyles = "pl-8";

                        return (
                            <div key={item.id} className={`flex flex-col ${colStyles}`}>
                                {/* Image Container */}
                                <div className="w-full h-[320px] mb-5 bg-gray-100 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt="Insight cover"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <h3 className="text-[15px] leading-snug font-normal text-gray-600 mb-3 pr-2">
                                    {item.title}
                                </h3>

                                {/* Link */}
                                <a
                                    href={item.link}
                                    className="text-[11px] text-gray-500 underline decoration-gray-400 underline-offset-[3px] hover:text-gray-800 transition-colors mt-auto self-start"
                                >
                                    Read More
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer /></>


    );
};

export default page;