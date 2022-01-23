import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./functionBased/App.css";
import Navbar from "./functionBased/components/Navbar";
import About from "./functionBased/components/pages/About";
import NoMatch from "./functionBased/components/pages/NoMatch";
import SinglePage from "./functionBased/components/pages/SinglePage";

import TodoContainer from "./functionBased/components/TodoContainer";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="about/" element={<About />}>
          <Route path=":slug" element={<SinglePage />}></Route>
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
