import { Divider } from '@mui/material'
import { Header } from '../Header/Header'
import Cards from './Cards'

export const Matrizes = () => {
  return (
    <>
      <Header />
      <main id="matrizes">
        <div id="title-container">
          <h1>Máscaras de O.S Interna</h1>
          <span className="help">
            Ao clicar na máscara ela é copiada automaticamente
          </span>
        </div>
        <div className="card-container">
          <Cards />
        </div>
      </main>
    </>
  )
}
