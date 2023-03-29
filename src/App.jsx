import { useState } from "react";
import "./App.css";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import SideCart from "./components/pages/SideCart";
import Navbars from "./layouts/Navbar";

function App() {
  const [cartData, setCartData] = useState();

  const findTheData = (data) => {
    console.log(data);
  };
  return (
    <>
      <Navbars />
      <div className="main row my-4 m-auto">
        <div className="home-container col-md-8">
          <Home findTheData={findTheData} />
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
