import { useNavigate } from "react-router-dom";
import { FaReact, FaPython, FaJava, FaCode, FaLaptopCode, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaCloud,     FaMobileAlt } from "react-icons/fa";

const domains = [
    { name: "Frontend", value: "frontend", icon: FaLaptopCode, desc: "HTML, CSS, JavaScript" },
    { name: "React", value: "react", icon: FaReact, desc: "Components, Hooks, State" },
    { name: "Python", value: "python", icon: FaPython, desc: "Core Python, OOP, Logic" },
    { name: "Java", value: "java", icon: FaJava, desc: "Java, OOP, Collections" },
    { name: "Backend", value: "backend", icon: FaCode, desc: "APIs, Databases, Logic" },
    { name: "Node.js", value: "node", icon: FaNodeJs, desc: "Server-side JS, Express" },
    { name: "JavaScript", value: "javascript", icon: FaJsSquare, desc: "ES6+, DOM, Async" },
    { name: "HTML", value: "html", icon: FaHtml5, desc: "HTML5, Semantic tags" },
    { name: "CSS", value: "css", icon: FaCss3Alt, desc: "CSS3, Flex, Grid, Animations" },
    { name: "Database", value: "database", icon: FaDatabase, desc: "SQL, NoSQL, Queries" },
    { name: "Cloud", value: "cloud", icon: FaCloud, desc: "AWS, Azure, Cloud Concepts" },
    { name: "Mobile", value: "mobile", icon: FaMobileAlt, desc: "Android, iOS, React Native" },
];

export default function ChooseDomain({ setDomain }) {
    const navigate = useNavigate();

    function handleSelect(value) {
        setDomain(value);
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="max-w-7xl w-full">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                        Choose Your Interview Domain
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Select a domain to get personalized interview questions
                    </p>
                </div>

                {/* Grid: responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {domains.map(({ name, value, icon: Icon, desc }) => (
                        <button
                            key={value}
                            onClick={() => handleSelect(value)}
                            className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border text-left
                         hover:border-indigo-600 hover:shadow-md transition focus:outline-none
                         flex flex-col justify-between h-full"
                        >
                            <div>
                                <Icon className="text-3xl text-indigo-600 mb-4" />
                                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-800">{name}</h3>
                                <p className="text-sm sm:text-base text-gray-500">{desc}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
