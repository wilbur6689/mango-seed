import { Routes, Route } from "react-router-dom";
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import CalendarPage from "../pages/CalendarPage"
import Classes from "../pages/Classes"
import ForParents from "../pages/ForParents"

export default function MyRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
        <Route path="/classes" element={<Classes/>} />
        <Route path="/for-parents" element={<ForParents/>} />
    </Routes>
  );
}
