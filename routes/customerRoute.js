import express from "express";
import { addCustomer } from "../database/schema/customerSchema.js";
const router = express.Router();

router.post("/newUser", (req, res) => {
    let data = req.body;
    addCustomer(data);
    console.log("User Added -> ", data.name);
    res.send("User Added!");
});

router.get("/userID", (req, res)=>{
    console.log(req.query);
    res.send("User ID -> "); 
})

export { router as customerRoute };
