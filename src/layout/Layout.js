import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <section className="px-40">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
