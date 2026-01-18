import DashboardLayout from "../layouts/DashboardLayout";
import QuestionCard from "../components/QuestionCard"; // optional for future dynamic rendering

export default function Bookmarks() {
    // Placeholder: you can replace this with actual bookmarked questions
    const bookmarkedQuestions = []; // later fetch from state, localStorage, or backend

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                {/* Page Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                    Bookmarked Questions
                </h1>
                <p className="text-gray-500 text-sm sm:text-base">
                    Here are all the questions you have bookmarked for quick access.
                </p>

                {/* Bookmarks List */}
                {bookmarkedQuestions.length === 0 ? (
                    <div className="bg-white rounded-2xl p-6 sm:p-10 text-center text-gray-500 shadow-sm">
                        You haven't bookmarked any questions yet.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {bookmarkedQuestions.map((q) => (
                            <QuestionCard
                                key={q.id}
                                question={q.question}
                                answer={q.answer}
                                level={q.difficulty}
                            />
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
