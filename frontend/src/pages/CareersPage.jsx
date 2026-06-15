import Container from "../layout/Container";
import Title from "../components/Title";

const CareersPage = () => {
    const jobs = [
        {
            title: "Frontend Developer",
            location: "Kolkata, India",
            type: "Full Time",
        },
        {
            title: "Backend Developer",
            location: "Remote",
            type: "Full Time",
        },
        {
            title: "UI/UX Designer",
            location: "Kolkata, India",
            type: "Internship",
        },
    ];

    return (
        <Container>
            <div className="pt-10 border-t border-gray-200">
                <div className="text-2xl text-center">
                    <Title text1="CAREERS" text2="AT SHOPWEAR" />
                </div>

                <div className="mt-10 space-y-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-6 flex justify-between items-center"
                        >
                            <div>
                                <h3 className="text-xl font-semibold">{job.title}</h3>
                                <p className="text-gray-500">{job.location}</p>
                                <p className="text-gray-500">{job.type}</p>
                            </div>

                            <button className="px-4 py-2 border rounded hover:bg-black hover:text-white">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default CareersPage;