import { createContext, SetStateAction, useEffect, useState } from "react";

import { Register } from "../types/context";

//No contexto sempre criar valores iniciais e declarações de tipo

interface chartContexts{
  typeCall: string,
  typeCanceled: string,
  info: string,
  calls: Register[],
  handleChange: (e:any, canceledValue:string) =>void,
  handleChangeCanceled: (e:any, typeCanceled:string)=>void,
  handleChangeInfo: (e:{target:{value:string}})=>void,
  registerCall: ()=>void,
  // createData: (typeCall:string, typeCanceled:string, info:string) =>void
}
const initialValue={
  typeCall: '',
  typeCanceled: '',
  info: '',
  calls:[],
  handleChange: ()=>{},
  handleChangeCanceled: ()=>{},
  handleChangeInfo: ()=>{},
  registerCall:()=>{},
  // createData:()=>{}
}
export const ChartsContext = createContext<chartContexts>(initialValue) 

export function ChartProvider(props: any){
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [info, setInfo] = useState(initialValue.info)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  
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

  useEffect(()=>{
    
  },[calls])

  function registerCall(){
   const register: Register = { 
    typeCall: typeCall,
    typeCanceled: typeCanceled,
    info: info
   }
   calls.push(register);
  
  }

return(
  <ChartsContext.Provider value={{typeCall,
  typeCanceled, info, handleChangeCanceled, 
   handleChange, handleChangeInfo, registerCall, calls}}>
  {props.children}
  </ChartsContext.Provider>
)
}
