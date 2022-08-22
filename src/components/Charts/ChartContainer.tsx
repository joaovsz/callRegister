import { Chart } from "react-google-charts";
import "../sass/charts.sass"

export const data = [
  ["Task", "Hours per Day"],
  ["Retido", 11],
  ["Badcall", 15],
  ["Cancelado BRI", 3],
  ["Cancelado Comodato", 2],
  ["Pré Pago", 8],
];

export const options = { 
  title: "Tipo da chamada"
}
export const option2 = { 
  title: "Motivo do cancelamento"
}


export const ChartContainer = () => {
  return (
    <>
    <div id="charts">

    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      />
    <Chart
      chartType="PieChart"
      data={data}
      options={option2}
      width={"100%"}
      height={"400px"}
      />
      </div>
    </>
  )
}
