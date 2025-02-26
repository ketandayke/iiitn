import mongoose,{Schema} from "mongoose"
const AlumniSchema = new Schema({
    name: String,
    batch: String,
    currentPosition: String,
    company: String,
    linkedIn: String,
  });
  
const Alumni=mongoose.model("Alumni",AlumniSchema);
export {Alumni};