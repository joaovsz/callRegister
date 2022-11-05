import { SelectChangeEvent } from '@mui/material/Select'
import { createContext, useEffect, useState } from 'react'
import { Register } from '../types/context'

//No contexto sempre criar valores iniciais e declarações de tipo

interface chartContexts {
  typeCall: string
  typeCanceled: string
  info: string
  canceladoCOMODATO: number
  canceladoBRI: number
  badCall: number
  retidos: number
  PrePago: number
  taxa: number
  totalCanceled: number
  calls: Register[]
  handleChange: (e: any, canceledValue: string) => void
  handleChangeCanceled: (e: SelectChangeEvent) => void
  handleChangeInfo: (e: { target: { value: string } }) => void
  registerCall: () => void
  calculateCalls: (type: string) => void
  calcularTaxa: (totalCanceled: number) => void
}
const initialValue = {
  typeCall: '',
  typeCanceled: '',
  info: '',
  canceladoCOMODATO: 0,
  canceladoBRI: 0,
  badCall: 0,
  retidos: 0,
  PrePago: 0,
  taxa: 0,
  totalCanceled: 0,
  calls: [],
  handleChange: () => {},
  handleChangeCanceled: () => {},
  handleChangeInfo: () => {},
  registerCall: () => {},
  calculateCalls: () => {},
  calcularTaxa: () => {}
}

export const ChartsContext = createContext<chartContexts>(initialValue)

export function ChartProvider(props: any) {
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  const [info, setInfo] = useState(initialValue.info)
  const [canceladoCOMODATO, setCMD] = useState(initialValue.canceladoCOMODATO)
  const [canceladoBRI, setBRI] = useState(initialValue.canceladoBRI)
  const [badCall, setBadCall] = useState(initialValue.badCall)
  const [retidos, setRetidos] = useState(initialValue.retidos)
  const [PrePago, setPrePago] = useState(initialValue.PrePago)
  const [taxa, setTaxa] = useState(initialValue.taxa)
  const [totalCanceled, setTotalCanceled] = useState(initialValue.totalCanceled)

  const register: Register = {
    typeCall: typeCall,
    typeCanceled: typeCanceled,
    info: info,
    date: new Date()
  }

  useEffect(() => {
    calculateCalls(register.typeCall)
    setTypeCall('')
    setTypeCanceled('')
    setInfo('')
  }, [calls])

  function handleChange(
    _event: React.MouseEvent<HTMLElement>,
    canceledValue: string
  ) {
    setTypeCall(canceledValue)
    console.log(canceledValue)
  }
  function handleChangeCanceled(event: SelectChangeEvent) {
    setTypeCanceled(event.target.value)
    console.log(typeCanceled)
  }
  function handleChangeInfo(event: { target: { value: string } }) {
    setInfo(event.target.value)
    console.log(info)
  }

  function calcularTaxa(totalCanceled: number) {
    const cancelados = totalCanceled * 100
    const dividendo = calls.length
    return setTaxa(cancelados / dividendo)
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
        console.log(totalCanceled)
        return setBRI(canceledQuantity.length)
      case 'CANCELADO_COMODATO':
        const canceledCMDQuantity = calls.filter(calls => {
          return calls.typeCall === 'CANCELADO_COMODATO'
        })
        setTotalCanceled(prevCanceled => prevCanceled + 1)
        console.log(totalCanceled)
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

  function registerCall() {
    typeCall
      ? setCalls(prevCall => [...prevCall, register])
      : alert('Preencha o tipo da chamada')
  }

  return (
    <ChartsContext.Provider
      value={{
        typeCall,
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
        calls,
        canceladoCOMODATO,
        canceladoBRI,
        badCall,
        retidos,
        PrePago
      }}
    >
      {props.children}
    </ChartsContext.Provider>
  )
}
