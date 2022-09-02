import React from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import Nav from "./Nav"
import Home from "./Home"
import Cart from "./Cart"


// bceause this is an older version of react-router, there is no switch. Instead we use
// Routes which has the same function.
function App() {
  return (
    <>
      <Nav />
      <hr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App;
