import { FiUsers, FiCpu, FiCode } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Track your interview preparation progress
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title="HR Questions"
                    value="24"
                    subtitle="Completed"
                    icon={FiUsers}
                    color="indigo"
                    progress={80}
                />
                <StatCard
                    title="Technical"
                    value="18"
                    subtitle="Completed"
                    icon={FiCpu}
                    color="emerald"
                    progress={60}
                />
                <StatCard
                    title="Coding"
                    value="10"
                    subtitle="Solved"
                    icon={FiCode}
                    color="amber"
                    progress={40}
                />
            </div>
        </DashboardLayout>
    );
}

function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
    color = "indigo",
    progress = 0,
}) {
    return (
        <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">

            {/* Icon */}
            <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${color}-100 text-${color}-600`}
            >
                <Icon className="text-xl" />
            </div>

            {/* Content */}
            <h3 className="mt-4 text-gray-500 text-sm">
                {title}
            </h3>

            <p className="mt-1 text-3xl font-bold text-gray-900">
                {value}
                <span className="text-base font-medium text-gray-400 ml-1">
                    {subtitle}
                </span>
            </p>

            {/* Progress bar */}
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-${color}-500 transition-all`}
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
