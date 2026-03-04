"use client";

import React from "react";

export default function MapSection() {
    return (
         // add a marker at this position 12.904786218142279, 74.83759021090043
         <div className="relative">  
        <section className="w-full bg-white px-6 md:px-12 lg:px-20 xl:px-54 pb-16 ">
            <div className="h-[30vh] lg:h-[60vh] w-full overflow-hidden bg-[#e5e5e5] md:h-[70vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.219129910576!2d74.83877157464947!3d12.893626487414597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a68d371b863%3A0x45056bc9dc6e23cc!2sMukund%20MGM%20Realty!5e0!3m2!1sen!2sin!4v1772440573298!5m2!1sen!2sin"
                    width="100%"
                    height="100%"

                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            
            </div>
        </section>
         </div>
       

    );
}
