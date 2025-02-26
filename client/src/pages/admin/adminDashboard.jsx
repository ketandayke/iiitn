import React from "react";
import { Link } from "react-router-dom";
import api from "../../utils/axiosInstance";
import toast from "react-hot-toast";

const AdminDashboard = () => {
    const [pages, setPages] = React.useState([]);

    const fetchPages = async () => {
        try {
            const response = await api.get("/admin/pages");
            setPages(response.data.data || []);
        } catch (error) {
            toast.error("Failed to load pages");
        }
    };

    React.useEffect(() => {
        fetchPages();
    }, []);

    return (
        <div className="w-full bg-gray-100">
            <div className="mt-[6rem] min-h-screen w-[90%] p-8 mx-auto">
                <h1 className="md:text-3xl text-2xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pages.map((page, index) => (
                        <Link
                            key={index}
                            to={`/admin/manage-${page.alias}`}
                            className="block p-4 bg-blue-500 text-white rounded-xl text-center shadow-md hover:bg-blue-600 transition"
                        >
                            {`Manage-${page.alias}`}
                        </Link>
                    ))}
                    {/* ✅ Add Academic Program Management */}
                    <Link
                        to={`/admin/manage-academic-programs`}
                        className="block p-4 bg-green-500 text-white rounded-xl text-center shadow-md hover:bg-green-600 transition"
                    >
                        Manage Academic Programs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
