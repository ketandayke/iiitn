import {createServer} from "http";
import {app} from "./app.js";
import {Server} from "socket.io";

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:3000",  // Fix typo
        methods: ["GET", "POST"],
    },
});


let connectedAdmins= new Set();

io.on("connection",(socket)=>{

    console.log("server is connected");

    // setTimeout(() => {
    //     io.emit("notification", { message: "New content update available!" });
    //   }, 5000); // Trigger after 5 seconds (for testing)
    
    socket.on("admin_connected",()=>{
        connectedAdmins.add(socket.id);
        console.log("admin connected",socket.id)
    })
    socket.on("disconnect",()=>{
        connectedAdmins.delete(socket.id);
        console.log("server disconnected");
    })
});


const sendNotification = (message,data)=>{
    connectedAdmins.forEach((adminSocketId)=>{
         io.to(adminSocketId).emit("new notification",{message,data});
})
}

export {server,io,sendNotification,}

