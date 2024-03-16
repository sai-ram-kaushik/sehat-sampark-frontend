import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";
import data from "./data/landing-page.json";
import Footer from "./ui/Footer";
import CreateCamp from "./ui/CreateCamp";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage homePage={data.homePage} />}
                />
                <Route path="/create-camp" element={<CreateCamp />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
