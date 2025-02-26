import {mongoose,Schema} from "mongoose";

const ResearchDomainSchema = new Schema({
    name: String, // "AI & ML", "VLSI"
    description: String,
    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }],
    publications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publication" }]
});
const ResearchDomain = mongoose.model("ResearchDomain", ResearchDomainSchema);
export { ResearchDomain };