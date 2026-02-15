import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-200 bg-white pt-16 pb-8 overflow-hidden">
            {/* Subtle background glow for a "Modern SaaS" look */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="text-2xl font-black tracking-tight text-indigo-600">
                            Prep<span className="text-gray-900">Wise</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            The intelligent interview preparation platform designed to help you land your dream job with AI-driven insights.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink icon={<FaTwitter />} href="#" />
                            <SocialLink icon={<FaGithub />} href="#" />
                            <SocialLink icon={<FaLinkedin />} href="#" />
                            <SocialLink icon={<FaYoutube />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Product</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/dashboard" label="Dashboard" />
                            <FooterLink to="/login" label="Premium Features" />
                            <FooterLink to="/signup" label="Success Stories" />
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Support</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <FooterLink to="#" label="Documentation" />
                            <FooterLink to="#" label="API Reference" />
                            <FooterLink to="#" label="Help Center" />
                            <FooterLink to="#" label="Community" />
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100/50">
                        <h4 className="font-bold text-indigo-900 mb-2">Stay Updated</h4>
                        <p className="text-xs text-indigo-700/70 mb-4">Get the latest interview tips & feature releases.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            />
                            <button className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-medium text-gray-500">
                        © {new Date().getFullYear()} PrepWise Inc. Made with ❤️ for developers.
                    </p>
                    <div className="flex gap-6">
                        <Link to="#" className="text-xs font-medium text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-xs font-medium text-gray-400 hover:text-indigo-600 transition-colors">Terms of Service</Link>
                        <Link to="#" className="text-xs font-medium text-gray-400 hover:text-indigo-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Sub-components for cleaner code
function FooterLink({ to, label }) {
    return (
        <li>
            <Link to={to} className="text-gray-500 hover:text-indigo-600 transition-all hover:pl-1">
                {label}
            </Link>
        </li>
    );
}

function SocialLink({ icon, href }) {
    return (
        <a
            href={href}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
        >
            {icon}
        </a>
    );
}
