import "./App.css";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import SideCart from "./components/pages/SideCart";
import Navbars from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbars />
      <div className="main row my-4 m-auto">
        <div className="home-container col-md-8">
          <Home />
        </div>

        <div className="side-cart col-md-4 card">
          <SideCart />
        </div>
      </div>
      <ContactUs />
    </>
  );
}

export default App;
