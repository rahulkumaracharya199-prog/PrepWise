import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiUsers, FiCpu, FiCode, FiBookmark, FiTrendingUp, FiLogOut } from "react-icons/fi";

const menu = [
    { label: "Dashboard", to: "/dashboard", icon: FiHome },
    { label: "Profile", to: "/profile", icon: FiUser },
];

const prep = [
    { label: "HR Questions", to: "/hr", icon: FiUsers },
    { label: "Technical Questions", to: "/tech", icon: FiCpu },
    { label: "Coding Questions", to: "/coding", icon: FiCode },
];

const personal = [
    { label: "Bookmarks", to: "/bookmarks", icon: FiBookmark },
    { label: "Progress", to: "/progress", icon: FiTrendingUp },
];

export default function Sidebar() {
    const baseLink =
        "group relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all";

    const activeLink =
        "bg-indigo-600 text-white shadow-md";

    const inactiveLink =
        "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600";

    return (
        <aside className="w-64 min-h-screen bg-gray-50 border-r px-4 py-6 flex flex-col">

            {/* Logo */}
            <div className="mb-10 px-2">
                <h1 className="text-2xl font-extrabold text-indigo-600">
                    Prep<span className="text-gray-900">Wise</span>
                </h1>
                <p className="text-xs text-gray-400 mt-1">
                    Interview Preparation
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-3">

                {menu.map(({ label, to, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : inactiveLink}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {/* Active Indicator */}
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-white" />
                                )}
                                <Icon className="text-lg" />
                                {label}
                            </>
                        )}
                    </NavLink>
                ))}

                <Section title="Preparation" />

                {prep.map(({ label, to, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : inactiveLink}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-white" />
                                )}
                                <Icon className="text-lg" />
                                {label}
                            </>
                        )}
                    </NavLink>
                ))}

                <Section title="Personal" />

                {personal.map(({ label, to, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `${baseLink} ${isActive ? activeLink : inactiveLink}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-white" />
                                )}
                                <Icon className="text-lg" />
                                {label}
                            </>
                        )}
                    </NavLink>
                ))}

            </nav>

            {/* Logout */}
            <button className="mt-6 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition">
                <FiLogOut className="text-lg" />
                Logout
            </button>
        </aside>
    );
}

function Section({ title }) {
    return (
        <p className="mt-6 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase">
            {title}
        </p>
    );
}
