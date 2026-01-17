import DashboardLayout from "../layouts/DashboardLayout";
import QuestionCard from "../components/QuestionCard";
import { hrQuestions } from "../data/questions";

export default function HRQuestions() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">HR Interview Questions</h1>

            <div className="space-y-4">
                {hrQuestions.map((q) => (
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
};
