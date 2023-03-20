import { useContext, useEffect } from 'react'
import { Chart } from 'react-google-charts'
import { ChartsContext } from '../context/chart_context'
import '../sass/register.sass'
import { Register } from '../types/context'

export const Chart_container = () => {
  const { retidos, canceladoCOMODATO, canceladoBRI, badCall, PrePago, calls } =
    useContext(ChartsContext)

  const type = {
    VendaIndevida: calls.filter(c => c.typeCanceled == 'Venda Indevida'),
    PrecoAlto: calls.filter(c => c.typeCanceled == 'Preço Alto '),
    Desmembrado: calls.filter(c => c.typeCanceled == 'Desmembrado'),
    SemAgendamento: calls.filter(c => c.typeCanceled == 'Sem Agendamento'),
    ProblemaTecnico: calls.filter(c => c.typeCanceled == 'Problema Técnico'),
    ProblemaComFatura: calls.filter(
      c => c.typeCanceled == 'Problema com Fatura'
    ),
    Mudanca: calls.filter(c => c.typeCanceled == 'MUDEND'),
    VendaEquip: calls.filter(c => c.typeCanceled == 'Venda do Equipamento'),
    Insatisfacao: calls.filter(c => c.typeCanceled == 'Insatisfação Geral '),
    CanalOi: calls.filter(c => c.typeCanceled == 'Canal Oi!'),
    PrePago: calls.filter(c => c.typeCall == 'PRE_PAGO')
  }

  const data = [
    ['Task', 'Hours per Day'],
    ['Retidos', retidos],
    ['Badcall', badCall],
    ['Cancelados BRI', canceladoBRI],
    ['Cancelados Comodato', canceladoCOMODATO],
    ['Pré Pago', PrePago]
  ]
  const dataTypeCanceled = [
    ['Task', 'Hours per Day'],
    ['Venda Indevida', type.VendaIndevida.length],
    ['CMD Desmembrado', type.Desmembrado.length],
    ['Preço Alto', type.PrecoAlto.length],
    ['Problema Técnico', type.ProblemaTecnico.length],
    ['MUDEND', type.Mudanca.length],
    ['Problema Com Fatura', type.ProblemaComFatura.length],
    ['Sem agendamento', type.SemAgendamento.length],
    ['Venda de Equipamento', type.VendaEquip.length],
    ['Insatisfação Geral', type.Insatisfacao.length],
    ['Canal Oi!', type.CanalOi.length],
    ['Pré-Pago', type.PrePago.length]
  ]

  const typeCall = {
    title: 'Tipo da chamada',
    pieHole: 0.4,
    backgroundColor: 'none',
    legendTextStyle: { color: 'white' },
    titleTextStyle: { color: 'white' },
    colors: ['#38E54D', '#002B5B', '#FFD24C', '#30292F', '#3B44F6']
  }
  const typeCancelamento = {
    title: 'Motivo do Cancelamento',
    pieHole: 0.4,
    backgroundColor: 'none',
    legendTextStyle: { color: 'white' },
    titleTextStyle: { color: 'white' },
    colors: [
      '#8758FF',
      '#002B5B',
      '#29b339',
      '#990000',
      '#FF5D5D',
      '#990000',
      '#355691',
      '#355691',
      '#FD7014',
      '#FFD24C'
    ]
  }

  return (
    <>
      {calls.length > 0 ? (
        // <>
        //   <Chart
        //     chartType="PieChart"
        //     data={data}
        //     width={'100%'}
        //     height={'100%'}
        //     options={typeCall}
        //   />
        <Chart
          chartType="PieChart"
          data={dataTypeCanceled}
          width={'700px'}
          height={'100%'}
          options={typeCancelamento}
        />
      ) : (
        <h2 className="alertInit chart">Sem registros no momento</h2>
      )}
    </>
  )
}
