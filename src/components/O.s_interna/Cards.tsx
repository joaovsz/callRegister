import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createTheme, ThemeProvider } from '@mui/material'
import { Mascaras } from '../types/mascaras'
import { matrizDB } from "./mascaras"
import copy from "copy-to-clipboard"

import "../sass/matrizes.sass"
const Cards = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6C4C9C",
      },
      secondary: {
        main: "#96BAFF",
      },
    },
    typography: {
        fontFamily: ["Poppins"].join(','),
    },
  });
  function copyMask(mascara: string){
    copy(mascara)
    alert("Máscara Copiada")
  }
  return (
    <>
    {matrizDB.map((card: Mascaras, index: number) => (
      <Card className={`card-${index} card-group`} >
        <CardActionArea onClick={()=>copyMask(card.mascara)}>
          <CardContent>
            <h3>
              {card.nome}
            </h3>
            <span>
              {card.mascara}
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
  )
  )
  }
  </>)
}

export default Cards

