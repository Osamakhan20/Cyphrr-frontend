import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Navbar } from "./Layout/Navbar";
import AuthContainer from "./components/Authentication";
import ResetPasswordPage from "./Pages/ResetPasswordPage";

function App() {
  const [authModal, setAuthModal] = useState<
    "login" | "signup" | "forgot" | "edit" | null
  >(null);

  return (
    <BrowserRouter>
      <Header />
      <Navbar openAuth={setAuthModal} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>

      <Footer />

      <AuthContainer activeModal={authModal} setActiveModal={setAuthModal} />
    </BrowserRouter>
  );
}

export default App;
