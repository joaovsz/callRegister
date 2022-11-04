import Divider from "@mui/material/Divider"
import { useContext } from "react"
import Chart from "react-google-charts"
import { ChartsContext } from "../context/chart_context"
import "../sass/dashboard.sass"

const typeCanceledBRI = ["Venda Indevida",
  "Dificuldade Financeira", "Venda do equipamento", "Insatisfação Geral", "Fatura Cheia"
  ]
const typeCanceledCOMODATO = ["Dificuldade Financeira", "Problema com Fatura", "Falta de suporte técnico", "Desmembrado"]

export const Dashboard = () => {
  const {
    typeCall,
    typeCanceled,
    calls } = useContext(ChartsContext)
  const data = [
    ["Taxa", "Cancelados", { role: "style" }],
    ["01/10", 2, "#FF5D5D"],
    ["02/10", 4, "#FF5D5D"],
    ["03/10", 2, "#FF5D5D"],
    ["04/10", 6, "color: #FF5D5D"],
    ["05/10", 4, "#FF5D5D"],
    ["06/10", 2, "#FF5D5D"],
    ["07/10", 2, "#FF5D5D"],
    ["08/10", 0, "color: #FF5D5D"],
    ["09/10", 5, "#FF5D5D"],
    ["10/10", 5, "#FF5D5D"],
    ["11/10", 5, "#FF5D5D"],
    ["12/10", 3, "color: #FF5D5D"],
    ["13/10", 7, "#FF5D5D"],
    ["14/10", 5, "#FF5D5D"],
    ["15/10", 6, "#FF5D5D"],
    ["16/10", 7.45, "color: #FF5D5D"],
    ["17/10", 8.94, "#FF5D5D"],
    ["18/10", 10.49, "#FF5D5D"],
    ["19/10", 19.3, "#FF5D5D"],
    ["20/10", 21.45, "color: #FF5D5D"],
    ["21/10", 8.94, "#FF5D5D"],
    ["22/10", 10.49, "#FF5D5D"],
    ["23/10", 19.3, "#FF5D5D"],
    ["24/10", 21.45, "color: #FF5D5D"],
    ["25/10", 8.94, "#FF5D5D"],
    ["26/10", 10.49, "#FF5D5D"],
    ["27/10", 19.3, "#FF5D5D"],
    ["28/10", 21.45, "color: #FF5D5D"],
    ["29/10", 19.3, "#FF5D5D"],
    ["30/10", 21.45, "color: #FF5D5D"],
  ]
  return (
    <>
      <span className="title">Registro de Resultados Totais</span>
      <span className="subtitle">
        Outubro
      </span>
      <div className="container">
      <div id="typecalls">
          <div id="bri" className="card-container">
            <div className="infos">
            <h3>BRIs Cancelados</h3>
            <Divider/>
            </div>
            {typeCanceledBRI.map((type, index) => (
              <div className={"card" + index}>
                <span className="type-title">{type}</span>
                <span className="quantity"> 2</span>
              </div>
            ))}
          </div>
          <div id="comodato" className="card-container">
          <div className="infos">
            <h3>Comodatos Cancelados</h3>
            <Divider/>
          </div>
            {typeCanceledCOMODATO.map(type => (
              <div className="card">
                <span className="type-title">{type}</span>
                <span className="quantity"> 2</span>
              </div>
            ))}
          </div>
          <div id="prePago" className="card-container">
          <div className="infos">
            <h3>Pré-Pago</h3>
            <Divider/>
          </div>
            <div className="card">
              <span className="type-title">Oi Tv Livre</span>
              <span className="quantity"> 2</span>
            </div>
            <div className="card">
              <span className="type-title">Canal Oi</span>
              <span className="quantity"> 2</span>
            </div>
          </div>
          <div id="badCall" className="card-container">
          <div className="infos">
            <h3>Improdutivas (BADCALL)</h3>
          <Divider/>
          </div>
            <div className="card">
              <span className="type-title">Serviços e Informações</span>
              <span className="quantity"> 2</span>
            </div>
            <div className="card">
              <span className="type-title">Tv Já Cancelada</span>
              <span className="quantity"> 2</span>
              </div>
              
            <div className="card">
              <span className="type-title">Ligação Caiu
            </span>
            <span className="quantity"> 2</span>
            </div>
            <div className="card">
              <span className="type-title">Ponto Adicional</span>
              <span className="quantity"> 2</span>
              </div>
            <div className="card">
              <span className="type-title">Canal Oi!</span>
              <span className="quantity"> 2</span>
              </div>

          </div>

        </div>
        <div className="month">
          <div id="barChart">
            <Chart chartType='ColumnChart'
              width="100%" height="350px" data={data} />
          </div>
        </div>
        
      </div>
    </>
  )
}

