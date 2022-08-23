import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Mid from "./Components/Mid";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// token
const token = localStorage.getItem("token");

// admin token
const adminToken = localStorage.getItem("admintoken");

function App() {
  if (token) {
    return (
      <BrowserRouter>
        <Navbar />
        <Mid />
        <Footer />
      </BrowserRouter>
    );
  } else if (adminToken) {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Navbar />
        <Mid />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
