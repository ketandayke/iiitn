import { useState } from "react";

const Administration = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="max-w-lg mx-auto my-4">
      <button
        onClick={toggleOpen}
        className="w-full text-left p-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-all"
      >
        Administration {open ? "▲" : "▼"}
      </button>

      {open && (
        <ul className="mt-2 bg-white shadow-md rounded-lg p-3 space-y-2">
          {["Chairman", "Director", "Registrar", "Staff"].map((item) => (
            <li
              key={item}
              className="p-2 border-b last:border-none hover:bg-gray-100 cursor-pointer transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Administration;
