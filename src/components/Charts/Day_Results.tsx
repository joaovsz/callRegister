import React, { useContext, useEffect } from 'react'
import { ChartsContext } from '../context/chart_context'
import { ChartContainer } from './ChartContainer'

export const Day_Results = () => {
 
  const {calls,taxa, 
  totalCanceled, calcularTaxa} = useContext(ChartsContext)
  useEffect(()=>{
    calcularTaxa(totalCanceled)
  },[totalCanceled, calls])

  return (
    <>
    <section id="results">
      <div id="table-result">
        <div id="cancelados"> 
        <span>
          Total de Cancelados
          </span> 
        <span className="quantity">
          {totalCanceled}
          </span> 
          </div>
          <div id="taxa">
          <span>Taxa de Cancelamento</span>
          <span className="quantity">{isNaN(taxa)?"0.00":(taxa).toFixed(2)}%</span>

        </div>
        <div id="atendidas">
          <span>Total de Atendidas</span>
          <span className="quantity">{calls.length}</span>
          </div>
        
      </div>
     <div id="chart">
        <ChartContainer/>
      </div> 
      </section> 
      
      </>
  )
}


