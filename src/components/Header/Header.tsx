import "../sass/header.sass"


export const Header = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDay();
  const month = date.getMonth();

  return (
    <header id="header">
      <span>Registro de Chamadas</span>
      <div id="counter">
      {/* <span>Total de Chamadas Atendidas: </span>
      <span>654 </span>
      <span>Total de Cancelados: </span>
      <span>86</span> */}
      </div>
      <span>{day+"/"+month+"/"+year}</span>
    </header>
  )
}
