import React from "react"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/layout/Nav"
import Main from "./page/Main"
import Basket from "./page/Basket"
import Footer from "./components/layout/Footer"
import Login from "./page/Auth/Login"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
