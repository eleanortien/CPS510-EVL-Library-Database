import express from "express";
import cors from "cors";
import { create_oracle_pool } from './db.js';
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.get("/", (req, res) => {
    res.send("hello");
});
app.post("/login", async (req, res) => {
    const body = req.body;
    const { username, password } = req.body;
    let ret = await create_oracle_pool(username, password);
    if (!ret) {
        res.send("Login unsuccessful");
    }
    else {
        res.send("Login successful");
    }
});
const port = 8080;
app.listen(port, () => {
    console.log("website on " + port);
});
//# sourceMappingURL=app.js.map