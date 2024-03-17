import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";
import data from "./data/landing-page.json";
import Footer from "./ui/Footer";
import CreateCamp from "./ui/CreateCamp";
import CreatStaff from "./ui/CreateStaff";
import DoctorForm from "./ui/DoctorForm";
import UserForm from "./ui/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage homePage={data.homePage} />} />
        <Route path="/create-camp" element={<CreateCamp />} />
        <Route path="/doctor-form" element={<DoctorForm />} />
        <Route path="/staff-create" element={<CreatStaff />} />
        <Route path="/user" element={<UserForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
