"use client";

import React from "react";

export default function MapSection() {
    return (
         // add a marker at this position 12.904786218142279, 74.83759021090043
         <div className="relative">  
        <section className="w-full bg-white px-6 md:px-12 lg:px-20 xl:px-54 pb-16 ">
            <div className="h-[30vh] lg:h-[60vh] w-full overflow-hidden bg-[#e5e5e5] md:h-[70vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0493091572307!2d74.83497237481875!3d12.90455091634526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35beefbfde021%3A0xc38a8d5fb11542ad!2sRudraksh%20High%20Living%20Luxury%20Homes!5e0!3m2!1sen!2sin!4v1771047440747!5m2!1sen!2sin"
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
