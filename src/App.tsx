import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/auth/Login";
import { Routes } from "react-router-dom";
import OverviewDetails from "./components/Experience/OverviewDetails";
import ExperienceAlternative from "./components/Experience/ExperienceAlternative";
import VINFetch from "@/components/Forms/VINFetch"; // data from database
import Datasheet from "@/components/Forms/Datasheet"; // data from database

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="h-screen">
      <>
        <ToastContainer />
        {/* your routes/components */}
      </>
      <BrowserRouter >
        <Header />
        {/* Routes  */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/experience" element={<ExperienceAlternative />} />
          <Route path="/customer-details" element={<OverviewDetails />} />
          <Route path="/VINFetch" element={<VINFetch />} />
          <Route path="/Datasheet" element={<Datasheet />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
