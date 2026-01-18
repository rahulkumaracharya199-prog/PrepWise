import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiUsers, FiCpu, FiCode, FiBookmark, FiTrendingUp, FiLogOut, FiX } from "react-icons/fi";

/* ===================== MENU DATA ===================== */

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

/* ===================== SIDEBAR ===================== */

export default function Sidebar({ open, setOpen }) {
    const baseLink =
        "group relative flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all";

    const activeLink = "bg-indigo-600 text-white shadow-md";
    const inactiveLink =
        "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600";

    return (
        <>
            {/* Overlay (Mobile) */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed md:static top-0 left-0 z-50 w-64 min-h-screen bg-gray-50 border-r px-4 py-6 flex flex-col
                    transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 `}
            >
                {/* Mobile Header */}
                <div className="flex items-center justify-between md:hidden mb-6">
                    <h1 className="text-xl font-bold text-indigo-600">PrepWise</h1>
                    <button onClick={() => setOpen(false)}>
                        <FiX className="text-2xl text-gray-700" />
                    </button>
                </div>

                {/* Desktop Logo */}
                <div className="hidden md:block mb-10 px-2">
                    <h1 className="text-2xl font-extrabold text-indigo-600">
                        Prep<span className="text-gray-900">Wise</span>
                    </h1>
                    <p className="text-xs text-gray-400 mt-1">
                        Interview Preparation
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-3">
                    <NavSection
                        items={menu}
                        baseLink={baseLink}
                        activeLink={activeLink}
                        inactiveLink={inactiveLink}
                    />

                    <Section title="Preparation" />

                    <NavSection
                        items={prep}
                        baseLink={baseLink}
                        activeLink={activeLink}
                        inactiveLink={inactiveLink}
                    />

                    <Section title="Personal" />

                    <NavSection
                        items={personal}
                        baseLink={baseLink}
                        activeLink={activeLink}
                        inactiveLink={inactiveLink}
                    />
                </nav>

                {/* Logout */}
                <button className="mt-6 flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition">
                    <FiLogOut className="text-lg" />
                    Logout
                </button>
            </aside>
        </>
    );
}

/* ===================== HELPERS ===================== */

function NavSection({ items, baseLink, activeLink, inactiveLink }) {
    return items.map(({ label, to, icon: Icon }) => (
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
    ));
}

function Section({ title }) {
    return (
        <p className="mt-6 mb-2 px-2 text-xs font-semibold text-gray-400 uppercase">
            {title}
        </p>
    );
}
