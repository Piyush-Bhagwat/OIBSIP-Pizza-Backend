import mongoose from "mongoose";

const uri = `mongodb+srv://piyush-bhagwat:OJWLe7fCxQFSMCes@cluster.xpwopot.mongodb.net/PizzaDB?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("PizzaDB -> connected");
    } catch (er) {
        console.log(er);
    }
};

export { connectDB };
