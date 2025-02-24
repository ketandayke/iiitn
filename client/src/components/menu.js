const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      submenu: [
        { name: "About IIITN", link: "/about" },
        { name: "Facilities", link: "/facilities" },
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
        { name: "Placement About Us", link: "/placement/about" },
        { name: "Why Recruit IIITN", link: "/placement/why-recruit-iiitn" },
        { name: "Statistics", link: "/placement/statistics" },
        { name: "For Companies", link: "/placement/for-companies" },
        { name: "For Students", link: "/placement/for-students" },
        { name: "Internship", link: "/placement/internship" },
        { name: "Contact TP", link: "/placement/ContactTP" },
      ],
    },
    {
      title: "Students",
      submenu: [
        { name: "Activities", link: "/students/activities" },
        { name: "Achievements", link: "/students/achievements" },
        { name: "Scholarships", link: "/students/scholarships" },
        { name: "Clinical Counselling", link: "/students/clinical-counselling" },
        { name: "Hostel", link: "/students/hostel" },
        { name: "Student Mess", link: "/students/mess" },
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
  