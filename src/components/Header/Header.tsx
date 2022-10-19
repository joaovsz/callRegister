import { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div>
     <nav className="navbar">
      <Link to="/">Início</Link>
      {/* <Link to="dashboard">Dashboard</Link> */}
      {/* <Link to="links">Links Úteis</Link> */}
      <Link to="matrizes">O.S Interna</Link>
      </nav> 
      </div>
      <span>{date}</span>
    </header>
  )
}


