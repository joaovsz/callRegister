import { useEffect } from "react";
import "../sass/header.sass"

export const Header = () => {
  useEffect(() => {
    getDate()
  }, [])

  function getDate(){
    const date = new Date();
    const year = String(date.getFullYear());
    const day = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth()).padStart(2, '0');
    const allDate = `${day}/${month}/${year}`
    console.log(allDate);
      return allDate
  }

  const date = getDate()


  return (
    <header id="header">
      <span>Registro de Chamadas</span>
      <div id="counter">
      {/* <span>Total de Chamadas Atendidas: </span>
      <span>654 </span>
      <span>Total de Cancelados: </span>
      <span>86</span> */}
      </div>
      {/* <span>Dashboard</span> */}
      <span>{date}</span>
    </header>
  )
}


