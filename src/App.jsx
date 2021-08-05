import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/about-us/about-us.jsx";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";

const App = () => {

  return (
    <>
      <Header />
      <Main />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
