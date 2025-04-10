import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
