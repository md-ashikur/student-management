import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import AdmissionBody from "./pages/Students/Admission/AdmissionBody";
import AllStudentsBody from "./pages/Students/AllStudents/AllStudentsBody";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Details from "./pages/Students/Details/Details";
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
    {/* <Navbar/> */}
    {/* <Sidebar/> */}
      <Routes>
        

        <Route path="/" element={<RequireAuth><AllStudentsBody/></RequireAuth>}/>
        <Route path="/admission-form" element={<RequireAuth><AdmissionBody/></RequireAuth>}/>
        <Route path="/student-details" element={<RequireAuth><Details/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      
      </Routes>
    </>
  );
}

export default App;
