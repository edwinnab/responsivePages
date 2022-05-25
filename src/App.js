import React from "react";
import Navbar from "./component/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./component/pages/home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
              <Route path= '/' component={Home} />
          </Routes>
      </Router>

    </>
  );
}

export default App;
