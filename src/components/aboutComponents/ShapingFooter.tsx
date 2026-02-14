import Link from 'next/link';
import { Cloud, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ShapingFooter() {
    return (
        <footer className="bg-[#FAFAFA] pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Address */}
                    <div>
                        <h4 className="font-bold text-[#333333] mb-6">Office</h4>
                        <p className="text-[#666666] leading-relaxed">
                            123 Innovation Drive,<br />
                            Tech Park, Sector 5,<br />
                            Mumbai, India 400091
                        </p>
                        <p className="mt-4 text-[#666666]">
                            <a href="mailto:hello@mukundrealty.com" className="hover:text-[#009FE3]">hello@mukundrealty.com</a> <br />
                            <a href="tel:+919876543210" className="hover:text-[#009FE3]">+91 98765 43210</a>
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-[#333333] mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Projects', 'Careers', 'Contact', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[#666666] hover:text-[#009FE3] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials */}
                    <div>
                        <h4 className="font-bold text-[#333333] mb-6">Connect</h4>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#666666] hover:bg-[#009FE3] hover:text-white hover:border-[#009FE3] transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Logo */}
                    <div className="flex flex-col items-start md:items-end">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="text-[#009FE3] p-1.5 ">
                                <Cloud size={32} strokeWidth={2.5} />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-[#333333]">
                                MUKUND REALTY
                            </span>
                        </Link>
                        <p className="text-[#666666] text-sm text-right">
                            Shaping the future,<br />
                            one space at a time.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-[#999999]">
                    <p>&copy; {new Date().getFullYear()} Mukund Realty. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#333333]">Privacy Policy</a>
                        <a href="#" className="hover:text-[#333333]"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}