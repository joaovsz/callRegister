import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ChartsContext } from '../../context/chart_context';
import { useContext } from 'react';


export const List = () => {
const {calls} = useContext(ChartsContext)


  
  return (
    <div id="tableInfo">
      <h2>Histórico de chamadas</h2>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tipo da chamada</TableCell>
            <TableCell align="right">Motivo do Cancelamento</TableCell>
            <TableCell align="right">Informações</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {calls.map((row) => (
            <TableRow
              key={row.typeCall}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.typeCall}
              </TableCell>
              <TableCell align="right">{row.typeCanceled}</TableCell>
              <TableCell align="right">{row.info}</TableCell>
            </TableRow>
          ))}
        </TableBody >
      </Table>
    </TableContainer>
    </div>
  )
}
