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
} from "./pages/index";
import { Navbar } from "./components/index.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/placement/about" element={<PlacementAboutUs />} />
          <Route
            path="/placement/why-recruit-iiitn"
            element={<WhyRecruitIIITN />}
          />
          <Route path="/placement/statistics" element={<Statistics />} />
          <Route path="/placement/for-companies" element={<ForCompanies />} />
          <Route path="/placement/for-students" element={<ForStudents />} />

          {/* Admin Routes */}
          <Route path="/admin/Dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-home" element={<ManageHome />} />

          <Route path="/placement/contact-tp" element={<ContactTP />} />
          <Route path="/placement/internship" element={<Internship />} />
          <Route path="/students/activities" element={<Activities />} />
          <Route path="/students/achievements" element={<Achievements />} />
          <Route path="/students/scholarships" element={<Scholarships />} />
          <Route
            path="/students/clinical-counselling"
            element={<ClinicalCounselling />}
          />
          <Route path="/students/hostel" element={<Hostel />} />
          <Route path="/students/mess" element={<StudentMess />} />
          <Route path="/students/download" element={<Download />} />
          <Route path="/students/convocation" element={<Convocation />} />
          <Route path="/students/fees" element={<Fees />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/others/consultancy" element={<Consultancy />} />
          <Route
            path="/others/iic"
            element={<InstitutionInnovationCouncil />}
          />
          <Route path="/others/official-doc" element={<OfficialDoc />} />
          <Route
            path="/others/electoral-doc"
            element={<ElectoralLiteracyClub />}
          />
          <Route path="/others/guest-house" element={<GuestHouse />} />
          <Route path="/others/press-release" element={<PressRelease />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
