import { mongoose, Schema } from "mongoose";

// 🔹 Administration Schema
const AdministrationSchema = new Schema({
    name: String, 
    position: String, // Role in administration
    department: String, 
    contact: {
        phone: String,
        email: String
    },
    image: String, // Profile image URL
    socials: {
        linkedin: String,
        twitter: String
    },
    description: String, // Bio or summary
    tenureStart: Date,
    tenureEnd: Date
});

// 🔹 Committee Schema
const CommitteeSchema = new Schema({
    name: String, // e.g., "Finance Committee", "Senate", "Board of Governance"
    description: String, // Overview of the committee
    members: [
        {
            name: String,
            position: String, // e.g., "Chairperson", "Member"
            designation: String, // Additional titles or affiliations
            organization: String, // If external, the institution/company
            contact: {
                email: String,
                phone: String
            }
        }
    ],
    updatedAt: { type: Date, default: Date.now }
});

// 🔹 Export Models
const Administration = mongoose.model("Administration", AdministrationSchema);
const Committee = mongoose.model("Committee", CommitteeSchema);

export { Administration, Committee };
