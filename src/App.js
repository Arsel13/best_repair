// @ts-nocheck
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";


function App() {
  return (
    <>
      <section className="font-switzer">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
