import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Resources", path: "/resources" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                <Link to="/" className="text-2xl font-black tracking-tight text-indigo-600 hover:scale-105 transition-transform">
                    Prep<span className="text-gray-900">Wise</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => `
                                relative text-sm font-semibold transition-colors duration-200
                                ${isActive ? "text-indigo-600" : "text-gray-600 hover:text-indigo-500"}
                            `}
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/login" className="text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors">
                        Sign In
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 rounded-lg bg-gray-100 text-2xl text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>
            
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 px-6 py-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className="text-lg font-bold text-gray-800"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <hr className="border-gray-100" />
                            <Link to="/login" onClick={() => setOpen(false)} className="text-lg font-bold text-gray-800">
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                onClick={() => setOpen(false)}
                                className="w-full text-center px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
