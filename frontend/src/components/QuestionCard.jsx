import { useState } from "react";
import { FiChevronDown, FiBookmark } from "react-icons/fi";

export default function QuestionCard({ question, answer, level }) {
    const [open, setOpen] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const levelColor =
        level === "Easy"
            ? "bg-green-100 text-green-700"
            : level === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700";

    return (
        <div className="bg-white rounded-2xl shadow-sm border p-5 transition">

            {/* Header */}
            <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {question}
                    </h3>

                    <span
                        className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${levelColor}`}
                    >
                        {level}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setBookmarked(!bookmarked);
                        }}
                        className={`p-2 rounded-lg ${bookmarked
                                ? "text-indigo-600 bg-indigo-50"
                                : "text-gray-400 hover:text-indigo-600"
                            }`}
                    >
                        <FiBookmark />
                    </button>

                    <FiChevronDown
                        className={`text-xl transition ${open ? "rotate-180" : ""
                            }`}
                    />
                </div>
            </div>

            {/* Answer */}
            {open && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
}
