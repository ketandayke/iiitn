import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  AboutUs,
  Facilities,
  Administration,
  Admissions,
  WhyRecruitIIITN,
  PlacementAboutUs,
  Statistics,
  ForCompanies,
  ForStudents,
  AdminDashboard,
  ManageHome,
  // AdminLogin

  Internship,
  ContactTP,
  Activities,
  Achievements,
  ClinicalCounselling,
  Scholarships,
  Hostel,
  StudentMess,
  Download,
  Convocation,
  Fees,
  NIRF,
  Consultancy,
  InstitutionInnovationCouncil,
  OfficialDoc,
  ElectoralLiteracyClub,
  GuestHouse,
  PressRelease,
  Grievance,
  NetworkingComplaint,
  GrievanceCommittee,
  AntiRagging,
  InternalComplaint,
  SexualHarassmentPolicy,
  EqualOpportunity,
  InstituteWebmail,
  OnlineFeesPayment,
  AcademicCalendar,
  HowToReach,
  Location,
  Tender,
  Recruitment,
  GuestHouseQuickLinks,
} from "./pages/index";
import { Navbar } from "./components/index.js";
// import ContactTP from "./pages/placements/ContactTP.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/facilites" element={<Facilities />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/placement/PlacementAboutUs"
            element={<PlacementAboutUs />}
          />
          <Route
            path="/placement/WhyRecruitIIITN"
            element={<WhyRecruitIIITN />}
          />
          <Route path="/placement/Statistics" element={<Statistics />} />
          <Route path="/placement/ForCompanies" element={<ForCompanies />} />
          <Route path="/placement/ForStudents" element={<ForStudents />} />
          
           {/* Admin related routes */}
           {/* <Route path="/admin/login" element={<AdminLogin/>} /> */}
           <Route path="/admin/Dashboard" element={<AdminDashboard/>} />
           <Route path="/admin/manage-home" element={<ManageHome/>} />
          <Route path="/placement/ContactTP" element={<ContactTP />} />
          <Route path="/placement/Intership" element={<Internship />} />
          <Route path="/students/activities" element={<Activities />} />
          <Route path="/students/achievements" element={<Achievements />} />
          <Route path="/students/Scholarship" element={<Scholarships />} />
          <Route
            path="/students/clinicalCounselling"
            element={<ClinicalCounselling />}
          />
          <Route path="/student/hostel" element={<Hostel />} />
          <Route path="/student/StudentMess" element={<StudentMess />} />
          <Route path="/student/Download" element={<Download />} />
          <Route path="/student/convocation" element={<Convocation />} />
          <Route path="/student/Fees" element={<Fees />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/others/consultancy" element={<Consultancy />} />
          <Route
            path="/others/IIC"
            element={<InstitutionInnovationCouncil />}
          />
          <Route path="/others/officialDoc" element={<OfficialDoc />} />
          <Route
            path="/others/electrolDoc"
            element={<ElectoralLiteracyClub />}
          />
          <Route path="/others/guestHouse" element={<GuestHouse />} />
          <Route path="/others/pressRelase" element={<PressRelease />} />
            {/* ✅ Added route for Important links */}
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/networking-complaint" element={<NetworkingComplaint />} />
          <Route path="/grievance-committee" element={<GrievanceCommittee />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/internal-complaint" element={<InternalComplaint />} />
          <Route path="/sexual-harassment-policy" element={<SexualHarassmentPolicy />} />
          <Route path="/equal-opportunity" element={<EqualOpportunity />} />
          {/* Quick Links */}
          <Route path="/institute-webmail" element={<InstituteWebmail />} />
          <Route path="/online-fees-payment" element={<OnlineFeesPayment />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tender" element={<Tender />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/quick-links/guest-house" element={<GuestHouseQuickLinks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
