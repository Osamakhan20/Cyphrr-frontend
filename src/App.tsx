import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Navbar } from "./Layout/Navbar";


function App() {



  
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
