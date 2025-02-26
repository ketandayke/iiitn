import {mongoose,Schema} from "mongoose";

const AdmissionSchema = new Schema({
    level: String, // "Undergraduate" | "Postgraduate"
    eligibility: String,
    process: String,
    importantLinks: [{ name: String, url: String }],
    pdfs: [{ name: String, url: String }] // JoSAA, CSAB PDFs
});
const Admission = mongoose.model("Admission", AdmissionSchema);
export { Admission };