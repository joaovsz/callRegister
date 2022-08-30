import { createContext, useEffect, useState } from "react";
import { Register } from "../types/context";

//No contexto sempre criar valores iniciais e declarações de tipo

interface chartContexts {
  typeCall: string,
  typeCanceled: string,
  info: string,
  canceladoCOMODATO: number,
  canceladoBRI: number, 
  badCall: number,
  retidos: number,
  PrePago: number,
  calls: Register[],
  handleChange: (e: any, canceledValue: string) => void,
  handleChangeCanceled: (e: any, typeCanceled: string) => void,
  handleChangeInfo: (e: { target: { value: string } }) => void,
  registerCall: () => void,
  calculateCalls: (type:string) => void
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
  calls: [],
  handleChange: () => { },
  handleChangeCanceled: () => { },
  handleChangeInfo: () => { },
  registerCall: () => { },
  calculateCalls: () => { }
}

export const ChartsContext = createContext<chartContexts>(initialValue)

export function ChartProvider(props: any){
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  const [info, setInfo] = useState(initialValue.info)
  const [canceladoCOMODATO, setCMD] = useState(initialValue.canceladoCOMODATO)
  const [canceladoBRI, setBRI] = useState(initialValue.canceladoBRI)
  const [badCall, setBadCall] = useState(initialValue.badCall)
  const [retidos, setRetidos] = useState(initialValue.retidos)
  const [PrePago, setPrePago] = useState(initialValue.PrePago)
  
const register: Register = {
        typeCall: typeCall,
        typeCanceled: typeCanceled,
        info: info
      } 
useEffect(()=>{
   calculateCalls(register.typeCall)
},[calls])

function handleChange(_event: React.MouseEvent<HTMLElement>, canceledValue: string) {
    setTypeCall(canceledValue)
    console.log(canceledValue)
  }
function handleChangeCanceled(_event: React.MouseEvent<HTMLElement>, canceledType: string) {
    setTypeCanceled(canceledType)
    console.log(canceledType)
  }
function handleChangeInfo(event: { target: { value: string } }) {
    setInfo(event.target.value)
    console.log(info)
  }
  

function calculateCalls(type: string) {
    switch (type) {
      case 'RETIDO':
        const retidoQuantity = calls.filter(calls => {return calls.typeCall === "RETIDO"}) 
        return setRetidos(retidoQuantity.length)

      case 'CANCELADO_BRI':
          const canceledQuantity = calls.filter(calls => {return calls.typeCall === "CANCELADO_BRI"})
          return setBRI(canceledQuantity.length)

      case 'CANCELADO_COMODATO':

        const canceledCMDQuantity = calls.filter(calls => {return calls.typeCall === "CANCELADO_COMODATO"})

        return setCMD(canceledCMDQuantity.length)

      case 'BADCALL':
        const badCallQuantity = calls.filter(calls => {return calls.typeCall === "BADCALL"})

        return setBadCall(badCallQuantity.length)

      case 'PRE_PAGO':

        const prePagoQuantity = calls.filter(calls => {return calls.typeCall === "PRE_PAGO"})
        return  setPrePago(prePagoQuantity.length)

      default:
        break;
    }
}

function registerCall() {
  setCalls(prevCall => [...prevCall, register])
    console.log(canceladoCOMODATO, canceladoBRI, badCall, retidos, PrePago)
    }
    
    return (
      <ChartsContext.Provider value={{
        typeCall,calculateCalls,
        typeCanceled, info, handleChangeCanceled,
        handleChange, handleChangeInfo, registerCall,
        calls, canceladoCOMODATO,canceladoBRI,badCall,retidos,PrePago
      }}>
        {props.children}
      </ChartsContext.Provider>
    )
  }
