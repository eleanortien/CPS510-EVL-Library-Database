import express from "express";
import cors from "cors";
import { create_oracle_pool, close_oracle_pool, drop_tables, create_tables, populate_tables, simple_query_tables, advanced_query_tables, view_tables } from './db.js';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/", (req, res) => 
{
    res.send("hello");
})

//Login function - sends successful or unsuccessful response
app.post("/login", async(req, res) => 
{
    const body = req.body;
    const {username, password} = req.body;

    try{
        await create_oracle_pool(username, password);
        res.status(200).send("Login successful");

    } catch (err) {
        res.status(401).send("Login unsuccessful");
    }
    
})

app.post("/close-session", async(req, res) =>
{
    try{
        await close_oracle_pool();
        res.status(200).send("Successfully closed session");
    } catch (err) {
        console.log(err);
        res.status(400).send("Error while closing session");
    }
})

//Drop function - sends successful or unsuccessful response
app.get("/drop", async(req, res) =>
{
    try{
        await drop_tables();
        res.status(200).send("Successfully dropped tables")
    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})

//Create function - sends successful or unsuccessful response
app.get("/create", async(req, res) =>
{
    try{
        await create_tables();
        res.status(200).send("Successfully created tables");
    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})

//Populate function - sends successful or unsuccessful response
app.get("/populate", async(req, res) =>
{
    try{
        await populate_tables();
        res.status(200).send("Successfully populated tables");
    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})

//Simple query function - takes in querynum and sends resulting json
app.get("/simple-query/:querynum", async(req, res) =>
{
    try{
        const querynum = parseInt(req.params.querynum);

        let result = await simple_query_tables(querynum);
        res.status(201).json(result);

    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})

//Advanced query function - takes in querynum and sends resulting json
app.get("/advanced-query/:querynum", async(req, res) =>
{
    try{
        const querynum = parseInt(req.params.querynum);

        let result = await advanced_query_tables(querynum);
        res.status(201).json(result);

    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})

//View tables function - takes in querynum and sends resulting json
app.get("/view-tables/:querykey", async(req, res) =>
{
    try{
        const querykey = req.params.querykey;

        let result = await view_tables(querykey);
        res.status(201).json(result);

    } catch (err){
        res.status(400).send("Unable to create connection to Oracle DB");
    }

})


const port = 8080;
app.listen(port, () => {
    console.log("website on http://localhost:" + port);
})



