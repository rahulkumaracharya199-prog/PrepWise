import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";
import { FiTrendingUp, FiCheckCircle, FiBook, FiCode } from "react-icons/fi";
import DashboardLayout from "../layouts/DashboardLayout";

const data = [
    { name: "HR", completed: 24, max: 30, color: "#6366f1", icon: <FiCheckCircle /> },
    { name: "Technical", completed: 18, max: 25, color: "#10b981", icon: <FiBook /> },
    { name: "Coding", completed: 10, max: 20, color: "#f59e0b", icon: <FiCode /> },
];

export default function Progress() {
    const totalCompleted = data.reduce((acc, item) => acc + item.completed, 0);
    const totalMax = data.reduce((acc, item) => acc + item.max, 0);
    const overallPercent = Math.round((totalCompleted / totalMax) * 100);

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto">
                {/* --- Header --- */}
                <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Performance <span className="text-indigo-600">Metrics</span></h1>
                        <p className="text-gray-500 font-medium mt-1">Real-time breakdown of your interview readiness.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 font-bold text-sm">
                        <FiTrendingUp /> 12% increase this week
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* --- Left: Radial Summary Card --- */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center"
                    >
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Overall Mastery</h3>
                        <div className="relative flex items-center justify-center">
                            {/* SVG Progress Circle */}
                            <svg className="w-48 h-48 transform -rotate-90">
                                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-50" />
                                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                                    strokeDasharray={553} 
                                    strokeDashoffset={553 - (553 * overallPercent) / 100} 
                                    className="text-indigo-600 transition-all duration-1000 ease-out" 
                                    strokeLinecap="round" 
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-5xl font-black text-gray-900">{overallPercent}%</span>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Ready</span>
                            </div>
                        </div>
                        <p className="mt-8 text-sm text-gray-500 font-medium px-4">
                            You've mastered <span className="text-gray-900 font-bold">{totalCompleted} concepts</span> across all domains.
                        </p>
                    </motion.div>

                    {/* --- Right: Progress Bars & Chart --- */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stat Grid */}
                        <div className="grid sm:grid-cols-3 gap-6">
                            {data.map((item) => (
                                <StatCard key={item.name} item={item} />
                            ))}
                        </div>

                        {/* Chart Area */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black text-gray-900 tracking-tight">Category Breakdown</h2>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" /> Current
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                                        <div className="w-2 h-2 rounded-full bg-gray-100" /> Target
                                    </div>
                                </div>
                            </div>

                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data} barGap={8}>
                                        <CartesianGrid vertical={false} stroke="#F3F4F6" strokeDasharray="0" />
                                        <XAxis 
                                            dataKey="name" 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 700 }} 
                                            dy={10}
                                        />
                                        <YAxis hide />
                                        <Tooltip 
                                            cursor={{ fill: '#F9FAFB' }}
                                            content={({ active, payload }) => {
                                                if (active && payload && payload.length) {
                                                    return (
                                                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-50">
                                                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{payload[0].payload.name}</p>
                                                            <p className="text-lg font-black text-gray-900">{payload[0].value} / {payload[0].payload.max}</p>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            }}
                                        />
                                        <Bar dataKey="completed" radius={[8, 8, 8, 8]} barSize={40}>
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

function StatCard({ item }) {
    const percent = Math.round((item.completed / item.max) * 100);
    return (
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm group hover:border-indigo-100 transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${item.name === 'HR' ? 'bg-indigo-50 text-indigo-600' : item.name === 'Technical' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                    {item.icon}
                </div>
                <span className="text-[10px] font-black text-gray-300 uppercase">{percent}%</span>
            </div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{item.name}</p>
            <p className="text-xl font-black text-gray-900 mt-1">{item.completed}<span className="text-gray-300 text-sm font-bold">/{item.max}</span></p>
            <div className="w-full h-1.5 bg-gray-50 rounded-full mt-4 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                />
            </div>
        </div>
    );
}
