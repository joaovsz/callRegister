import { createContext, SetStateAction, useEffect, useState } from "react";
import { Register, DataCalls } from "../types/context";

//No contexto sempre criar valores iniciais e declarações de tipo

interface chartContexts{
  typeCall: string,
  typeCanceled: string,
  info: string,
  calls: Register[],
  infoCalls: DataCalls,
  handleChange: (e:any, canceledValue:string) =>void,
  handleChangeCanceled: (e:any, typeCanceled:string)=>void,
  handleChangeInfo: (e:{target:{value:string}})=>void,
  registerCall: ()=>void,
  countCall:()=>void
}
const initialValue={
  typeCall: '',
  typeCanceled: '',
  info: '',
  infoCalls:{canceladoCOMODATO: 0, 
             canceladoBRI:0, badCall:0, 
             retidos:0, PrePago:0 },
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
  const [infoCalls, setInfoCalls] = useState(initialValue.infoCalls)
  
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

  function countCall(){
   const retidoC = calls.filter(calls=>{
      return calls.typeCall==="RETIDO"
    })
    console.log(retidoC.length)
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

 
return(
  <ChartsContext.Provider value={{typeCall,
  typeCanceled, info, handleChangeCanceled, 
   handleChange, handleChangeInfo, registerCall, 
   calls}}>
  {props.children}
  </ChartsContext.Provider>
)
}
