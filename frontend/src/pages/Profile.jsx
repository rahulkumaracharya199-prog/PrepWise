import DashboardLayout from "../layouts/DashboardLayout";

export default function Profile() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
                My Profile
            </h1>

            <p className="text-gray-500 mb-8">
                Update your personal details and preferences.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Left: Profile Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                    <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-600">
                        R
                    </div>

                    <h2 className="mt-4 text-xl font-semibold text-gray-900">
                        Rahul Kumar
                    </h2>
                    <p className="text-gray-500 text-sm">
                        rahul@example.com
                    </p>

                    <div className="mt-4 flex justify-center gap-2">
                        <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                            Active
                        </span>
                        <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                            Member since 2024
                        </span>
                    </div>

                    <div className="mt-6 flex justify-between text-sm text-gray-500">
                        <div>
                            <p className="font-semibold text-gray-900">Role</p>
                            <p>Candidate</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Level</p>
                            <p>Intermediate</p>
                        </div>
                    </div>
                </div>

                {/* Right: Edit Profile */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border">
                    <h2 className="text-xl font-semibold mb-6 text-gray-900">
                        Edit Profile
                    </h2>

                    <form className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Rahul Kumar"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                defaultValue="rahul@example.com"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                placeholder="Optional"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="India"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1 text-gray-700">
                                Bio
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Tell something about yourself"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="button"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
                            >
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
