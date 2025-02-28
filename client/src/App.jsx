import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminProvider } from "./contexts/adminContext.jsx";
import ProtectedRoute from "./routes/protectedRoute.jsx";
import { Navbar } from "./components/index.js";
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
  LatestUpdates,
  Committee,
  ReviewForm,
  Grievance,
  NetworkingComplaint,
  GrievanceCommitteeSCST,
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
  AdminDashboard,
  ManageHome,
  ManageLatest,
  AdminLogin,
  AdminProfile,
  
} from "./pages/index";
import ManageAcademicPrograms from "./pages/admin/manageAcademicProgram.jsx";
import AcademicDetails from "./pages/MoreAcad.jsx";
import Departments from "./pages/Department.jsx";

function App() {
  return (
    <AdminProvider>  {/* ✅ Wrap the entire app with AdminProvider */}
      <Router>
        <Navbar />
        <Routes>
          {/* 🌍 Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/latest" element={<LatestUpdates />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/add-review" element={<ReviewForm />} />
          <Route path="/academics" element={<AcademicDetails />} />
          <Route path="/departments" element={<Departments />} />
          
          {/* <Route path="/research" element={<Research />} /> */}

          {/* 🏢 Placement Routes */}
          <Route path="/placement/about" element={<PlacementAboutUs />} />
          <Route path="/placement/why-recruit-iiitn" element={<WhyRecruitIIITN />} />
          <Route path="/placement/statistics" element={<Statistics />} />
          <Route path="/placement/for-companies" element={<ForCompanies />} />
          <Route path="/placement/for-students" element={<ForStudents />} />
          <Route path="/placement/contact-tp" element={<ContactTP />} />
          <Route path="/placement/internship" element={<Internship />} />

          {/* 🎓 Student Routes */}
          <Route path="/students/activities" element={<Activities />} />
          <Route path="/students/achievements" element={<Achievements />} />
          <Route path="/students/scholarships" element={<Scholarships />} />
          <Route path="/students/clinical-counselling" element={<ClinicalCounselling />} />
          <Route path="/students/hostel" element={<Hostel />} />
          <Route path="/students/mess" element={<StudentMess />} />
          <Route path="/students/download" element={<Download />} />
          <Route path="/students/convocation" element={<Convocation />} />
          <Route path="/students/fees" element={<Fees />} />

          {/* ⚖️ Legal & Compliance Routes */}
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/networking-complaint" element={<NetworkingComplaint />} />
          <Route path="/grievance-committee" element={<GrievanceCommitteeSCST />} />
          <Route path="/anti-ragging" element={<AntiRagging />} />
          <Route path="/internal-complaint" element={<InternalComplaint />} />
          <Route path="/sexual-harassment-policy" element={<SexualHarassmentPolicy />} />
          <Route path="/equal-opportunity" element={<EqualOpportunity />} />

          {/* 🏫 Quick Links */}
          <Route path="/institute-webmail" element={<InstituteWebmail />} />
          <Route path="/online-fees-payment" element={<OnlineFeesPayment />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/location" element={<Location />} />
          <Route path="/tender" element={<Tender />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/quick-links/guest-house" element={<GuestHouseQuickLinks />} />

          {/* 🔐 Admin Login Route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* 🔒 Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/profile" element={<AdminProfile />} />\
            <Route path="/admin/Dashboard" element={<AdminDashboard />} />
            <Route path="/admin/manage-home" element={<ManageHome />} />
            <Route path="/admin/manage-latest" element={<ManageLatest />} />
            <Route path="/admin/manage-academic-programs" element={<ManageAcademicPrograms />} />
          </Route>

        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
