import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ChooseDomain from "./pages/ChooseDomain"
import Bookmarks from "./pages/Bookmarks";
import Progress from "./pages/Progress";
import HRQuestions from "./pages/HRQuestions";
import TechQuestions from "./pages/TechQuestions";
import CodingQuestions from "./pages/CodingQuestions";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {

    const [domain, setDomain] = useState(null);

    return (
        <>
            <Navbar />

            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/dashboard"
                        element={
                            domain ? (
                                <DashboardLayout>
                                    <Dashboard domain={domain} setDomain={setDomain} />
                                </DashboardLayout>
                            ) : (
                                <Dashboard domain={domain} setDomain={setDomain} />
                            )
                        }
                    />
                    <Route path="/choose-domain" element={<ChooseDomain setDomain={setDomain} />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route
                        path="/hr"
                        element={
                            <DashboardLayout>
                                <HRQuestions domain={domain} />
                            </DashboardLayout>
                        }
                    />
                    <Route
                        path="/coding"
                        element={
                            <DashboardLayout>
                                <CodingQuestions domain={domain} />
                            </DashboardLayout>
                        }
                    />
                    <Route
                        path="/tech"
                        element={
                            <DashboardLayout>
                                <TechQuestions domain={domain} />
                            </DashboardLayout>
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>

            <Footer />

        </>
    );
}

export default App;
