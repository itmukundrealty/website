import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";
import FaqSection from "@/components/contact/FaqSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CONTACT_FAQS = [
    {
        question: "What types of projects does Mukund Realty develop?",
        answer:
            "We develop residential, commercial, and mixed use projects, guided by thoughtful planning and long term value.",
    },
    {
        question: "How does Mukund Realty ensure quality and reliability?",
        answer:
            "We adhere to strict quality standards, partnering with top architects and engineers to deliver superior construction and design.",
    },
    {
        question: "Where are Mukund Realty's projects located?",
        answer:
            "Our projects are strategically located in prime areas, offering excellent connectivity and potential for appreciation.",
    },
    {
        question: "What sets Mukund Realty apart from other developers?",
        answer:
            "Our commitment to transparency, timely delivery, and customer-centric approach distinguishes us in the market.",
    },
    {
        question: "Do you offer home loan assistance?",
        answer:
            "Yes, we have tie-ups with all major banks and financial institutions to help you secure the best home loan rates and seamless processing.",
    },
    {
        question: "Can I visit the project site before booking?",
        answer:
            "Absolutely! We encourage site visits so you can experience the location, construction quality, and amenities firsthand. Contact us to schedule a visit.",
    },
    {
        question: "What is the booking process?",
        answer:
            "The booking process is simple and transparent. Once you select your unit, you can book it by paying a token amount. Our sales team will guide you through the documentation and payment schedule.",
    },
    {
        question: "Do you provide assistance with interior design?",
        answer:
            "Yes, we collaborate with reputed interior designers who can help you customize your space to suit your personal style and requirements.",
    },
    {
        question: "Are your projects RERA registered?",
        answer:
            "Yes, all our ongoing projects are registered with RERA (Real Estate Regulatory Authority), ensuring full compliance and transparency.",
    },
    {
        question: "What happens if there is a delay in possession?",
        answer:
            "We are committed to timely delivery. However, in the unlikely event of a delay, we adhere strictly to the terms and compensation clauses as mandated by RERA.",
    },
    {
        question: "Can Non-Resident Indians (NRIs) buy properties from you?",
        answer:
            "Yes, NRIs can easily invest in our properties. We provide end-to-end assistance with documentation and legal formalities required for NRI investments.",
    },
];

export default function ContactPage() {
    return (
        <main className="w-full ">
            <Header />
            <ContactForm />
            <MapSection />
            <FaqSection faqData={CONTACT_FAQS} />
            <Footer />
        </main>
    );
}
