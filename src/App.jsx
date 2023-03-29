import { useState } from "react";
import "./App.css";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import SideCart from "./components/pages/SideCart";
import Navbars from "./layouts/Navbar";
import { ToastContainer } from "react-toastify";
function App() {
  const [cartData, setCartData] = useState();

  const findTheData = (data) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const newTime = previousWatchTime + data;
      localStorage.setItem("watchTime", newTime);
      setCartData(newTime);
    } else {
      localStorage.setItem("watchTime", data);
      setCartData(data);
    }
    // setCartData(previousWatchTime);
  };
  return (
    <>
      <Navbars />
      <div className="main row my-4 m-auto">
        <div className="home-container col-md-8">
          <Home findTheData={findTheData} />
        </div>

        <div className="side-cart col-md-4 card">
          <SideCart data={cartData} />
        </div>
      </div>
      <ContactUs />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
