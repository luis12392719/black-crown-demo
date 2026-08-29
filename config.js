/*
========================================================
 BLACK CROWN — MASTER TEMPLATE
 EDITE PRINCIPALMENTE ESTE ARQUIVO PARA CADA CLIENTE.
========================================================
*/

const SITE_CONFIG = {
  empresa: {
    nome: "Black Crown Barber",
    nomeCurto: "BLACK CROWN",
    iniciais: "BC",

    whatsapp: "5500000000000",
    telefoneExibido: "(00) 00000-0000",
    mensagemWhatsapp: "Olá! Quero agendar um horário.",

    instagram: "@blackcrownbarber",
    endereco: "Rua Exemplo, 123 — Centro",
    horario: "Seg–Sáb • 09h às 20h",

    descricaoSEO: "Black Crown Barber — cortes, barba e estilo com atendimento premium."
  },

  visual: {
    // Cores em formato HEX.
    corPrincipal: "#c7a45a",
    corPrincipalClara: "#e3c278"
  },

  hero: {
    etiqueta: "BARBEARIA • ESTILO • ATITUDE",
    tituloLinha1: "Cortes que",
    tituloDestaque: "definem seu estilo.",
    texto: "Atendimento premium, ambiente moderno e profissionais que entendem o seu visual."
  },

  sobre: {
    titulo: "Mais que um corte.<br>Uma experiência.",
    paragrafos: [
      "A Black Crown Barber nasceu para unir técnica, personalidade e conforto. Cada atendimento é pensado para valorizar o seu estilo, com atenção aos detalhes e um ambiente feito para você se sentir bem.",
      "Trabalhamos com cortes clássicos e modernos, barba, acabamento e serviços completos para quem não abre mão de qualidade."
    ]
  },

  estatisticas: [
    { valor: "4,9★", legenda: "Avaliação" },
    { valor: "+1.200", legenda: "Atendimentos" },
    { valor: "6 dias", legenda: "Por semana" }
  ],

  servicos: [
    {
      nome: "Corte",
      descricao: "Corte personalizado com acabamento e finalização.",
      preco: "R$ 40"
    },
    {
      nome: "Corte + Barba",
      descricao: "Experiência completa com corte, barba e acabamento.",
      preco: "R$ 65",
      destaque: "MAIS PEDIDO"
    },
    {
      nome: "Barba",
      descricao: "Modelagem, acabamento e cuidado com a barba.",
      preco: "R$ 30"
    },
    {
      nome: "Pezinho",
      descricao: "Acabamento rápido para manter o corte alinhado.",
      preco: "R$ 15"
    }
  ],

  equipe: {
    mostrar: true,
    observacao: "Equipe demonstrativa. Troque pelos profissionais do cliente.",
    pessoas: [
      {
        nome: "João Lima",
        iniciais: "JL",
        descricao: "Especialista em degradê e cortes modernos.",
        imagem: ""
      },
      {
        nome: "Lucas Costa",
        iniciais: "LC",
        descricao: "Barba, acabamento e cortes clássicos.",
        imagem: ""
      },
      {
        nome: "Gabriel Martins",
        iniciais: "GM",
        descricao: "Texturização, freestyle e visuais atuais.",
        imagem: ""
      }
    ]
  },

  galeria: {
    mostrar: true,
    observacao: "Quando o cliente enviar fotos, coloque os arquivos na pasta imagens.",
    itens: [
      { titulo: "DEGRADÊ", imagem: "" },
      { titulo: "BARBA", imagem: "" },
      { titulo: "CLÁSSICO", imagem: "" },
      { titulo: "TEXTURA", imagem: "" },
      { titulo: "ACABAMENTO", imagem: "" }
    ]
  },

  contato: {
    titulo: "Seu próximo corte começa aqui.",
    texto: "Agende pelo WhatsApp ou venha conhecer nosso espaço.",
    ctaTitulo: "Pronto para mudar o visual?"
  },

  textos: {
    notaServicos: "Preços e serviços podem ser personalizados para cada cliente.",
    rodape: "Todos os direitos reservados."
  }
};
