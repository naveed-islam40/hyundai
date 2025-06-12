import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/auth/Login";
import { Routes } from "react-router-dom";
import OverviewDetails from "./components/Experience/OverviewDetails";
import ExperienceAlternative from "./components/Experience/ExperienceAlternative";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="h-screen">
      <>
        <ToastContainer />
        {/* your routes/components */}
      </>
      <BrowserRouter>
        <Header />
        {/* Routes  */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/experience" element={<ExperienceAlternative />} />
          <Route path="/customer-details" element={<OverviewDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
