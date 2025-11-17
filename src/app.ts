import express from "express";
import cors from "cors";
import { create_oracle_pool } from './db.js';

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/", (req, res) => 
{
    res.send("hello");
})

app.get("/login", async(req, res) => 
{
    await create_oracle_pool();
})

const port = 8080;
app.listen(port, () => {
    console.log("website on " + port);
})



