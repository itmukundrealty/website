import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Content Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-20 xl:px-54 mx-auto">
                <div className=" mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#505153] mb-12 leading-tight">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-[#505153] font-sans text-lg leading-relaxed font-light">
                        <p>
                            At Mukund MGM Realty, accessible from <Link href="/" className="text-[#0097DC] hover:underline">www.mukundmgmrealty.com </Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mukund MGM Realty and how we use it.
                        </p>

                        <p>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>

                        <div>
                            <h2 className="text-2xl md:text-3xl  font-semibold text-[#505153] mb-4 mt-8">Information we collect</h2>
                            <p className="mb-4">
                                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                            </p>
                            <p className="mb-4">
                                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                            </p>
                            <p>
                                When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#505153]   mb-4 mt-8">How we use your information</h2>
                            <p className="mb-4">We use the information we collect in various ways, including to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                <li>Send you emails</li>
                                <li>Find and prevent fraud</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl  font-semibold text-[#505153] mb-4 mt-8">Log Files</h2>
                            <p>
                                Mukund MGM Realty follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl  font-semibold text-[#505153] mb-4 mt-8">Third Party Privacy Policies</h2>
                            <p className="mb-4">
                                Mukund MGM Realty&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                            </p>
                            <p>
                                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl  font-semibold text-[#505153] mb-4 mt-8">Anti-Fraud Disclosure</h2>
                            <p className="mb-4">
                                Electronic communications such as email, text messages and social media messaging, are neither secure nor confidential. Mukund MGM Realty will never send you any electronic communication with instructions to transfer funds or to provide nonpublic personal information, such as credit card or debit numbers or bank account and/or routing numbers.
                            </p>
                            <p className="mb-4 font-medium font-semibold text-[#505153]">
                                YOU SHOULD NEVER TRANSMIT NONPUBLIC PERSONAL INFORMATION, SUCH AS CREDIT OR DEBIT CARD NUMBERS OR BANK ACCOUNT OR ROUTING NUMBERS, BY EMAIL OR OTHER UNSECURED ELECTRONIC COMMUNICATION. EMAILS ATTEMPTING TO INDUCE FRAUDULENT WIRE TRANSFERS ARE COMMON AND MAY APPEAR TO COME FROM A TRUSTED SOURCE.
                            </p>
                            <p>
                                If you receive any electronic communication directing you to transfer funds or provide nonpublic personal information, EVEN IF THAT ELECTRONIC COMMUNICATION APPEARS TO BE FROM Mukund MGM Realty or its affiliates, do not respond to it and immediately contact your real estate agent or title closer. Such requests, even if they may otherwise appear to be from Mukund MGM Realty , are likely part of a scheme to defraud you by stealing funds from you or using your identity to commit a crime.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl  font-semibold text-[#505153] mb-4 mt-8">CONTACTING US</h2>
                            <p>
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br />
                                <a href="mailto:sales@mukundmgmrealty.com" className="text-[#0097DC] hover:underline">sales@mukundmgmrealty.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
