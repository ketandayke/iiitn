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
  Internship,
} from "./pages/index";
import { Navbar } from "./components/index.js";
import ContactTP from "./pages/placements/ContactTP.jsx";

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
          <Route path="/placement/ContactTP" element={<ContactTP />} />
          <Route path="/placement/Intership" element={<Internship />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
