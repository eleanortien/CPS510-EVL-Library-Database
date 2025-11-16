import express from "express";
import cors from "cors";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/", (req, res) => 
{
    res.send("hello");
})


const port = 8080;
app.listen(port, () => {
    console.log("website on " + port);
})



