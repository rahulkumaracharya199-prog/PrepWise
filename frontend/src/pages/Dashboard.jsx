import { useNavigate } from "react-router-dom";
import { FaUserTie, FaLaptopCode, FaCode, FaExchangeAlt } from "react-icons/fa";

export default function Dashboard({ domain, setDomain }) {
    const navigate = useNavigate();

    // If user hasn't selected a domain yet
    if (!domain) {
        return (
            <div className="flex items-center justify-center h-[90vh] bg-gray-50 px-4">
                <div className="bg-white p-10 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-3">
                        Choose your interview domain
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Select a domain to see relevant interview questions.
                    </p>
                    <button
                        onClick={() => navigate("/choose-domain")}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                    >
                        Choose Domain
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold capitalize">
                        {domain} Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1">
                        🚀 Start preparing for your {domain} interviews
                    </p>
                </div>

                <button
                    onClick={() => {
                        setDomain(null);
                        navigate("/choose-domain");
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl hover:bg-gray-100 hover:ring-1 hover:ring-indigo-300 transition"
                >
                    <FaExchangeAlt />
                    Change Domain
                </button>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <DashboardCard
                    title="HR Questions"
                    desc="Common HR interview questions"
                    icon={FaUserTie}
                    onClick={() => navigate("/hr")}
                />
                <DashboardCard
                    title="Technical Questions"
                    desc={`${domain} technical concepts`}
                    icon={FaLaptopCode}
                    onClick={() => navigate("/tech")}
                />
                <DashboardCard
                    title="Coding Questions"
                    desc={`${domain} coding practice`}
                    icon={FaCode}
                    onClick={() => navigate("/coding")}
                />
            </div>
        </div>
    );
}

/* Dashboard Card Component */
function DashboardCard({ title, desc, icon: Icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-white p-6 rounded-2xl border text-left
                 hover:shadow-md hover:-translate-y-1 transition-transform transition-shadow duration-200 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
            <Icon className="text-3xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
        </button>
    );
}
