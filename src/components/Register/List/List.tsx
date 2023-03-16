import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ChartsContext } from '../../context/chart_context'
import { useContext, useState } from 'react'
import { Chart_container } from '../../Charts/Chart_container'
import dayjs, { Dayjs } from 'dayjs'
import createTheme from '@mui/material/styles/createTheme'


export const List = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const { calls } = useContext(ChartsContext)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8758FF'
      },
      secondary: {
        main: '#96BAFF'
      }
    },
    typography: {
      fontFamily: ['Poppins'].join(',')
    }
  })


  return (
    <div id="tableInfo">
      <div id="tabela">
        <div id="filtrar">
          <h2>Histórico de chamadas</h2>
          {/* <div id="date-selector">
            <h3>Filtrar por data &gt; </h3>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    value={value}
                    minDate={dayjs('2022-01-01')}
                    onChange={newValue => {
                      setValue(newValue)
                    }}
                    renderInput={params => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </ThemeProvider>
          </div> */}
        </div>
        <TableContainer component={Paper} id="table">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead id="trow">
              <TableRow>
                <TableCell>Tipo da chamada</TableCell>
                <TableCell align="left">Motivo do Cancelamento</TableCell>
                <TableCell align="center">Informações</TableCell>
                <TableCell align="center">Transferido</TableCell>
                {/* <TableCell align="right">Simulado</TableCell> */}
              </TableRow>
            </TableHead>
            {calls.length > 0 ? (
              <TableBody>
                {calls.map((row, index) => (
                  <TableRow
                    className={
                      row.typeCall === 'RETIDO'
                        ? 'RETIDO'
                        : row.typeCall === 'BADCALL'
                        ? 'BADCALL'
                        : row.typeCall === 'PRE_PAGO'
                        ? 'PREPAGO'
                        : row.typeCall === 'CANCELADO_BRI'
                        ? 'CANCELADO'
                        : 'CANCELADO'
                    }
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" id={row.typeCall}>
                      {row.typeCall}
                    </TableCell>
                    <TableCell align="left">{row.typeCanceled}</TableCell>
                    <TableCell align="center">{row.info}</TableCell>
                    <TableCell align="center">
                      {row.transferred == 1 ? 'SIM' : 'NÃO'}
                    </TableCell>
                    {/* <TableCell align="right">
                      <Checkbox color="secondary" />
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <h2 className="alertInit"> Sem registros no momento</h2>
            )}
          </Table>
        </TableContainer>
      </div>
      <div id="chart">
        <Chart_container />
      </div>
    </div>
  )
}
