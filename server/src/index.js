import { server } from "./server.js";
import { ConnectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();
const PORT=process.env.PORT||8000;

ConnectDB()
.then(()=>{
    server.on("error",()=>{
        console.log(`Error in database connection ${error}`);
    })

    server.listen(PORT ||8000,()=>{
        console.log(`server is live on http://localhost:${PORT}`);
    })

})
.catch((error)=>{
    console.error(`Error in database connection ${error} `);
})