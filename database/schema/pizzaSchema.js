import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    noOfOrders: Number,
    id: { type: String, default: `piz${Math.floor(Math.random() * 100000)}` },
});

pizzaSchema.methods.incOrder = function speak() {
    this.noOfOrders = this.noOfOrders + 1;
};

const pizza = mongoose.model("pizza", pizzaSchema);

function addPizza(obj) {
    pizza.insertMany(obj);
    console.log("Hello");
}

export { addPizza };
