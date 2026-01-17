import DashboardLayout from "../layouts/DashboardLayout";
import QuestionCard from "../components/QuestionCard";
import { techQuestions } from "../data/questions";

export default function TechQuestions() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">
                Technical Interview Questions
            </h1>

            <div className="space-y-4">
                {techQuestions.map((q) => (
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
