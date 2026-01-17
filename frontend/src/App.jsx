import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Progress from "./pages/Progress";
import HRQuestions from "./pages/HRQuestions";
import TechQuestions from "./pages/TechQuestions";
import CodingQuestions from "./pages/CodingQuestions";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Navbar />

            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/hr" element={<HRQuestions />} />
                    <Route path="/tech" element={<TechQuestions />} />
                    <Route path="/coding" element={<CodingQuestions />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>

            <Footer />
            
        </>
    );
}

export default App;
