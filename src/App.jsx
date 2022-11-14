import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import { HomePage } from "./pages/home";
import { LandingPage } from "./pages/landing";
import { WeatherPage } from "./pages/weather";
import { Navbar } from "./components/navbar";
import ErrorPage from "./pages/error404";

// custom SASS Styling
import './assets/styles/App.sass'

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={isAuthenticated ? <HomePage /> : <LandingPage />}
          />
          <Route exact path="/weather/:id" element={<WeatherPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
