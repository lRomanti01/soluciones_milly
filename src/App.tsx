
import { Outlet } from "react-router-dom";
import Header from "./components/Header.js"
import { WhatsappButton } from "./components/WhatsappButton.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Navbar />
      <Outlet />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
