import { useState } from "react";
import { Navigate } from "react-router-dom";
import technicalQuestions from "../data/technicalQuestions";

export default function TechQuestions({ domain }) {
    const [openId, setOpenId] = useState(null);

    if (!domain) {
        return <Navigate to="/dashboard" replace />;
    }

    const filtered = technicalQuestions.filter(q => q.domain === domain);

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold capitalize text-gray-900">
                    {domain} Technical Questions
                </h1>
                <p className="text-gray-500 mt-1">
                    Core technical concepts for interviews
                </p>
            </div>

            {/* Questions */}
            {filtered.length === 0 ? (
                <p className="text-gray-500">
                    No technical questions available for this domain yet.
                </p>
            ) : (
                <div className="space-y-4">
                    {filtered.map((q, index) => (
                        <div
                            key={q.id}
                            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => setOpenId(openId === q.id ? null : q.id)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                            >
                                <p className="font-semibold text-lg text-gray-900">
                                    {index + 1}. {q.question}
                                </p>
                                <DifficultyBadge level={q.difficulty} />
                            </button>

                            {/* Answer */}
                            {openId === q.id && (
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {q.answer}
                                </p>
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
            className={`text-xs font-semibold px-3 py-1 rounded-full ${colors[level]}`}
        >
            {level.toUpperCase()}
        </span>
    );
}
