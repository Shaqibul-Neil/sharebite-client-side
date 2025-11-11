import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/footer/Footer";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="flex flex-col min-h-screen">
      <header className="py-2 sticky top-0 z-50 bg-black/10 backdrop-blur-xl shadow-sm">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Root;
