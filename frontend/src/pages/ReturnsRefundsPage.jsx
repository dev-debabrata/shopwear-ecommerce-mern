import Container from "../layout/Container";
import Title from "../components/Title";

const ReturnsRefundsPage = () => {
    return (
        <Container>
            <div className="pt-10 border-t border-gray-200">
                <div className="text-2xl text-center">
                    <Title text1="RETURNS &" text2="REFUNDS" />
                </div>

                <div className="max-w-4xl mx-auto my-12 space-y-8 text-gray-600">
                    <section>
                        <h2 className="text-xl font-semibold text-black mb-3">
                            Return Policy
                        </h2>

                        <p>
                            We want you to love your purchase. If you're not completely
                            satisfied, you may request a return within 10 days of receiving
                            your order.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-black mb-3">
                            Eligibility for Returns
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Items must be unused and in original condition.</li>
                            <li>Original tags and packaging must be intact.</li>
                            <li>Products damaged by misuse are not eligible.</li>
                            <li>Personalized items cannot be returned.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-black mb-3">
                            Refund Process
                        </h2>

                        <p>
                            Once your return is received and inspected, we will notify you of
                            the approval status. Approved refunds are processed within 5–7
                            business days.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-black mb-3">
                            Exchange Policy
                        </h2>

                        <p>
                            Need a different size? Eligible products can be exchanged within
                            10 days of delivery, subject to stock availability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-black mb-3">
                            Need Help?
                        </h2>

                        <p>
                            Contact our support team at:
                            <br />
                            Email: contact.shopwear@info.com
                            <br />
                            Phone: +91 9876-543-210
                        </p>
                    </section>
                </div>
            </div>
        </Container>
    );
};

export default ReturnsRefundsPage;