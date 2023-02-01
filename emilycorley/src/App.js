import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import PersonalProjects from "./views/PersonalProjects";
import Work from "./views/Work";
import About from "./views/About";
import Contact from "./views/Contact";
import './Styles/app.css'

function App() {
  return (
    <div className="app">
   <Navbar />
    <Routes>
       <Route path="/" element={<About />}/> 
       <Route path="/work" element={<Work />}/> 
       <Route path="/personal" element={<PersonalProjects />}/> 
       <Route path="/contact" element={<Contact />}/> 
    </Routes>
    </div>
  );
}

export default App;
