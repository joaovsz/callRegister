import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ChartsContext } from '../../context/chart_context'
import { SetStateAction, useContext, useEffect, useState } from 'react'
import { Chart_container } from '../../Charts/Chart_container'
import dayjs, { Dayjs } from 'dayjs'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import Stack from '@mui/material/Stack/Stack'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { Checkbox, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { DatePicker } from '@mui/x-date-pickers'

export const List = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [formattedDate, setFormattedDate] = useState<Dayjs | null | String>()

  const { calls, deleteRow, clicked, savedStorage } = useContext(ChartsContext)

  useEffect(() => {
    setFormattedDate(dayjs(value).format('YYYY-MM-DD'))
  }, [value])

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#8758FF' }
    },
    typography: {
      fontFamily: ['Poppins'].join(',')
    }
  })

  return (
    <div id="tableInfo">
      <div id="tabela">
        <div id="filtrar">
          <p>Histórico de chamadas</p>

          <div id="date-selector">
            <p>Filtrar por data &gt; </p>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="customDatePicker"
                  value={value}
                  minDate={dayjs('2022-01-01')}
                  onChange={(newValue: SetStateAction<dayjs.Dayjs | null>) => {
                    setValue(newValue)
                  }}
                  renderInput={(
                    params: JSX.IntrinsicAttributes & TextFieldProps
                  ) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </ThemeProvider>
          </div>
          <button
            className={clicked == false ? 'btn-check' : 'btn'}
            id="saveList"
            onClick={
              !clicked
                ? () => {
                    savedStorage()
                  }
                : () => {}
            }
          >
            {!clicked ? 'Salvar' : 'Salvo!'}
            <Checkbox
              checked={clicked}
              // onChange={savedStorage}
              sx={{ padding: 0 }}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </button>
        </div>
        <TableContainer component={Paper} id="table" sx={{ borderRadius: 2 }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead id="trow">
              <TableRow>
                <TableCell>Tipo da chamada</TableCell>
                <TableCell align="left">Motivo do Cancelamento</TableCell>
                <TableCell align="center">Informações</TableCell>
                <TableCell align="center">Transferido</TableCell>
                <TableCell align="right">Excluir</TableCell>
              </TableRow>
            </TableHead>
            {calls.length > 0 ? (
              <TableBody>
                {calls.map((row, index) =>
                  row.registered_at == formattedDate ? (
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
                      <TableCell align="right">
                        <IconButton
                          onClick={() => deleteRow(index, row.id)}
                          aria-label="delete"
                          style={{ color: 'white' }}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ) : (
                    false
                  )
                )}
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
