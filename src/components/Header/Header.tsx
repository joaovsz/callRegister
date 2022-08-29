import "../sass/header.sass"


export const Header = () => {
  return (
    <header id="header">
      <span>Registro de Chamadas</span>
      <div id="counter">
      <span>Total de Chamadas Atendidas: </span>
      <span>654 </span>
      <span>Total de Cancelados: </span>
      <span>86</span>
      </div>
      <span>23/07/2022</span>
    </header>
  )
}
