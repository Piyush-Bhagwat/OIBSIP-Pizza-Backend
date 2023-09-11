import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const uri = process.env.URI;

const connectDB = async () => {
    // console.log(process.env.URI);
    try {
        await mongoose.connect(uri);
        console.log("PizzaDB -> connected");
    } catch (er) {
        console.log(er);
    }
};

export { connectDB };
