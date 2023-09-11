import express from "express";
import { connectDB } from "./database/mongooseConnect.js";
import bodyParser from "body-parser";
import { addPizza } from "./database/schema/pizzaSchema.js";
import { addCustomer } from "./database/schema/customerSchema.js";
import cors from "cors";
import dotenv from "dotenv";
import { customerRoute } from "./routes/customerRoute.js";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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

//Routes

app.use("/api/c", customerRoute);
app.use("/api/p", customerRoute);

app.listen(4000, () => {
    console.log("app started");
});
