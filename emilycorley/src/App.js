import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import PersonalProjects from "./views/PersonalProjects";
import Work from "./views/Work";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <>
    <h1>Emily Corley</h1>
   <Navbar />
    <Routes>
       <Route path="/" element={<About />}/> 
       <Route path="/work" element={<Work />}/> 
       <Route path="/personal" element={<PersonalProjects />}/> 
       <Route path="/contact" element={<Contact />}/> 
    </Routes>
    </>
  );
}

export default App;
