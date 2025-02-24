const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      submenu: [
        { name: "About IIITN", link: "/about" },
        { name: "Facilities", link: "/facilites" },
      ],
    },
    {
      title: "Administration",
      link: "/administration",
    },
    {
      title: "Admissions",
      link: "/admissions",
    },
    {
      title: "Placements",
      submenu: [
        { name: "Placement About Us", link: "/placement/PlacementAboutUs" },
        { name: "Why Recruit IIITN", link: "/placement/WhyRecruitIIITN" },
        { name: "Statistics", link: "/placement/Statistics" },
        { name: "For Companies", link: "/placement/ForCompanies" },
        { name: "For Students", link: "/placement/ForStudents" },
        { name: "Internship", link: "/placement/Intership" },
        { name: "Contact TP", link: "/placement/ContactTP" },
      ],
    },
    {
      title: "Students",
      submenu: [
        { name: "Activities", link: "/students/activities" },
        { name: "Achievements", link: "/students/achievements" },
        { name: "Scholarships", link: "/students/Scholarship" },
        { name: "Clinical Counselling", link: "/students/clinicalCounselling" },
        { name: "Hostel", link: "/student/hostel" },
        { name: "Student Mess", link: "/student/StudentMess" },
        { name: "Download", link: "/student/Download" },
        { name: "Convocation", link: "/student/convocation" },
        { name: "Fees", link: "/student/Fees" },
      ],
    },
    {
      title: "Admin",
      submenu: [
        { name: "Dashboard", link: "/admin/Dashboard" },
        { name: "Manage Home", link: "/admin/manage-home" },
        { name: "Manage Latest", link: "/admin/manage-latest" },
      ],
    },
  ];
  
  export default menuItems;
  