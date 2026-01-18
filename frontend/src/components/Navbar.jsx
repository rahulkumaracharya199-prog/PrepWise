import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold text-indigo-600">
                    Prep<span className="text-gray-900">Wise</span>
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-indigo-600" : "hover:text-indigo-600"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) =>
                            isActive ? "text-indigo-600" : "hover:text-indigo-600"
                        }
                    >
                        Dashboard
                    </NavLink>

                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
