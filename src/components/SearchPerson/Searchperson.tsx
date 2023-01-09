import Button from '@mui/material/Button'
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import "../sass/search.sass"

const initialState = {
  matricula: '',
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8758FF'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#96BAFF'
    }
  },
  typography: {
    fontFamily: ['Poppins'].join(',')
  }
})

const Searchperson = () => {
  

  const [matricula, setMatricula] = useState(initialState.matricula)
 useEffect(() => {
    
  }, [matricula])
  function HandleChangeBC(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
    setMatricula(event.target.value) 
  } 

  
  return (
    <>
    <Header/>
    <main id="container">
      <section id="search-person">
      <div id="form-wrapper">
          <p>Consultar agente</p>
          <ThemeProvider  theme={theme}>

        
        <TextField
            size="small"
            InputLabelProps={{
              style: { fontFamily: "Poppins, 'sans-serif'" },
            }}
            id="outlined-number"
            label="Matrícula"
            type="number"
            value={matricula}
            style={{
              borderRadius: 10,}}
            onChange={(e)=>HandleChangeBC(e)}
            />
            {/* <Button variant="contained" size="small"
            onClick={()=>{alert(matricula)}}>Pesquisar</Button> */}
              </ThemeProvider>
        </div>
            </section>
            <section id="result">
              <div id="img-container">
                <img src={`http://gip.brasiltelecom.com.br/gip/image/gip/producao/arquivoDptoPessoal/${matricula}/${matricula}.jpg`} alt="A foto do crachá do colaborador irá aparecer aqui" loading="lazy"/>
              </div>
            </section>
    </main>
    
      </>
  )
}

export default Searchperson