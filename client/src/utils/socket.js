import { io } from "socket.io-client";

// Initialize the socket but don't connect immediately
const socket = io("http://localhost:8000", {
    transports: ["websocket"],
    autoConnect: false, // Important: Prevent auto-connection issues
    reconnection: true, // Enable auto-reconnection
    reconnectionAttempts: 5, // Retry 5 times before failing
    reconnectionDelay: 1000, // Wait 1 sec before retrying
});

// Debug: Log when connected
socket.on("connect", () => {
    console.log("✅ Socket Connected:", socket.id);
});

// Debug: Log connection errors
socket.on("connect_error", (err) => {
    console.error("❌ Connection Error:", err.message);
});

// Debug: Log when disconnected
socket.on("disconnect", (reason) => {
    console.warn("⚠️ Socket Disconnected:", reason);
});

export default socket;
