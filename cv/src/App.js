import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/competences" Component={Knowledges} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;