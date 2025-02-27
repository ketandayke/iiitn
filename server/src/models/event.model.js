import {mongoose,Schema} from "mongoose";

const EventSchema = new Schema({
    title: String,
    date: Date,
    description: String,
    images: [String] // Array of image URLs
});
const Event = mongoose.model("Event", EventSchema);
export { Event };