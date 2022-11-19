import { SelectChangeEvent } from "@mui/material"
import moment from "moment"
import { Register } from "../Register/Register"

export type Register = {
  registered_at: string
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
  canceladoCOMODATO: 0,
  canceladoBRI: 0,
  badCall: 0,
  retidos: 0,
  PrePago: 0,
  user: '',
  localUser: { id: '', username: '', token: '' },
  dataRegister: [] ,
  password: '',
  password_repeat: '',
  date: moment().format(),
  taxa: 0,
  loading: true,
  token: '',
  isAuthenticated: false,
  totalCanceled: 0,
  transferred: 0,
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
  handleSubmitRegister: () => {},
  handleSubmitLogin: () => { },
  getData: () => {}
 
}
export interface chartContexts {
  typeCall: string
  transferred: number
  typeCanceled: string
  info: string
  loading: boolean
  token: string
  date: string
  user: string
  password: string
  password_repeat: string
  isAuthenticated: boolean
  canceladoCOMODATO: number
  canceladoBRI: number
  badCall: number
  retidos: number
  PrePago: number
  taxa: number
  totalCanceled: number
  calls: Register[]
  localUser: {}
  dataRegister: Register[]
  handleSubmitRegister: (event: React.FormEvent<HTMLFormElement>) => void
  handleSubmitLogin: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: any, canceledValue: string) => void
  handleChangeCanceled: (e: SelectChangeEvent) => void
  handleChangeInfo: (e: { target: { value: string } }) => void
  handleChangeUser: (e: { target: { value: string } }) => void
  handleChangePassword: (e: { target: { value: string } }) => void
  handleChangePasswordRepeat: (e: { target: { value: string } }) => void
  registerCall: (typeCall: string, typeCanceled: string, date: string) => void
  calculateCalls: (type: string) => void
  calcularTaxa: (totalCanceled: number) => void
  checkTransferred: (e: any) => void
  logout: () => void
  getData: (date: string) => void  
}