import express from "express";
import dotenv from "dotenv";
import initDB from "./Backend/config/db.js";
import UserRoutes from './Backend/routes/UserRoutes.js';


const app = express();
app.use(express.json());

dotenv.config();

//it is goging to connect your backend application to mongoodb 
initDB()


app.get("/", (req, res) => (
    res.send("hello from node server")
));

app.use("/api/users",UserRoutes);

const port = process.env.PORT || 8000;

app.listen(port,() => {
    console.log(`server is running from port ${port}`)
});

