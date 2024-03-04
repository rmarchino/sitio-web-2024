import "./App.css";
import HeaderComponent from "./components/header/Header";
import Experiencias from "./pages/experiences/Experiencias";
import FooterComponent from "./components/footer/FooterComponent";
import HomeComponent from "./pages/home/HomeComponent";
import Servicios from "./pages/services/Servicios";
import Contacto from "./pages/contact/Contacto";
import Scrollup from "./components/scrollup/Scrollup";
import { Whatsapp } from "./components/whatsapp/Whatsapp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="experiencias" element={<Experiencias />} />
        <Route path="contactos" element={<Contacto />} />
      </Routes>
      <FooterComponent />
      <Scrollup />
      <Whatsapp />
    </Router>
  );
}

export default App;
