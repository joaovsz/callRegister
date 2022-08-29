import { useContext, useEffect } from "react";
import { Chart } from "react-google-charts";
import { ChartsContext } from "../context/chart_context";
import "../sass/charts.sass"



export const ChartContainer = () => {

  const data = [
    ["Task", "Hours per Day"],
    ["Retido", 2],
    ["Badcall", 2],
    ["Cancelado BRI", 2],
    ["Cancelado Comodato", 2],
    ["Pré Pago", 2],
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
