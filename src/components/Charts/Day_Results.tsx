import React, { useContext, useEffect } from 'react'
import { ChartsContext } from '../context/chart_context'

export const Day_Results = () => {
  const { calls, taxa, totalCanceled, calcularTaxa, date, aux } =
    useContext(ChartsContext)

  useEffect(() => {
    calcularTaxa(totalCanceled)
  }, [aux, totalCanceled, calls])

  return (
    <>
      <section id="results">
        <div id="table-result">
          <span>Resultado Diário</span>
          <div id="atendidas">
            <span>Total de Atendidas</span>
            <span className="quantity">
              <p>
                Total:{' '}
                {
                  calls.filter(
                    call => call.registered_at == date.substring(0, 10)
                  ).length
                }
              </p>
              <p className="preais">
                Produtivas Reais:{' '}
                {
                  calls.filter(
                    call =>
                      call.transferred !== 1 &&
                      call.registered_at == date.substring(0, 10)
                  ).length
                }
              </p>
            </span>
          </div>

          <div id="BRI">
            <span>Cancelados BRI</span>
            <span className="quantity">
              {
                calls.filter(
                  calls =>
                    calls.typeCall === 'CANCELADO_BRI' &&
                    calls.registered_at == date.substring(0, 10)
                ).length
              }
            </span>
          </div>
          <div id="COMODATO">
            <span>Cancelados Comodato</span>
            <span className="quantity">
              {
                calls.filter(
                  calls =>
                    calls.typeCall === 'CANCELADO_COMODATO' &&
                    calls.registered_at == date.substring(0, 10)
                ).length
              }
            </span>
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
