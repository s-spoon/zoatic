import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
