import { config } from "dotenv";
config();
import app from "./app.js";

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`server listen at http://localhost:${port}`);
})