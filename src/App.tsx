import { Header } from "./components/Header/Header"
import '../src/components/sass/global.sass'
import { Register } from "./components/Register/Register"
import { Dashboard } from "./components/Dashboard/Dashboard"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import {Matrizes} from "./components/O.s_interna/Matrizes"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Login />} path="/login"/>
        <Route element={<Signup />} path="/signup"/>
        <Route element={<Register />} path="/"/>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Matrizes />} path="/matrizes" />
      </Routes>
    </>
  )
}

export default App
