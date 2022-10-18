import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createTheme, ThemeProvider } from '@mui/material'
import { Mascaras } from '../types/mascaras'
import { matrizDB } from "./mascaras"
import copy from "copy-to-clipboard"
import "../sass/matrizes.sass"
const Cards = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#6C4C9C",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#96BAFF",
      },
    },
    typography: {
        fontFamily: ["Poppins"].join(','),
    },
  });
  function copyMask(mascara: string){
    copy(mascara)
    alert("Texto copiado")
  }
  return (
    matrizDB.map((card: Mascaras, index: number) => (
      <Card className={`card-${index} card-group`} >
        <CardActionArea>
          <CardContent>
            <h3>
              {card.nome}
            </h3>
            <span>
              {card.mascara}
            </span>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ThemeProvider theme={theme}>
          <Button size="large" onClick={()=>copyMask(card.mascara)}>
            Copiar
          </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
  )
  )
  
  )
}

export default Cards