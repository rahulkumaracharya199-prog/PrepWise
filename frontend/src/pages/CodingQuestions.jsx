import DashboardLayout from "../layouts/DashboardLayout";
import QuestionCard from "../components/QuestionCard";
import { codingQuestions } from "../data/questions";

export default function CodingQuestions() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">
                Coding Interview Questions
            </h1>

            <div className="space-y-4">
                {codingQuestions.map((q) => (
                    <QuestionCard
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                        level={q.level}
                    />
                ))}
            </div>
        </DashboardLayout>
    );
}
