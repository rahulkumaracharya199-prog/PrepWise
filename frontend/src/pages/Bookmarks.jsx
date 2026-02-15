import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBookmark, FiSearch, FiFilter, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import QuestionCard from "../components/QuestionCard";

export default function Bookmarks() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    
    // Example data - in a real app, this comes from state/API
    const [bookmarkedQuestions, setBookmarkedQuestions] = useState([
        { id: 1, question: "What is the Virtual DOM in React?", answer: "The Virtual DOM is a lightweight copy of the real DOM...", difficulty: "Medium", category: "React" },
        { id: 2, question: "Explain Closures in JavaScript.", answer: "A closure is the combination of a function bundled together...", difficulty: "Hard", category: "JavaScript" }
    ]);

    const filteredQuestions = bookmarkedQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto">
                
                {/* --- Header Section --- */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-indigo-600 rounded-lg text-white">
                                <FiBookmark size={20} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Saved Resources</span>
                        </div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Your <span className="text-indigo-600">Bookmarks</span></h1>
                        <p className="text-gray-500 mt-2 font-medium">Review and master the concepts you've saved.</p>
                    </div>

                    {/* Quick Filters/Search */}
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search bookmarks..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all w-full md:w-64"
                            />
                        </div>
                        <button className="p-3.5 bg-white border border-gray-200 rounded-2xl text-gray-500 hover:text-indigo-600 transition-colors shadow-sm">
                            <FiFilter />
                        </button>
                    </div>
                </header>

                {/* --- Content Grid --- */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredQuestions.length === 0 ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 text-center px-6"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
                                    <FiBookmark size={40} />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">
                                    {searchQuery ? "No matches found" : "Your library is empty"}
                                </h3>
                                <p className="text-gray-500 max-w-sm mb-8 font-medium">
                                    {searchQuery 
                                        ? "Try adjusting your search terms to find what you're looking for." 
                                        : "Bookmark challenging questions during your practice to see them here."}
                                </p>
                                {!searchQuery && (
                                    <button 
                                        onClick={() => navigate("/dashboard")}
                                        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                                    >
                                        Explore Questions <FiArrowRight />
                                    </button>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div 
                                layout
                                className="grid grid-cols-1 gap-6"
                            >
                                {filteredQuestions.map((q) => (
                                    <motion.div
                                        layout
                                        key={q.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <QuestionCard
                                            question={q.question}
                                            answer={q.answer}
                                            level={q.difficulty}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </DashboardLayout>
    );
}
