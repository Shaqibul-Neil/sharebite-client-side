import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <section>
      <header className="py-2 sticky top-0 z-50 bg-black backdrop-blur-xl shadow-sm">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Root;
