import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/home";
import { LandingPage } from "./pages/landing";
import { WeatherPage } from "./pages/weather";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
