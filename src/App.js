import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactList from "./Contactlist";
import Counter from './Counter';
import Calculator from "./Calculator";


const App = () => {
  return (
    <HashRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contacts">Contacts</Link> |{" "}
        <Link className="nav-link" to="/counter">Counter</Link>
        <Link to="/calculator">Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />

      </Routes>
    </HashRouter>
  );
};

export default App;
