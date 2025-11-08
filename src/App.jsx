import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-indigo-200 min-h-screen pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route
            path="*"
            element={
              <div>
                <img
                  src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="error"
                  className="mx-auto"
                />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
