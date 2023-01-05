import { Header } from './components/Header/Header'
import '../src/components/sass/global.sass'
import { Register } from './components/Register/Register'
import { Dashboard } from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import { Matrizes } from './components/O.s_interna/Matrizes'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
// import PrivateRoutes from './components/utils/private_route'
import { useContext, useEffect, useState } from 'react'
import { ChartsContext } from './components/context/chart_context'
import Searchperson from './components/SearchPerson/Searchperson'

function App() {
  const { token, loading } = useContext(ChartsContext)

  // const useAuth = () => {
  //   if (token) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // // const PrivateRoutes = () => {
  // //   const auth = useAuth()
  // //   return auth ? <Navigate to="/" /> : <Navigate to="/login" />
  // // }
  return (
    <>
      <Routes>
        <Route
          element={
            // token ?
            <Register />
            // : loading ?
            //   <h2>Carregando...</h2>
            //   : <Login />
          }
          path="/"
        />

        <Route element={<Matrizes />} path="/matrizes" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Searchperson />} path="/searchperson" />
      </Routes>
    </>
  )
}

export default App
