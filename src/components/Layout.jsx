import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import MobileNavBar from "./MobileNavBar";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="py-4">
        <Outlet /> {/* Page content will render here */}
      </main>
      <CallButton />
      <WhatsAppButton />
      <MobileNavBar />
      <ScrollToTopButton/>
      <Footer />
    </>
  );
}

export default Layout;
