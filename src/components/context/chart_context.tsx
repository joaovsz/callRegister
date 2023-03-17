import { SelectChangeEvent } from '@mui/material/Select'
import { createContext, useEffect, useState } from 'react'
import { chartContexts, initialValue, Register } from '../types/context'
import moment from 'moment'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

//No contexto sempre criar valores iniciais e declarações de tipo

export const ChartsContext = createContext<chartContexts>(initialValue)
export function ChartProvider(props: any) {
  const [localUser, setLocalUser] = useState(initialValue.localUser)
  const [user, setUser] = useState(initialValue.user)
  const [password, setPassword] = useState(initialValue.password)
  const [password_repeat, setPasswordRepeat] = useState(
    initialValue.password_repeat
  )
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  const [info, setInfo] = useState(initialValue.info)
  const [canceladoCOMODATO, setCMD] = useState(initialValue.canceladoCOMODATO)
  const [canceladoBRI, setBRI] = useState(initialValue.canceladoBRI)
  const [badCall, setBadCall] = useState(initialValue.badCall)
  const [retidos, setRetidos] = useState(initialValue.retidos)
  const [PrePago, setPrePago] = useState(initialValue.PrePago)
  const [date, setDate] = useState(initialValue.date)
  const [taxa, setTaxa] = useState(initialValue.taxa)
  const [totalCanceled, setTotalCanceled] = useState(initialValue.totalCanceled)
  const [token, setToken] = useState(initialValue.token)
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialValue.isAuthenticated
  )
  const [transferred, setTransferred] = useState(initialValue.transferred)
  const [aux, setAux] = useState(initialValue.aux)
  const [loading, setLoading] = useState(initialValue.loading)
  const [dataRegister, setDataRegister] = useState(initialValue.dataRegister)
  const navigate = useNavigate()

  const register: Register = {
    registered_at: moment().format().substring(0, 10),
    is_canceled:
      typeCall === 'CANCELADO_COMODATO'
        ? 1
        : typeCall === 'CANCELADO_BRI'
        ? 1
        : 0,
    user_registered: Number(localUser.id),
    typeCall: typeCall,
    typeCanceled: typeCanceled,
    info: info,
    transferred: transferred
  }
  useEffect(() => {
    const savedCalls: any = localStorage.getItem('callsSaved')
    const foundCalls = JSON.parse(savedCalls)
    if (foundCalls == null) {
      setCalls([])
    } else {
      setCalls(foundCalls)
    }
  }, [])

  useEffect(() => {
    if (calls) {
      localStorage.setItem('callsSaved', JSON.stringify(calls))
    }
    localStorage.setItem('callsSaved', JSON.stringify(calls))
  }, [aux])

  useEffect(() => {
    calculateCalls(register.typeCall)
    setTypeCall('')
    setTypeCanceled('')
    setInfo('')
    setTransferred(0)
  }, [calls])

  function checkTransferred(e: any) {
    e.preventDefault()
    transferred == 0 ? setTransferred(1) : setTransferred(0)
  }
  function handleChange(
    _event: React.MouseEvent<HTMLElement>,
    canceledValue: string
  ) {
    setTypeCall(canceledValue)
  }
  function handleChangeCanceled(event: SelectChangeEvent) {
    setTypeCanceled(event.target.value)
  }
  function handleChangeInfo(event: { target: { value: string } }) {
    setInfo(event.target.value)
  }

  function calcularTaxa(totalCanceled: number) {
    const cancelados = totalCanceled * 100
    const filteredDividendo = calls.filter(call => call.transferred !== 1)

    return setTaxa(cancelados / filteredDividendo.length)
  }

  function calculateCalls(type: string) {
    switch (type) {
      case 'RETIDO':
        const retidoQuantity = calls.filter(calls => {
          return calls.typeCall === 'RETIDO'
        })
        return setRetidos(retidoQuantity.length)
      case 'CANCELADO_BRI':
        const canceledQuantity = calls.filter(calls => {
          return calls.typeCall === 'CANCELADO_BRI'
        })
        setTotalCanceled(prevCanceled => prevCanceled + 1)
        return setBRI(canceledQuantity.length)
      case 'CANCELADO_COMODATO':
        const canceledCMDQuantity = calls.filter(calls => {
          return calls.typeCall === 'CANCELADO_COMODATO'
        })
        setTotalCanceled(prevCanceled => prevCanceled + 1)
        return setCMD(canceledCMDQuantity.length)

      case 'BADCALL':
        const badCallQuantity = calls.filter(calls => {
          return calls.typeCall === 'BADCALL'
        })

        return setBadCall(badCallQuantity.length)

      case 'PRE_PAGO':
        const prePagoQuantity = calls.filter(calls => {
          return calls.typeCall === 'PRE_PAGO'
        })
        return setPrePago(prePagoQuantity.length)
      default:
        break
    }
  }

  function registerCall(typeCall: string, typeCanceled: string) {
    if (typeCall) {
      setCalls(prevCall => [...prevCall, register])
      setDate(moment().format())
    } else {
      alert('Preencha o tipo da chamada')
    }

    setAux(!aux)

    localStorage.setItem('callsSaved', JSON.stringify(calls))
  }

  return (
    <ChartsContext.Provider
      value={{
        dataRegister,
        checkTransferred,
        typeCall,
        date,
        calculateCalls,
        calcularTaxa,
        totalCanceled,
        typeCanceled,
        info,
        handleChangeCanceled,
        handleChange,
        handleChangeInfo,
        registerCall,
        taxa,
        loading,
        calls,
        canceladoCOMODATO,
        canceladoBRI,
        badCall,
        retidos,
        setCalls,
        PrePago,
        transferred
      }}
    >
      {props.children}
    </ChartsContext.Provider>
  )
}
