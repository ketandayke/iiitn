import { mongoose, Schema } from "mongoose";

const AdmissionSchema = new Schema({
    title: String, // e.g., "Undergraduate Admissions"
    description: String, // Overview of admission process
    cutoff: { name: String, pdf: String }, // Last year cutoff PDF

    // Financial Aid
    loanSchemes: [
        { name: String, pdf: String } // SBI, Canara, Punjab, etc.
    ],
    scholarships: [
        { name: String, pdf: String } // Various scholarship schemes
    ],

    // Admission Forms & Documents
    forms: [
        { name: String, pdf: String } // Admission forms, central formats, institute formats
    ],
    centralFormats: [
        { name: String, pdf: String } // Central document formats
    ],
    instituteFormats: [
        { name: String, pdf: String } // Institute-specific document formats
    ],

    // Fees Information
    academicFees: { name: String, pdf: String }, // Academic fee details PDF
    hostelFees: { name: String, pdf: String }, // Hostel fee structure PDF
    feePaymentMethods: {
        upiId: String, // UPI payment ID
        qrCode: String // URL for QR scanner image
    },

    // Rules & Regulations
    academicRulebook: { name: String, pdf: String }, // Academic rulebook PDF
    instituteRules: { name: String, pdf: String }, // Institute rules and regulations PDF

    // Links & Information
    jossaLink: String, // Link to JoSAA counseling details
    campusGallery: [String], // Array of image URLs
    guestHouse: { name: String, pdf: String }, // Guest house details PDF

    contactUs: String // Contact details for admission queries
});

const Admission = mongoose.model("Admission", AdmissionSchema);
export { Admission };
