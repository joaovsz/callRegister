import { Chart } from "react-google-charts";
import "../sass/charts.sass"

export const data = [
  ["Task", "Hours per Day"],
  ["Retido", 11],
  ["Badcall", 15],
  ["Cancelado BRI", 1],
  ["Cancelado Comodato", 3],
  ["Pré Pago", 6],
];

export const typeCall = { 
  title: "Tipo da chamada",
  colors: ['#7DCE13', '#EAE509','#EF5B0C', '#990000', '#3B44F6']
}
export const typeCancelamento = { 
  title: "Motivo do cancelamento",
  colors: ['#7DCE13', '#EAE509','#EF5B0C', '#990000', '#3B44F6']
}


export const ChartContainer = () => {
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
