import { Link } from "react-router";
import err from "../assets/err.jpg";
import Container from "../components/container/Container";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import MyButton from "../components/button/MyButton";
const ErrorPage = () => {
  return (
    <div>
      <title>ShareBite - 404 Error</title>
      <header className="py-2 sticky top-0 z-50 bg-black/10 backdrop-blur-xl shadow-sm">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <div className="flex flex-col my-16 w-11/12 mx-auto lg:px-8 md:px-4 px-2 gap-8">
          <div className="flex justify-center w-8/12 mx-auto">
            <img src={err} alt="" className="w-full" />
          </div>
          <h2 className="text-center md:text-2xl text-xl text-gray-600 font-bold tracking-wider">
            Oops! Looks like this spot is empty. No food or requests here… yet.
            Go Back to Home you might find something tasty to share or request!
          </h2>
          <div className="flex justify-center">
            <MyButton
              to="/"
              className={"py-3 px-6 bg-warning hover:bg-warning border-warning"}
            >
              Back To Home
            </MyButton>
          </div>
        </div>{" "}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ErrorPage;
