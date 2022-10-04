import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useContext, useState } from 'react';
import { ChartsContext } from '../../context/chart_context';
import '../../sass/form.sass'

export const Form = () => {
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
  const {
    typeCall,
    typeCanceled,
    handleChange,
    handleChangeCanceled,
    handleChangeInfo,
    info,
    registerCall } = useContext(ChartsContext)

  return (
    <form id="registerCall">
      <div className='selectCall'>
      <ThemeProvider theme={theme}>
      <span>
      
      <h2>Tipo da chamada</h2>
      <ToggleButtonGroup
        exclusive
        onChange={handleChange}
        value={typeCall}
        color="primary"
        aria-label="Platform"
        >
        <ToggleButton value="RETIDO">
          <FormControl>
            <InputLabel id="Retido">Retido</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCanceled}
              label="Retido"
              onChange={handleChangeCanceled}
            >
              <MenuItem value="Preço Alto">Preço Alto</MenuItem>
              <MenuItem value="Insatisfação Geral">Insatisfação Geral</MenuItem>
              <MenuItem value="Venda Indevida">Venda Indevida</MenuItem>
              <MenuItem value="Retido com multa">Retido com multa</MenuItem>
              <MenuItem value="Ficou de Pensar">Ficou de pensar</MenuItem>
              <MenuItem value="Retido com serviço">Retido com serviço</MenuItem>
            </Select>
          </FormControl>
        </ToggleButton>
        <ToggleButton value="BADCALL">
        <FormControl >
            <InputLabel id="BadCall">BadCall</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCanceled}
              label="BadCall"
              onChange={handleChangeCanceled}
              >
              <MenuItem value="Serviços e Informações">Serviços e Informações</MenuItem>
              <MenuItem value="Remoção de Ponto Ad.">Ponto Adicional</MenuItem>
              <MenuItem value="Tv Já Cancelada">Tv Já Cancelada</MenuItem>
              <MenuItem value="Canal Oi!">Canal Oi!</MenuItem>
              <MenuItem value="Ligação Caiu">Ligação Caiu</MenuItem>
              <MenuItem value="Titular não estava presente">Titular não estava presente</MenuItem>
            </Select>
          </FormControl>
        </ToggleButton>
        <ToggleButton value="PRE_PAGO">
        <FormControl >
            <InputLabel id="PrePago">Pré-Pago</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCanceled}
              label="Pré-Pago"
              onChange={handleChangeCanceled}
              >
              <MenuItem value="Oi Tv Livre">Oi Tv Livre</MenuItem>
              <MenuItem value="Canal Oi">Canal Oi</MenuItem>
              
            </Select>
          </FormControl>
        </ToggleButton>
        <ToggleButton value="CANCELADO_BRI">
        <FormControl >
            <InputLabel id="CanceladoBri">Cancelado BRI</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCanceled}
              label="Cancelado BRI"
              onChange={handleChangeCanceled}
              >
              <MenuItem value="Insatisfação Geral ">Insatisfação Geral</MenuItem>
              <MenuItem value="Preço Alto ">Preço Alto</MenuItem>
              <MenuItem value="Venda Indevida ">Venda Indevida</MenuItem>
              <MenuItem value="Problema Técnico">Problema Técnico</MenuItem>
              <MenuItem value="Venda do Equipamento">Venda do Equipamento</MenuItem>
              <MenuItem value="Fatura Cheia">Fatura Cheia</MenuItem>
            </Select>
          </FormControl>
        </ToggleButton>
        <ToggleButton value="CANCELADO_COMODATO">
        <FormControl >
            <InputLabel id="CanceladoCMD">Cancelado Comodato</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCanceled}
              label="Cancelado BRI"
              onChange={handleChangeCanceled}
              >
              <MenuItem value=" Preço Alto">Preço Alto</MenuItem>
              <MenuItem value="Sem Agendamento">Sem Agendamento</MenuItem>
              <MenuItem value="MUDEND">Mudança de Endereço</MenuItem>
              <MenuItem value="Problema com Fatura">Problema com Fatura</MenuItem>
              <MenuItem value="Desmembrado">Desmembrado</MenuItem>
            </Select>
          </FormControl>
        </ToggleButton>
      </ToggleButtonGroup>
      </span>
      </ThemeProvider>
      </div>
      <div className="info">
      <div>
      <h2>Informações</h2>
      <TextField id="outlined-basic" onChange={handleChangeInfo} placeholder="62999999999" variant="outlined" value={info} />
      </div>
      <Button
        onClick={registerCall}
        variant="contained"
        disableElevation id="registerButton"
        >Registrar</Button>
        </div>
        <Divider />
    </form>
  )
}


