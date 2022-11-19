import React, { useContext, useEffect } from 'react'
import { ChartsContext } from '../context/chart_context'

export const Day_Results = () => {
  const {
    calls,
    taxa,
    totalCanceled,
    calcularTaxa,
    canceladoBRI,
    canceladoCOMODATO,
    dataRegister
  } = useContext(ChartsContext)
  useEffect(() => {
    calcularTaxa(totalCanceled)
  }, [totalCanceled, calls])
  return (
    <>
      <section id="results">
        <div id="table-result">
          <span>Resultado Diário</span>
          <div id="atendidas">
            <span>Total de Atendidas</span>
            <span className="quantity">
              <p>Total: {calls.length}</p>
              <p className="preais">
                Produtivas Reais:{' '}
                {calls.filter(call => call.transferred !== 1).length}
              </p>
            </span>
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
            <span>Total de Cancelados</span>
            <span className="quantity">{totalCanceled}</span>
          </div>
          <div id="taxa">
            <span>Taxa de Cancelamento</span>
            <span className="quantity">
              {isNaN(taxa) ? '0.00' : taxa.toFixed(2)}%
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
