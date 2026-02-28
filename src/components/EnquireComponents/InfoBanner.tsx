import React from 'react';

export default function InfoBanner() {
    return (
        <section className="w-full py-12 md:py-20 flex justify-center bg-white">
            <div
                className="w-full max-w-[1400px] mx-auto min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center bg-white bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/enquireImages/bg.png')" }}
            >
                <div className="text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-light text-[#4A4A4A] mb-3">
                        Need more information?
                    </h2>
                    <p className="text-[#505153] font-light text-sm md:text-lg mb-8">
                        Contact our team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#0097DC] font-medium text-sm md:text-base">
                        <a href="tel:+917090933700" className="hover:opacity-80 transition-opacity">
                            +91 70909 33700
                        </a>
                        <a href="mailto:sales@mukundrealty.com" className="hover:opacity-80 transition-opacity">
                            sales@mukundrealty.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}