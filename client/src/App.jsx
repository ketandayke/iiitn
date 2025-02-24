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
        </Routes>
      </Router>
    </>
  );
}

export default App;
