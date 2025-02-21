import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Homepage,AboutUs,Facilities,Administration } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <>
     <Router>
         {/* <Navbar/> */}
         <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/facilites" element={<Facilities/>} />
          <Route path="/administration" element={<Administration/>} />
         </Routes>
     </Router>
      
    </>
  );
}

export default App;
