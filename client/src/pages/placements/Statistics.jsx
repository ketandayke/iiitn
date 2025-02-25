import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Statistics() {
  const placementData = [
    { year: "2024", highest: 47, average: 14, median: 12, total: 154 },
    { year: "2023", highest: 90, average: 14, median: 12, total: 140 },
    { year: "2022", highest: 40, average: 12.04, median: 10, total: 130 },
    { year: "2021", highest: 46.75, average: 8.44, median: 7, total: 120 },
    { year: "2020", highest: 20, average: 8.5, median: 6, total: 110 },
  ];

  const topRecruiters = [
    "Siemens Healthineers",
    "Reliance Jio",
    "Clever Tap",
    "Affluence Infosystems Ltd",
    "ARM Embedded Systems",
    "Tech Walnut LLP",
    "TCS (R&I Profile)",
    "Swabhav Technologies",
    "TCS (Digital Profile)",
    "Click2Cloud Inc",
    "TCS NQT (Ninja Profile)",
    "WileyNXT",
    "Manipal Global Education Ltd",
    "Power Exchange India Ltd",
    "L&T Infotech",
    "Virtusa",
    "Persistent Systems Ltd",
    "Ubisoft",
    "ACT FiberNet",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-center text-5xl font-bold text-blue-700 mt-25 mb-10">
        Placement Statistics
      </h1>
      <div className="flex justify-center mb-10">
        <img
          src="../../../images/ThumbnailImage.jpg"
          alt="Placement Office"
          className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
        />
      </div>
      ;{/* Graph Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Placement Trends
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={placementData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="highest"
              fill="#3182CE"
              name="Highest Package (LPA)"
            />
            <Bar
              dataKey="average"
              fill="#82ca9d"
              name="Average Package (LPA)"
            />
            <Bar dataKey="median" fill="#ffc658" name="Median Package (LPA)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Table Section */}
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Batch-Wise Data
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4">Batch</th>
              <th className="p-4">Highest Package (LPA)</th>
              <th className="p-4">Average Package (LPA)</th>
              <th className="p-4">Median Package (LPA)</th>
              <th className="p-4">Companies Visited</th>
            </tr>
          </thead>
          <tbody>
            {placementData.map((batch) => (
              <tr className="border-b" key={batch.year}>
                <td className="p-4">{batch.year}</td>
                <td className="p-4">{batch.highest}</td>
                <td className="p-4">{batch.average}</td>
                <td className="p-4">{batch.median}</td>
                <td className="p-4">{batch.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Companies Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Top Recruiters
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-disc pl-5">
          {topRecruiters.map((company, index) => (
            <li key={index} className="text-lg font-medium text-gray-700">
              {company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
