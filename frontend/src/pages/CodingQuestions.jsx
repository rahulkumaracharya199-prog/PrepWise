import { useState } from "react";
import { Navigate } from "react-router-dom";
import codingQuestions from "../data/codingQuestions";

export default function CodingQuestions({ domain }) {
    const [openId, setOpenId] = useState(null);

    if (!domain) {
        return <Navigate to="/dashboard" replace />;
    }

    const filtered = codingQuestions.filter(q => q.domain === domain);

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold capitalize text-gray-800">
                    {domain} Coding Questions
                </h1>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                    Practice coding problems and improve your skills
                </p>
            </div>

            {/* Questions List */}
            {filtered.length === 0 ? (
                <p className="text-gray-500">No coding questions available yet.</p>
            ) : (
                <div className="space-y-4">
                    {filtered.map((q, index) => (
                        <div
                            key={q.id}
                            className="bg-white border rounded-2xl shadow-sm p-5 transition hover:shadow-md"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => setOpenId(openId === q.id ? null : q.id)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                            >
                                <p className="font-semibold text-lg text-gray-800">
                                    {index + 1}. {q.question}
                                </p>
                                <DifficultyBadge level={q.difficulty} />
                            </button>

                            {/* Answer */}
                            {openId === q.id && (
                                <pre className="bg-gray-100 p-4 rounded-lg mt-4 text-sm sm:text-base overflow-x-auto whitespace-pre-wrap">
                                    {q.answer}
                                </pre>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

/* 🔹 Difficulty Badge */
function DifficultyBadge({ level }) {
    const colors = {
        easy: "bg-green-100 text-green-700",
        medium: "bg-yellow-100 text-yellow-700",
        hard: "bg-red-100 text-red-700",
    };

    return (
        <span
            className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${colors[level]}`}
        >
            {level.toUpperCase()}
        </span>
    );
}
