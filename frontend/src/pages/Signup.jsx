import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div className="min-h-[92vh] flex items-center justify-center px-6 bg-gradient-to-br from bg-indigo-50 via-white-to-indigo-100">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

                <h2 className="text-2xl font-bold text-center mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Start your interview preparation journey
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="Rahul Kumar"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="rahul@gmail.com"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
