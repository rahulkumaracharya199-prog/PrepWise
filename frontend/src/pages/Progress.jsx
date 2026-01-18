import DashboardLayout from "../layouts/DashboardLayout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// Sample progress data (can be fetched dynamically later)
const data = [
    { name: "HR", completed: 24, max: 30 },
    { name: "Technical", completed: 18, max: 25 },
    { name: "Coding", completed: 10, max: 20 },
];

export default function Progress() {
    // Calculate overall progress percentage
    const totalCompleted = data.reduce((acc, item) => acc + item.completed, 0);
    const totalMax = data.reduce((acc, item) => acc + item.max, 0);
    const overallPercent = Math.round((totalCompleted / totalMax) * 100);

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Your Progress
            </h1>

            {/* Overall Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border text-center mb-10">
                <p className="text-gray-500">Overall Completion</p>
                <p className="text-3xl font-bold text-gray-900">{overallPercent}%</p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {data.map((item) => (
                    <Stat key={item.name} title={item.name} value={item.completed} />
                ))}
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">
                    Preparation Overview
                </h2>

                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                        >
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
                                wrapperStyle={{
                                    borderRadius: 12,
                                    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                                }}
                                formatter={(value) => [`${value} Completed`, "Questions"]}
                            />
                            <Bar
                                dataKey="completed"
                                radius={[10, 10, 0, 0]}
                                fill={({ name }) => {
                                    switch (name) {
                                        case "HR":
                                            return "#4F46E5"; // Indigo
                                        case "Technical":
                                            return "#10B981"; // Green
                                        case "Coding":
                                            return "#F59E0B"; // Amber
                                        default:
                                            return "#4F46E5";
                                    }
                                }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </DashboardLayout>
    );
}

// Individual Stat Card
function Stat({ title, value }) {
    const colors = {
        HR: "bg-indigo-50 text-indigo-700",
        Technical: "bg-emerald-50 text-emerald-700",
        Coding: "bg-amber-50 text-amber-700",
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border flex flex-col items-center justify-center">
            <p className="text-gray-500">{title} Questions</p>
            <p className={`mt-2 text-2xl font-bold ${colors[title]}`}>
                {value} Completed
            </p>
        </div>
    );
}
