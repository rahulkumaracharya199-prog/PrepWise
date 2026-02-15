import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    FiHome, FiUser, FiUsers, FiCpu, FiCode, 
    FiBookmark, FiTrendingUp, FiLogOut, FiX, FiZap 
} from "react-icons/fi";

/* ===================== MENU DATA ===================== */
const menu = [
    { label: "Dashboard", to: "/dashboard", icon: FiHome },
    { label: "Profile", to: "/profile", icon: FiUser },
];

const prep = [
    { label: "HR Questions", to: "/hr", icon: FiUsers },
    { label: "Technical Mastery", to: "/tech", icon: FiCpu },
    { label: "Coding Lab", to: "/coding", icon: FiCode },
];

const personal = [
    { label: "Bookmarks", to: "/bookmarks", icon: FiBookmark },
    { label: "My Progress", to: "/progress", icon: FiTrendingUp },
];

/* ===================== SIDEBAR ===================== */
export default function Sidebar({ open, setOpen }) {
    const baseLink = "relative flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-200 group";
    const activeLink = "bg-indigo-600 text-white shadow-lg shadow-indigo-100";
    const inactiveLink = "text-gray-500 hover:text-indigo-600 hover:bg-white";

    return (
        <>
            {/* Overlay (Mobile) */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 md:hidden"
                />
            )}

            <aside
                className={`fixed md:sticky top-0 left-0 z-50 w-72 h-screen bg-[#F8FAFC] border-r border-gray-200/60 px-6 py-8 flex flex-col
                    transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}
            >
                {/* Brand Logo */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                            <FiZap className="text-white text-xl fill-current" />
                        </div>
                        <h1 className="text-xl font-black text-gray-900 tracking-tight">
                            Prep<span className="text-indigo-600">Wise</span>
                        </h1>
                    </div>
                    <button onClick={() => setOpen(false)} className="md:hidden p-2 hover:bg-gray-200 rounded-lg">
                        <FiX className="text-xl text-gray-600" />
                    </button>
                </div>

                {/* Navigation Scroll Area */}
                <nav className="flex-1 space-y-7">
                    <div>
                        <SectionTitle title="Main Menu" />
                        <NavSection items={menu} baseLink={baseLink} activeLink={activeLink} inactiveLink={inactiveLink} />
                    </div>

                    <div>
                        <SectionTitle title="Preparation" />
                        <NavSection items={prep} baseLink={baseLink} activeLink={activeLink} inactiveLink={inactiveLink} />
                    </div>

                    <div>
                        <SectionTitle title="Personal" />
                        <NavSection items={personal} baseLink={baseLink} activeLink={activeLink} inactiveLink={inactiveLink} />
                    </div>
                </nav>

                {/* Bottom Section: Profile & Logout */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 px-2 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-[2px]">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=Rahul+Kumar&background=random" alt="User" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black text-gray-900 leading-tight">Rahul Kumar</span>
                            <span className="text-[11px] font-bold text-gray-400">Pro Member</span>
                        </div>
                    </div>

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
                        <FiLogOut className="text-lg" />
                        Sign Out
                    </button>
                </div>
            </aside>
        </>
    );
}

/* ===================== HELPERS ===================== */

function NavSection({ items, baseLink, activeLink, inactiveLink }) {
    return (
        <div className="space-y-1">
            {items.map(({ label, to, icon: Icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                        `${baseLink} ${isActive ? activeLink : inactiveLink}`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <Icon className={`text-lg ${isActive ? "text-white" : "text-gray-400 group-hover:text-indigo-600"}`} />
                            {label}
                            {isActive && (
                                <motion.div 
                                    layoutId="activePill"
                                    className="absolute inset-0 bg-indigo-600 rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </>
                    )}
                </NavLink>
            ))}
        </div>
    );
}

function SectionTitle({ title }) {
    return (
        <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">
            {title}
        </p>
    );
}
