import { Header } from "./components/Header/Header"
import '../src/components/sass/global.sass'
import { Register } from "./components/Register/Register"
import { Dashboard } from "./components/Dashboard/Dashboard"
import {  Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Login />} path="/login"/>
        <Route element={<Signup />} path="/signup"/>
        <Route element={<Register />} path="/"/>
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </>
  )
}

export default App
