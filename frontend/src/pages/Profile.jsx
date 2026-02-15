import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { motion } from "framer-motion";
import { FiEdit2, FiCamera, FiGithub, FiLinkedin, FiGlobe, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Profile() {
    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto">
                {/* --- Header --- */}
                <header className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Account <span className="text-indigo-600">Settings</span></h1>
                    <p className="text-gray-500 font-medium mt-2">Manage your professional identity and platform preferences.</p>
                </header>

                <div className="grid lg:grid-cols-12 gap-8">
                    
                    {/* --- Left: Enhanced Profile Card (4 Columns) --- */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10" />
                            
                            {/* Avatar with Edit Overlay */}
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-[2rem] bg-white p-1 shadow-xl relative z-10">
                                    <div className="w-full h-full rounded-[1.8rem] bg-indigo-600 flex items-center justify-center text-4xl font-black text-white">
                                        R
                                    </div>
                                </div>
                                <button className="absolute bottom-2 right-2 z-20 p-2.5 bg-white rounded-xl shadow-lg border border-gray-100 text-indigo-600 hover:scale-110 transition-transform">
                                    <FiCamera size={18} />
                                </button>
                            </div>

                            <h2 className="mt-6 text-2xl font-black text-gray-900">Rahul Kumar</h2>
                            <p className="text-indigo-600 font-bold text-sm tracking-wide uppercase">Fullstack Developer</p>
                            
                            <div className="mt-4 flex gap-3">
                                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-gray-900 transition-colors"><FiGithub /></button>
                                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors"><FiLinkedin /></button>
                                <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-indigo-600 transition-colors"><FiGlobe /></button>
                            </div>

                            {/* User Stats/Level */}
                            <div className="mt-8 w-full grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Questions</p>
                                    <p className="text-xl font-black text-gray-900">128</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mastery</p>
                                    <p className="text-xl font-black text-indigo-600">Level 4</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Progress/Activity Section */}
                        <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-black text-gray-900 mb-4 uppercase tracking-widest">Activity Score</h3>
                            
                            <div className="h-2 w-full bg-gray-100 rounded-full mt-4">
                                <div className="h-full w-[70%] bg-indigo-600 rounded-full" />
                            </div>
                            <p className="text-[11px] text-gray-400 mt-2 font-bold uppercase tracking-tighter">70% to Level 5 Mastery</p>
                        </div>
                    </div>

                    {/* --- Right: Detailed Forms (8 Columns) --- */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-black text-gray-900 tracking-tight">Personal Information</h2>
                                <button className="text-indigo-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                                    <FiEdit2 /> Edit Mode
                                </button>
                            </div>

                            <form className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                                {/* Name Input Wrapper */}
                                <InputWrapper label="Full Name" icon={<FiEdit2 />}>
                                    <input type="text" defaultValue="Rahul Kumar" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" />
                                </InputWrapper>

                                <InputWrapper label="Email Address" icon={<FiMail />}>
                                    <input type="email" defaultValue="rahul@example.com" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" />
                                </InputWrapper>

                                <InputWrapper label="Contact Phone" icon={<FiPhone />}>
                                    <input type="text" placeholder="+91 98765 43210" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" />
                                </InputWrapper>

                                <InputWrapper label="Location" icon={<FiMapPin />}>
                                    <input type="text" defaultValue="Patna, India" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all" />
                                </InputWrapper>

                                <div className="md:col-span-2">
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Professional Bio</label>
                                    <textarea rows="4" className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold text-gray-900 outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none" placeholder="Briefly describe your expertise..." />
                                </div>

                                <div className="md:col-span-2 flex justify-end pt-4">
                                    <button type="button" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}

// Reusable Input Component for cleaner code
function InputWrapper({ label, children, icon }) {
    return (
        <div>
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-indigo-500 transition-colors">
                    {icon}
                </div>
                {children}
            </div>
        </div>
    );
}
