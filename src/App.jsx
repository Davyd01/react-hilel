import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <Router>
      <Header />
      <ThemeSwitcher />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
