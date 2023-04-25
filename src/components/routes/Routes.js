import { Routes, Route } from "react-router-dom";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Calendar from "../pages/Calendar"
import Classes from "../pages/Classes"
import ForParents from "../pages/ForParents"

export default function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Calendar" element={<Calendar/>} />
        <Route path="/Classes" element={<Classes/>} />
        <Route path="/for-parents" element={<ForParents/>} />
    </Routes>
  );
}
