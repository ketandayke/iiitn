import { mongoose,Schema } from "mongoose";

const NewsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    link:{type:String},
    createdAt: { type: Date, default: Date.now }
});

const News = mongoose.model("News",NewsSchema)