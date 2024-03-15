import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./ui/Navbar";
import HomePage from "./ui/HomePage";
import data from "./data/landing-page.json";
import Footer from "./ui/Footer";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage homePage={data.homePage} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
