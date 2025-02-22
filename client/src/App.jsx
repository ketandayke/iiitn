import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  AboutUs,
  Facilities,
  Administration,
  Admissions,
  PlacementAboutUs,
  WhyRecruitIIITN,
  Statistics,
  ForCompanies,
  ForStudents,
  AdminDashboard,
  ManageHome,
  // AdminLogin

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
