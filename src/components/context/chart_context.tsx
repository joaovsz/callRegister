import { createContext, SetStateAction, useEffect, useState } from "react";

import { Register } from "../types/context";

//No contexto sempre criar valores iniciais e declarações de tipo

interface chartContexts{
  typeCall: string,
  typeCanceled: string,
  info: string,
  retidos: number,
  canceladoBRI: number,
  canceladoCOMODATO: number,
  prePagos: number,
  badCall: number,
  calls: Register[],
  handleChange: (e:any, canceledValue:string) =>void,
  handleChangeCanceled: (e:any, typeCanceled:string)=>void,
  handleChangeInfo: (e:{target:{value:string}})=>void,
  registerCall: ()=>void,
  countCall:()=>void
  // createData: (typeCall:string, typeCanceled:string, info:string) =>void
}
const initialValue={
  typeCall: '',
  typeCanceled: '',
  info: '',
  retidos: 0,
  canceladoBRI: 0,
  canceladoCOMODATO: 0,
  prePagos: 0,
  badCall: 0,
  calls:[],
  handleChange: ()=>{},
  handleChangeCanceled: ()=>{},
  handleChangeInfo: ()=>{},
  registerCall:()=>{},
  countCall:()=>{}
 
}
export const ChartsContext = createContext<chartContexts>(initialValue) 

export function ChartProvider(props: any){
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [info, setInfo] = useState(initialValue.info)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  const [retidos, setRetidos] = useState(initialValue.retidos)
  const [canceladoBRI, setCanceladosBRI] = useState(initialValue.canceladoBRI)
  const [canceladoCOMODATO, setCanceladosCOMODATO] = useState(initialValue.canceladoCOMODATO)
  const [prePagos, setPrepago] = useState(initialValue.prePagos)
  const [badCall, setBadCall] = useState(initialValue.badCall)
  
  function handleChange(_event: React.MouseEvent<HTMLElement>, canceledValue:string){
    setTypeCall(canceledValue)
    console.log(canceledValue)
  }
  function handleChangeCanceled(_event: React.MouseEvent<HTMLElement>, canceledType:string) {
    setTypeCanceled(canceledType)
    console.log(canceledType)
  }
  function handleChangeInfo(event:{target:{value:string}}) {
    setInfo(event.target.value)
    console.log(info)
  }

  
  function registerCall(){
   const register: Register = { 
    typeCall: typeCall,
    typeCanceled: typeCanceled,
    info: info
   }
   setCalls(prevCall => [...prevCall, register])
   countCall()
  }

  function countCall(){
    calls.map(call => {
     
     })
  }
return(
  <ChartsContext.Provider value={{typeCall,
  typeCanceled, info, handleChangeCanceled, 
   handleChange, handleChangeInfo, registerCall, 
   calls,canceladoBRI,prePagos,
   canceladoCOMODATO,retidos,badCall}}>
  {props.children}
  </ChartsContext.Provider>
)
}
