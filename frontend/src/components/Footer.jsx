import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-extrabold text-indigo-600">
                            Prep<span className="text-gray-900">Wise</span>
                        </h2>
                        <p className="mt-2 text-gray-500 max-w-sm mx-auto md:mx-0">
                            Smart interview preparation platform for students and developers.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-10 text-center sm:text-left">

                        <div>
                            <h4 className="font-semibold mb-3">Product</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                                <li><Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link></li>
                                <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Legal</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="cursor-pointer hover:text-indigo-600">Privacy Policy</li>
                                <li className="cursor-pointer hover:text-indigo-600">Terms of Service</li>
                                <li className="cursor-pointer hover:text-indigo-600">Contact</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-zinc-300 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} PrepWise. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
