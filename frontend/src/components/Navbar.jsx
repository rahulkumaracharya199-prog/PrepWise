import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold text-indigo-600">
                    Prep<span className="text-gray-900">Wise</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-indigo-600" : "hover:text-indigo-600"}>
                        Dashboard
                    </NavLink>
                </div>

                {/* Right Buttons (Desktop) */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600">
                        Login
                    </Link>
                    <Link to="/signup" className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
                    <NavLink to="/" onClick={() => setOpen(false)} className="block font-medium text-gray-700">
                        Home
                    </NavLink>
                    <NavLink to="/dashboard" onClick={() => setOpen(false)} className="block font-medium text-gray-700">
                        Dashboard
                    </NavLink>
                    <NavLink to="/login" onClick={() => setOpen(false)} className="block font-medium text-gray-700">
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        onClick={() => setOpen(false)}
                        className="block text-center px-4 py-2 bg-indigo-600 text-white rounded-xl"
                    >
                        Get Started
                    </NavLink>
                </div>
            )}
        </nav>
    );
}
