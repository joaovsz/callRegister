import { useContext, useEffect } from "react";
import { Chart } from "react-google-charts";
import { ChartsContext } from "../context/chart_context";
import "../sass/register.sass"


export const Chart_container = () => {
const {retidos, 
  canceladoCOMODATO, canceladoBRI, 
  badCall, PrePago, calls} = useContext(ChartsContext)

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
    pieSliceText: "label",
    pieHole: 0.4,
    colors: ['#7DCE13', '#EAE509','#EF5B0C', '#990000', '#3B44F6']
  }
  const typeCancelamento = { 
    title: "Motivo do cancelamento",
    pieHole: 0.3,
    colors: ['#2B4865', '#256D85','#8FE3CF', '#990000', '#808080']
  }
  
  return (
    <>
   {calls.length>0?<Chart
      chartType="PieChart"
      data={data}
      options={typeCall}
      />:<h2 className="alertInit chart">
        Sem registros no momento
        </h2>}
      
    {/* <Chart
      chartType="PieChart"
      data={data}
      options={typeCancelamento}
      width={"100%"}
      height={"15vw"}
      /> */}
    </>
  )
}
