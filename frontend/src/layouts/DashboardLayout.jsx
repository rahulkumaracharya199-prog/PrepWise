import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* 1. THE SEARCH NAVBAR (Sticky & Top Level) */}
            <div className="sticky top-0 z-[100] bg-[#F8FAFC] w-full px-6 sm:px-10 lg:px-12 py-6 flex items-center justify-between gap-4">
                
                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 hover:bg-gray-100 rounded-xl md:hidden transition-colors"
                >
                    <FiMenu className="text-2xl text-gray-700" />
                </button>

                {/* The Search Input */}
                <div className="flex-1 max-w-2xl flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/10 transition-all">
                    <FiSearch className="text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search your courses, mocks..." 
                        className="bg-transparent border-none outline-none text-sm w-full" 
                    />
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex p-2.5 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 rounded-xl text-gray-400 relative transition-all">
                        <FiBell className="text-xl" />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#F8FAFC]"></span>
                    </button>
                    <img 
                        src="https://ui-avatars.com/api/?name=Rahul+Kumar&background=6366f1&color=fff" 
                        alt="User" 
                        className="w-10 h-10 rounded-2xl shadow-sm border border-gray-200"
                    />
                </div>
            </div>

            <div className="flex">
                {/* 2. SIDEBAR (z-index lower than Search Bar) */}
                <aside className="relative z-10">
                    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                </aside>

                {/* 3. MAIN CONTENT */}
                <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-12 pb-12 relative z-10">
                    {children}
                </main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div 
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-gray-900/40 z-[110] md:hidden"
                />
            )}
        </div>
    );
}
