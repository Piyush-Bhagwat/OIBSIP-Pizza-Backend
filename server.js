import express from "express";
import { connectDB } from "./database/mongooseConnect.js";
import bodyParser from "body-parser";
import { addPizza } from "./database/schema/pizzaSchema.js";
import { addCustomer } from "./database/schema/customerSchema.js";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const corsOptions = {
    origin: "*",
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/post", (req, res) =>{
    let data = req.body;
    console.log("data -> ", data);
    addCustomer(data);
    res.send('Data Received: ' + JSON.stringify(data));
});

app.listen(4000, () => {
    console.log("app started");
});
