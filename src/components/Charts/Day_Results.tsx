import React, { useContext, useEffect } from 'react'
import { ChartsContext } from '../context/chart_context'
import { Chart_container } from './Chart_container'

export const Day_Results = () => {
 
  const {calls,taxa, 
  totalCanceled, calcularTaxa, canceladoBRI, canceladoCOMODATO} = useContext(ChartsContext)
  useEffect(()=>{
    calcularTaxa(totalCanceled)
  },[totalCanceled, calls])

  return (
    <>
    <section id="results">
      <div id="table-result">
          <span>Resultado Diário</span>
        <div id="atendidas">
          <span>Total de Atendidas</span>
          <span className="quantity">{calls.length}</span>
          </div>
          <div id="BRI">
          <span>Cancelados BRI</span>
          <span className="quantity">{canceladoBRI}</span>
        </div>
          <div id="COMODATO">
          <span>Cancelados Comodato</span>
          <span className="quantity">{canceladoCOMODATO}</span>
        </div>
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
        
        
      </div>
      </section> 
      
      </>
  )
}


