// import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/home";
import AppProvider from "./context/AppContext";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
