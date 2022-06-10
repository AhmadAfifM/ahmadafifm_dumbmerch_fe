import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Collecting Import Pages
// import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/EditCategory";
import NavBarUser from "./components/NavBarAdmin";
import HomePage from "./pages/MessageAdmin";

export default function App() {
  return (
    <BrowserRouter>
      <NavBarUser />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
