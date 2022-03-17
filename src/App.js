import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Homepage from "./Container/HomePage/Homepage";
import Slider from "./Components/HomeCarousel/Slider";
import DirectorLogin from "./Container/DirectorLogin/DirectorLogin";
import Homepage from "./Container/HomePage/Homepage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
