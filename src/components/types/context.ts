import { SelectChangeEvent } from "@mui/material"
import moment from "moment"
import { Register } from "../Register/Register"

export type Register = {
  registered_at: string
  id: string
  is_canceled: number
  user_registered: number
  typeCall: string
  typeCanceled: string
  info: string
  transferred: number
}
export const initialValue = {
  typeCall: '',
  typeCanceled: '',
  info: '',
  clicked: false,
  canceladoCOMODATO: 0,
  canceladoBRI: 0,
  badCall: 0,
  retidos: 0,
  PrePago: 0,
  user: '',
  localUser: { id: 0, username: '', token: '' },
  dataRegister: [],
  password: '',
  password_repeat: '',
  date: moment().format(),
  taxa: 0,
  loading: true,
  token: '',
  isAuthenticated: false,
  totalCanceled: 0,
  transferred: 0,
  aux: false,
  calls: [],
  handleChangePassword: () => {},
  handleChangePasswordRepeat: () => {},
  handleChangeUser: () => {},
  logout: () => {},
  handleChange: () => {},
  handleChangeCanceled: () => {},
  handleChangeInfo: () => {},
  registerCall: () => {},
  calculateCalls: () => {},
  calcularTaxa: () => {},
  checkTransferred: () => {},
  deleteRow: () => {},
  savedStorage: () => {}
}
export interface chartContexts {
  typeCall: string
  transferred: number
  typeCanceled: string
  info: string
  loading: boolean
  date: string
  canceladoCOMODATO: number
  canceladoBRI: number
  badCall: number
  retidos: number
  PrePago: number
  taxa: number
  aux: boolean
  clicked: boolean
  totalCanceled: number
  calls: Register[]
  dataRegister: Register[]
  handleChange: (e: any, canceledValue: string) => void
  handleChangeCanceled: (e: SelectChangeEvent) => void
  handleChangeInfo: (e: { target: { value: string } }) => void
  registerCall: (typeCall: string, typeCanceled: string, date: string) => void
  calculateCalls: (type: string) => void
  calcularTaxa: (totalCanceled: number) => void
  checkTransferred: (e: any) => void
  deleteRow: (index: string | number, id: string) => void
  savedStorage: () => void
}