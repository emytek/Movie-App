import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
