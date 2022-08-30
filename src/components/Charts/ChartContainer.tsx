import { useContext, useEffect } from "react";
import { Chart } from "react-google-charts";
import { ChartsContext } from "../context/chart_context";
import "../sass/charts.sass"


export const ChartContainer = () => {
const {retidos, 
  canceladoCOMODATO, canceladoBRI, 
  badCall, PrePago} = useContext(ChartsContext)

 const data = [
    ["Task", "Hours per Day"],
    ["Retido", retidos],
    ["Badcall", badCall],
    ["Cancelado BRI",canceladoBRI ],
    ["Cancelado Comodato", canceladoCOMODATO],
    ["Pré Pago", PrePago],
  ];

 
  
  const typeCall = { 
    title: "Tipo da chamada",
    colors: ['#7DCE13', '#EAE509','#EF5B0C', '#990000', '#3B44F6']
  }
  const typeCancelamento = { 
    title: "Motivo do cancelamento",
    colors: ['#7DCE13', '#EAE509','#EF5B0C', '#990000', '#3B44F6']
  }
  return (
    <>
    <div id="charts">

    <Chart
      chartType="PieChart"
      data={data}
      options={typeCall}
      width={"100%"}
      height={"400px"}
      
      />
    <Chart
      chartType="PieChart"
      data={data}
      options={typeCancelamento}
      width={"100%"}
      height={"400px"}
      />
      </div>
    </>
  )
}
