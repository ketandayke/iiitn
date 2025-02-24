import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const pages = [
    { name: "Home Page", path: "/admin/manage-home" },
    { name: "Latest Page", path: "/admin/manage-latest" },
    { name: "Placements Page", path: "/admin/manage-placements" },
    { name: "About Us Page", path: "/admin/manage-about-us" }
  ];

  return (
    <div className="w-full bg-gray-100 ">
        <div className="mt-[6rem] min-h-screen w-[90%] p-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page.path}
            className="block p-4 bg-blue-500 text-white rounded-xl text-center shadow-md hover:bg-blue-600 transition"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>

    </div>
    
  );
};

export default AdminDashboard;
