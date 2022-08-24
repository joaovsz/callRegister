import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import '../../sass/form.sass'

export const Form = () => {
  const [typeCall, setTypeCall] = useState('')
  const [typeCanceled, setTypeCanceled] = useState('')

  const handleChange =
    (event: React.MouseEvent<HTMLElement>, newCall: string) => {
      setTypeCall(newCall)
    }
  const handleChangeCanceled =
    (event: React.MouseEvent<HTMLElement>, newCanceled: string) => {
      setTypeCanceled(newCanceled)
    }

    
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
        <ToggleButton value="retido">Retido</ToggleButton>
        <ToggleButton value="badcall">BadCall</ToggleButton>
        <ToggleButton value="prepago">Pré-pago</ToggleButton>
        <ToggleButton value="canceladoBRI">Cancelado BRI</ToggleButton>
        <ToggleButton value="canceladoCOMODATO">Cancelado COMODATO</ToggleButton>
      </ToggleButtonGroup>
      <h2>Motivo do Cancelamento</h2>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={typeCanceled}
        onChange={handleChangeCanceled}
        aria-label="Platform"
      >
        <ToggleButton value="precoAlto">Preço Alto</ToggleButton>
        <ToggleButton value="VendaIndevida">Venda Indevida</ToggleButton>
        <ToggleButton value="canalOi">Canal Oi</ToggleButton>
        <ToggleButton value="faturas">Problema com fatura</ToggleButton>
        <ToggleButton value="agendamento">Sem Agendamento</ToggleButton>
      </ToggleButtonGroup>
      <h3>Telefone para contato</h3>
      <TextField type="" id="outlined-basic" placeholder="62999999999" variant="outlined" />
      <Button variant="contained" disableElevation id="registerButton">Registrar</Button>
    </form>
  )
}
