import { useState } from "react";
import hrQuestions from "../data/hrQuestions";

export default function HRQuestions({ domain }) {
    const [openId, setOpenId] = useState(null);

    if (!domain) {
        return (
            <div className="flex items-center justify-center h-[60vh] text-gray-500">
                Please choose a domain first to see HR questions.
            </div>
        );
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">HR Interview Questions</h1>
                <p className="text-gray-500 mt-1 capitalize">For {domain} interviews</p>
            </div>

            {/* Questions */}
            <div className="space-y-4">
                {hrQuestions.map((q, index) => (
                    <div
                        key={q.id}
                        className="bg-white border rounded-2xl p-5 transition-shadow hover:shadow-md"
                    >
                        {/* Question Header */}
                        <button
                            onClick={() => setOpenId(openId === q.id ? null : q.id)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <div>
                                <p className="font-semibold text-lg">
                                    {index + 1}. {q.question}
                                </p>
                            </div>
                            <DifficultyBadge level={q.difficulty} />
                        </button>

                        {/* Answer */}
                        {openId === q.id && (
                            <div className="mt-4 text-gray-600 text-sm max-h-[200px] overflow-auto transition-all">
                                {q.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
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
