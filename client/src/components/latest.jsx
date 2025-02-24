import React, { useState } from "react";

const notices = [
  { id: 1, title: "Mid-Semester Exams Schedule Released", category: "Students", date: "Feb 20, 2025" },
  { id: 2, title: "Workshop on AI and Machine Learning", category: "Faculty", date: "Feb 18, 2025" },
  { id: 3, title: "IIITN Ranked Among Top 10 IT Institutes", category: "Achievements", date: "Feb 15, 2025" },
  { id: 4, title: "Annual Sports Meet Registrations Open", category: "Students", date: "Feb 14, 2025" },
];

const categories = ["All", "Students", "Faculty", "Achievements"];

export default function Latest() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices = selectedCategory === "All" 
    ? notices 
    : notices.filter((notice) => notice.category === selectedCategory);

  return (
    <div className="w-full overflow-hidden">
        <div className="w-[90%] mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">📢 Latest in IIITN</h2>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-4 space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-lg border ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600"
            } hover:bg-blue-500 hover:text-white`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className="border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{notice.date}</p>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">
              {notice.category}
            </span>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
      <button className="mt-4 px-6 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer">View All</button>
      </div>
    </div>
    </div>
  );
}
