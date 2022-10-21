import { Mascaras } from "../types/mascaras";

export const matrizDB: Mascaras[] = [
  {
    nome:"Cancelamento não realizado - Erro SINN",
    descricao:"O.S gerada quando não for possivel executar o cancelamento em função de algum tipo de erro apresentado pelo SINN.",
    opcao:"Quando o cliente solicitar cancelamento e no momento da execução o sistema apresentar mensagens de erro que impossibilite o cancelamento ",
    mascara: "Cliente solicita cancelamento do serviço de TV. Não executado no SINN devido indisponibilidade da ferramenta. Ocorreu o erro: (GRATUIDADE APLICADA)",
    area: "B.O",
    prazo: "48 Horas"
  }
  ,
  {
    nome:"Cliente Desconhece O Contrato",
    descricao:`O.S gerada para sinalizar o pedido de cancelamento onde o cliente informar que:
    - Não solicitou o contrato;
    - Não tem TV na sua casa e está recebendo conta;
    - Solicitou a TV, mas não houve instalação e está recebendo conta;`,
    opcao:`1. Quando o cliente solicitar cancelamento alegando que desconhece o contrato pois não contratou o serviço.
    2. Quando o contrato estiver habilitado no SINN e o cliente alegar que solicitou a TV, o equipamento não foi instalado e ele está recebendo conta.`,
    mascara: "Cliente desconhece contrato e solicita cancelamento. Orientado que a área responsável dará o devido tratamento e entrará em contato com uma posição.",
    area: "Área de Fraude",
    prazo: "Em até 7 dias"
  }
  ,
  {
    nome:"Crédito em Confiança - Retenção ",
    descricao:"Solicitação de aplicação de desconto na fatura de cliente que está no cenário: Desconhece migração para Pacote Pago",
    opcao:`Quando o cliente solicitar cancelamento pelo motivo relacionado em público alvo. 
    Consulte o procedimento em RECEP. TV> Orientações Cliente BRI > Desconhece migração para Pacote Pago`,
    mascara: `
    Cliente atendido conforme processo Desconhece Migração para Pacote Pago, concedida a correção: 
    Vencimento:2022, Valor total da fatura vencida R$:________, Valor do desconto R$ ________
    Vencimento:2022, Valor total da fatura a vencer R$:________, Valor do desconto R$ ________
    Conceder isenção de multa? SIM
    `,
    area: "B.O Retenção",
    prazo: "Até 4 dias/úteis"
  }
  ,
  {
    nome:"Divergência Cadastral - Suspeita de Fraude",
    descricao:"Cliente com suspeita de fraude.",
    opcao:"Sempre que o cliente possuir o flag de Fraude (Ícone da caveira).",
    mascara: "Contrato com flag de Fraude, cliente solicita cancelamento. Orientado que a área responsável dará o devido tratamento e entrará em contato com uma posição.",
    area: "Área de Fraude",
    prazo: "5 dias úteis"
  }
  ,
  {
    nome:"Resgate De Gravações",
    descricao:"O.S gerada para solicitar a disponibilização da gravação de determinado atendimento na minha Oi.",
    opcao:"Quando o cliente solicitar a gravação para confirmação de algum atendimento.",
    mascara: `
    Cliente solicita resgate de chamadas, conforme informações abaixo: 
    Número(s) do telefone que originou a chamada que deve ser resgatada:________
    Data e hora aproximada da ligação:___________
    Número do protocolo:__________
    Telefone para contato:________
    Motivo da solicitação:________`,
    area: "B.O Atendimento",
    prazo: "10 dias corridos"
  }
  ,
  {
    nome:"Serviço não realizado - Erro SINN",
    descricao:"O.S gerada quando não for possivel executar a instalação de uma oferta ou serviço em função de algum tipo de erro apresentado pelo SINN.",
    opcao:`Quando o cliente solicitar a instalação de uma oferta ou serviço e no momento da execução o sistema apresentar mensagens de erro que impossibilite a ação:
    (Ex. Não existe equipes capazes...).
    `,
    mascara: `Máscara para Oferta: "Cliente retido com oferta (descreva nome do pacote/valor da oferta/campanha a ser instalada). Não executado no SINN devido indisponibilidade da ferramenta."`,
    area: "B.O Retenção",
    prazo: "5 dias úteis"
  }
  ,
  {
    nome:"O.S Prioridade Técnica – Retenção",
    descricao:"Cenários onde é possível solicitar prioridade técnica para o reparo.",
    opcao:`Poderá ser solicitada a prioridade técnica no reparo ou serviços nos seguintes cenários:

    1º cenário: Cliente possui registrada no SINN uma O.S de solicitação de reparo ou serviço para a Oi TV e entra em contato reclamando que não recebeu o tratamento em seu serviço na data acordada e não concorda com a nova data disponível para agendamento.
    
    2º cenário: Cliente possui um histórico de reparo técnico em sua Oi TV no período de 30 dias, ou seja, o cliente solicitou vários reparos na Oi TV dentro deste período e não concorda com as datas disponíveis no sistema para novo agendamento.
    `,
    mascara: `“Cliente solicita cancelamento, pois não concorda com a data disponível para realização do serviço ou manutenção técnica solicitada no dia XX/XX. Cliente aceitou manter o contrato mediante promessa de prioridade técnica para o dia XX/XX (Informar a data acordada com o cliente para execução do serviço) e período XXX (Informe a preferência do cliente 08:00-12:00 ou 13:00-18:00).”
    `,
    area: "B.O Retenção",
    prazo: "Até 72 Horas/úteis"
  }
  
]