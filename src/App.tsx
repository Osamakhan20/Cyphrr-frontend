import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";
import { Navbar } from "./Layout/Navbar";
import UsersList from "./components/UserList";
import AuthContainer from "./components/Authentication";

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
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/login" element={<AuthContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
