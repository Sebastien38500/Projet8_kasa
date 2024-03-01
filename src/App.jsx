import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header"
import Home from "./pages/Home";
import About from "./pages/About";
import Fichelogement from "./pages/FicheLogement";
import Error404 from "./pages/Error";

function App() {
  return (
    <BrowserRouter>  {/* Gère l'URL.*/}
      <Header />
      <Routes>  // Choix du composant selon l'URL.
        <Route path="/" element={<Home />} />  // Accueil.
        <Route path="/about" element={<About />} />  // À propos.
        <Route path="/logements/:id" element={<Fichelogement />} />  // Fiche logement.
        <Route path="*" element={<Error404 />} />  // Page non trouvée.
      </Routes>
    </BrowserRouter>
  );
}
export default App;
