import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-6">

            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center py-24">

                {/* Left Content */}
                <div>
                    <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                        Interview Preparation Platform
                    </span>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Prepare Smarter. <br />
                        Crack Interviews with <span className="text-indigo-600">PrepWise</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Practice HR, Technical, and Coding interview questions in one place.
                        Track your progress and get interview-ready with confidence.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Link
                            to="/signup"
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                        >
                            Get Started Free
                        </Link>

                        <Link
                            to="/login"
                            className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="bg-white rounded-3xl h-[320px] p-6 shadow-sm border">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-600">
                                Dashboard Preview
                            </p>
                            <p className="text-xs text-gray-400">
                                Track progress & practice stats
                            </p>
                        </div>
                        <div className="text-xs text-gray-500">
                            3 min demo
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="p-4 rounded-2xl bg-indigo-50">
                            <p className="text-sm text-gray-500">HR</p>
                            <p className="text-2xl font-bold text-indigo-700 mt-1">24</p>
                            <p className="text-xs text-gray-400 mt-1">Completed</p>
                        </div>

                        <div className="p-4 rounded-2xl bg-emerald-50">
                            <p className="text-sm text-gray-500">Technical</p>
                            <p className="text-2xl font-bold text-emerald-700 mt-1">18</p>
                            <p className="text-xs text-gray-400 mt-1">Completed</p>
                        </div>

                        <div className="p-4 rounded-2xl bg-amber-50">
                            <p className="text-sm text-gray-500">Coding</p>
                            <p className="text-2xl font-bold text-amber-700 mt-1">10</p>
                            <p className="text-xs text-gray-400 mt-1">Solved</p>
                        </div>
                    </div>

                    {/* Mini chart */}
                    <div className="mt-6 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-xs">
                        Progress graph (preview)
                    </div>
                </div>

            </section>

            {/* Features */}
            <section className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose PrepWise?
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <Feature
                        title="HR Questions"
                        desc="Most asked HR interview questions with clear explanations."
                    />
                    <Feature
                        title="Technical Mastery"
                        desc="Prepare core CS subjects and technologies step by step."
                    />
                    <Feature
                        title="Coding Practice"
                        desc="Sharpen problem-solving skills with structured coding questions."
                    />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-600 rounded-3xl text-white text-center py-16 mb-20">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Crack Your Next Interview?
                </h2>
                <p className="text-indigo-100 mb-6">
                    Join PrepWise and start preparing today.
                </p>
                <Link
                    to="/signup"
                    className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Start Now
                </Link>
            </section>

        </div>
    );
}

function Feature({ title, desc }) {
    return (
        <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}
