import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

//router
import router from './routes/writer-ai-routes.js'

//db
import Connection from "./database/connection.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT;
const url = process.env.MONGODB_URL;

//database
Connection(url);

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening in the port ${PORT}`);
})


