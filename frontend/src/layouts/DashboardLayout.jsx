import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiMenu } from "react-icons/fi";

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex bg-gray-50 min-h-screen">

            {/* Sidebar (fixed on desktop, slide-in on mobile) */}
            <div>
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col">

                {/* Mobile Header */}
                <header className="md:hidden flex items-center gap-3 bg-white shadow px-4 py-3 sticky top-0 z-50">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-2xl text-gray-700"
                    >
                        <FiMenu />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
                </header>

                {/* Scrollable content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
                    {children}
                </main>

            </div>
        </div>
    );
}
