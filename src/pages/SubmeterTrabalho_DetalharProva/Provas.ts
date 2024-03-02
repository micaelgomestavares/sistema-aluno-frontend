
export const provas = [
  {
    id: 1,
    titulo: 'P1',
    disciplina: 'Gerência de Projetos',
    curso: 'Sistema de Informação',
    conteudo:[
      {
        topico: 'Introdução à Gerência de Projetos',
        assuntos: 'Definição de projeto/Papel do gerente de projetos/Ciclo de vida do projeto'
      },
      {
        topico: 'Processos de Gerenciamento de Projetos',
        assuntos: 'Iniciação do projeto/Planejamento do projeto/Execução do projeto/Monitoramento e controle do projeto/Encerramento do projeto'
      },
    ],
    data: new Date(2024, 1, 10),
    sala:'Bloco B - sala 008'

  },
  { 
    id: 2,
    titulo: 'P2',
    disciplina: 'Ciência da Computação',
    curso: 'Bacharelado em Ciência da Computação',
    conteudo:[
      {
        topico: 'Introdução à Ciência da Computação',
        assuntos: 'Definição de ciência da computação/Papel do cientista da computação/Ciclo de vida da ciência da computação'
      },
      {
        topico: 'Processos de Ciência da Computação',
        assuntos: 'Iniciação da ciência da computação/Planejamento da ciência da computação/Execução da ciência da computação/Monitoramento e controle da ciência da computação/Encerramento da ciência da computação'
      },
    ],
    data: new Date(2024, 2, 15),
    sala:'Bloco C - sala 010'
  }
];

export default provas;