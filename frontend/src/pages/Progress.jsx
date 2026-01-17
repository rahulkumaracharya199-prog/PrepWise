import DashboardLayout from "../layouts/DashboardLayout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "HR", completed: 24 },
    { name: "Technical", completed: 18 },
    { name: "Coding", completed: 10 },
];

export default function Progress() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Your Progress
            </h1>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Stat title="HR Questions" value="24 Completed" />
                <Stat title="Technical" value="18 Completed" />
                <Stat title="Coding" value="10 Solved" />
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Preparation Overview
                </h2>

                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#6B7280", fontSize: 13 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#6B7280", fontSize: 13 }}
                            />
                            <Tooltip
                                wrapperStyle={{ borderRadius: 12, boxShadow: "0 4px 14px rgba(0,0,0,0.08)" }}
                            />
                            <Bar dataKey="completed" radius={[10, 10, 0, 0]} fill="#4F46E5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </DashboardLayout>
    );
}

function Stat({ title, value }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="text-gray-500">{title}</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
}
