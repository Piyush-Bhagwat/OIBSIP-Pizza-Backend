import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: String,
    email: String,
    tel: Number,
    address: String,
    id: { type: String, default: `cus${Math.floor(Math.random() * 100000)}` },
});

const customer = new model("customer", customerSchema);

async function addCustomer(data) {
    await customer.insertMany(data);
}

export { addCustomer };
