import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChartsContext } from '../../context/chart_context';
import { useContext } from 'react';
import { Chart_container } from '../../Charts/Chart_container';
import Checkbox from '@mui/material/Checkbox';

export const List = () => {
const {calls} = useContext(ChartsContext)

return (
  <div id="tableInfo">
      <div id='tabela'>
      <h2>Histórico de chamadas</h2>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tipo da chamada</TableCell>
            <TableCell align="left">Motivo do Cancelamento</TableCell>
            <TableCell align="center">Informações</TableCell>
            <TableCell align="left">Simulado</TableCell>
           
          </TableRow>
        </TableHead>
        {calls.length>0?        
        <TableBody>
          {calls.map((row, index) => (
            <TableRow
            className={
              row.typeCall==='RETIDO'
              ?'RETIDO'
              :row.typeCall==="BADCALL"
              ?'BADCALL'
              :row.typeCall==="PRE_PAGO"
              ?'PREPAGO'
              :row.typeCall==="CANCELADO_BRI"
              ?"CANCELADO"
              :'CANCELADO'}
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row" id={row.typeCall}>
                {row.typeCall}
              </TableCell>
              <TableCell align="left">{row.typeCanceled}</TableCell>
              <TableCell align="center">{row.info}</TableCell>
              <TableCell align="left"><Checkbox/></TableCell>
            </TableRow>
          ))}
        </TableBody >:<h2 className="alertInit"> Sem registros no momento</h2>
}
      </Table>
      </TableContainer>
      </div>
      <div id='chart'>
        <Chart_container/>
      </div>
    </div>
  )
}
