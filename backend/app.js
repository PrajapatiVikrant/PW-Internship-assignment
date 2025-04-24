import express from "express"
import cors from "cors"
import auth from "./Route/auth.route.js"
import product from "./Route/product.route.js"
import connectMongoDB from "./config/db.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongoDB();
app.use('/book_publisher/auth',auth)
app.use('/book_publisher/product',product)


export default app;