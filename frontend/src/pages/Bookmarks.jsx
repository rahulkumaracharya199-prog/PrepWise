import DashboardLayout from "../layouts/DashboardLayout";

export default function Bookmarks() {
    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold mb-6">Bookmarked Questions</h1>

            <div className="bg-white rounded-2xl p-10 text-center text-gray-500">
                Bookmarked questions will appear here.
            </div>
        </DashboardLayout>
    );
}
