import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Use for the 'next level' feel
import { FiCheckCircle, FiCode, FiCpu, FiUsers, FiArrowRight } from "react-icons/fi";

export default function Home() {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- Hero Section --- */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-bold text-indigo-700 bg-indigo-100/50 border border-indigo-200 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                            </span>
                            Interview Preparation 2.0
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Interview</span> Game.
                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                            Stop memorizing, start mastering. PrepWise uses data-driven insights to help you ace HR, Technical, and System Design rounds.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/signup"
                                className="group px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                            >
                                Get Started Free
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/login"
                                className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all text-center"
                            >
                                View Demo
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex items-center gap-6 text-gray-400">
                            <p className="text-xs font-bold uppercase tracking-widest">Trusted by students from</p>
                            <div className="flex gap-4 grayscale opacity-70 font-black italic">
                                <span>FAANG</span> <span>FORTUNE 500</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual - Layered Dashboard Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-bold text-gray-900">Performance Overview</h3>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <StatsBar label="Technical Proficiency" progress="85%" color="bg-indigo-600" />
                                <StatsBar label="Communication Score" progress="72%" color="bg-emerald-500" />
                                <StatsBar label="DSA Accuracy" progress="64%" color="bg-amber-500" />
                            </div>

                            <div className="mt-8 pt-8 border-t grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-black text-indigo-600">124</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Solved</p>
                                </div>
                                <div className="text-center border-x">
                                    <p className="text-2xl font-black text-gray-900">12</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Mock Exams</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-black text-emerald-600">92%</p>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Percentile</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating Decoration */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600 rounded-3xl -z-10 blur-2xl opacity-20 animate-pulse" />
                    </motion.div>
                </section>

                {/* --- Features Section --- */}
                <section className="py-24">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-base font-bold text-indigo-600 uppercase tracking-widest mb-4">Core Modules</h2>
                        <h3 className="text-4xl font-black text-gray-900">Everything you need to land the offer.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Feature
                            icon={<FiUsers className="w-6 h-6" />}
                            title="HR & Behavioral"
                            desc="Master the 'Tell me about yourself' and STAR method questions with AI feedback."
                            color="indigo"
                        />
                        <Feature
                            icon={<FiCpu className="w-6 h-6" />}
                            title="Technical Core"
                            desc="Deep dives into OS, DBMS, Networking, and System Design patterns."
                            color="emerald"
                        />
                        <Feature
                            icon={<FiCode className="w-6 h-6" />}
                            title="DSA Practice"
                            desc="Curated lists from LeetCode and GFG specifically for top-tier companies."
                            color="amber"
                        />
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="mb-32">
                    <div className="relative bg-gray-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                                Don't leave your career to chance.
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                                Join 10,000+ developers practicing on PrepWise every day.
                            </p>
                            <Link
                                to="/signup"
                                className="inline-block bg-white text-gray-900 px-10 py-4 rounded-2xl font-black hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl"
                            >
                                Start Preparing Now
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function StatsBar({ label, progress, color }) {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-gray-700">{label}</span>
                <span className="text-xs font-bold text-gray-500">{progress}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: progress }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${color}`}
                />
            </div>
        </div>
    );
}

function Feature({ icon, title, desc, color }) {
    const colors = {
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
        amber: "bg-amber-50 text-amber-600 border-amber-100"
    };

    return (
        <div className="group p-10 bg-white border border-gray-100 rounded-[2rem] hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300">
            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-8 border transition-transform group-hover:scale-110 duration-300 ${colors[color]}`}>
                {icon}
            </div>
            <h4 className="text-xl font-black text-gray-900 mb-4">{title}</h4>
            <p className="text-gray-500 leading-relaxed">{desc}</p>
        </div>
    );
}
