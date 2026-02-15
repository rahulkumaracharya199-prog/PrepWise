import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-10 relative overflow-hidden bg-[#F8FAFC]">
            {/* Ambient Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-indigo-100 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[5%] left-[-5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] opacity-50" />
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-[480px]"
            >
                <div className="bg-white/70 backdrop-blur-2xl p-8 lg:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(79,70,229,0.15)] border border-white">
                    
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 mb-6 rotate-3">
                            <span className="text-white text-2xl font-black">W</span>
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Create Account</h2>
                        <p className="text-gray-500 mt-2 font-medium">Join 10,000+ students preparing smarter.</p>
                    </div>

                    {/* Social Signup */}
                    <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3.5 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all mb-8 shadow-sm">
                        <FcGoogle className="text-2xl" />
                        Sign up with Google
                    </button>

                    <div className="relative mb-8 text-center">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                        <span className="relative px-4 text-[10px] font-black text-gray-400 bg-transparent uppercase tracking-[0.2em]">or use email</span>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 gap-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                                <div className="relative">
                                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2 ml-1">Password</label>
                                <div className="relative">
                                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-12 py-3.5 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all font-medium"
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors"
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                <div className="mt-3 flex gap-2">
                                    {[1, 2, 3, 4].map((v) => (
                                        <div key={v} className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-indigo-500 w-0" /> {/* Dynamic width based on strength */}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-400 mt-2 ml-1 font-bold italic">Strong passwords include numbers and symbols.</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                                Create Account
                                <FiCheckCircle className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm font-bold text-gray-500">
                            Already have an account?{" "}
                            <Link to="/login" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400 font-medium px-6">
                    By clicking "Create Account", you agree to our 
                    <a href="#" className="text-gray-600 underline underline-offset-4 ml-1">Terms</a> and 
                    <a href="#" className="text-gray-600 underline underline-offset-4 ml-1">Privacy Policy</a>.
                </p>
            </motion.div>
        </div>
    );
}
