import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

export default function AdminDash() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Socket Connected:", socket.id);
    });

    // Listen for new notifications
    socket.on("notification", (data) => {
      console.log("🔔 New Notification Received:", data);
      setNotifications((prev) => [...prev, data.message]); // Update state
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <div className="p-[8rem] w-full h-screen">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Notifications:</h2>
        <ul className="list-disc pl-5">
          {notifications.map((notif, index) => (
            <li key={index} className="text-green-600">{notif}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
