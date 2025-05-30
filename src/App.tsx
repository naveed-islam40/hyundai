import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/auth/Login";
import { Routes } from "react-router-dom";
import OverviewDetails from "./components/Experience/OverviewDetails";
import ExperienceAlternative from "./components/Experience/ExperienceAlternative";

const App = () => {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Header />
        {/* Routes  */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/experience" element={<ExperienceAlternative />} />
          <Route path="/cutomer-details" element={<OverviewDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
