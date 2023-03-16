import { Header } from './components/Header/Header'
import '../src/components/sass/global.sass'
import { Register } from './components/Register/Register'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Matrizes } from './components/O.s_interna/Matrizes'
import { Route, Routes } from 'react-router-dom'

function App() {
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
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </>
  )
}

export default App
