import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    title: {type: String, required: true},
    alias: {type: String},
    description: {type: String},
    icon: {type: String},
    createdAt:{type: Date},
    updatedAt:{type: Date},
    content: {type: String},
    picture: {type: String},
    headerImage: {type: String},
})

export default mongoose.model("Product", Product)