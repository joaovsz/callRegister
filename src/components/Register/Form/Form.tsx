import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useContext, useState } from 'react';
import { ChartsContext } from '../../context/chart_context';
import '../../sass/form.sass'

export const Form = () => {

const {
  typeCall, 
  typeCanceled,
  handleChange, 
  handleChangeCanceled,
  handleChangeInfo,
  info,
  registerCall} = useContext(ChartsContext)
  
  return (
    <form id="registerCall">
      <h2>Tipo da chamada</h2>
      <ToggleButtonGroup
        exclusive
        onChange={handleChange}
        value={typeCall}
        color="primary"
        aria-label="Platform"
      >
        <ToggleButton value="RETIDO">Retido</ToggleButton>
        <ToggleButton value="BADCALL">BadCall</ToggleButton>
        <ToggleButton value="PRE_PAGO">Pré-pago</ToggleButton>
        <ToggleButton value="CANCELADO_BRI">Cancelado BRI</ToggleButton>
        <ToggleButton value="CANCELADO_COMODATO">Cancelado COMODATO</ToggleButton>
      </ToggleButtonGroup>
      <h2>Motivo do Cancelamento</h2>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={typeCanceled}
        onChange={handleChangeCanceled}
        aria-label="Platform"
      >
        <ToggleButton value="PREÇO ALTO">Preço Alto</ToggleButton>
        <ToggleButton value="VENDA INDEVIDA">Venda Indevida</ToggleButton>
        <ToggleButton value="CANAL OI">Canal Oi</ToggleButton>
        <ToggleButton value="FATURAS">Problema com fatura</ToggleButton>
        <ToggleButton value="AGENDAMENTO">Sem Agendamento</ToggleButton>
      </ToggleButtonGroup>
      <h3>Telefone para contato</h3>
      <TextField id="outlined-basic" onChange={handleChangeInfo}placeholder="62999999999" variant="outlined" value={info}/>
      <Button 
      onClick={registerCall}
      variant="contained" 
      disableElevation id="registerButton"

      >Registrar</Button>
    </form>
  )
}


