import { useState } from "react";
import Container from "../layout/Container";
import Title from "../components/Title";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQPage = () => {
    const faqs = [
        {
            question: "How long does shipping take?",
            answer:
                "Orders are usually delivered within 3-7 business days depending on your location.",
        },
        {
            question: "Do you offer Cash on Delivery (COD)?",
            answer:
                "Yes, Cash on Delivery is available for most locations across India.",
        },
        {
            question: "What is your return policy?",
            answer:
                "You can return or exchange eligible products within 10 days of delivery.",
        },
        {
            question: "How can I track my order?",
            answer:
                "Visit the Orders page and click 'Track Order' to see the latest delivery status.",
        },
        {
            question: "How do I cancel my order?",
            answer:
                "You can cancel an order before it is shipped by contacting our support team.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept UPI, Debit Cards, Credit Cards, Net Banking, and Cash on Delivery.",
        },
        {
            question: "How do I contact customer support?",
            answer:
                "You can contact us via email at contact.shopwear@info.com or call +91 9876-543-210.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Container>
            <div className="pt-10 border-t border-gray-200">
                <div className="text-2xl text-center">
                    <Title text1="FREQUENTLY ASKED" text2="QUESTIONS" />
                </div>

                <div className="max-w-4xl mx-auto my-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50"
                            >
                                <span className="font-medium">{faq.question}</span>

                                {openIndex === index ? (
                                    <ChevronUp size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FAQPage;