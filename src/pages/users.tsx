import { GetStaticProps } from 'next'
import fs from 'fs'

type Pergunta = {
  pergunta: string;
  resposta: {
    correta: string;
    outras: string[];
  }
}

type Props = {
  perguntas: Pergunta[]
}

export default function Users({ perguntas }: Props) {
  const renderPergunta = (pergunta: Pergunta, index: number) => (
    <li key={index}>
      {pergunta.pergunta}
    </li>
  )
console.log(perguntas[0]);

  return (
    <div>
      <ul>{perguntas.map(renderPergunta)}</ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = `${process.cwd()}/db.json`
  const json = fs.readFileSync(filePath, 'utf8')
  const data: { perguntas: Pergunta[] } = JSON.parse(json)

  return { props: { perguntas: data.perguntas } }
}

/*    {
      "pergunta": "Como acontece a ativação do Rinnegan?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é o nome dos pais de Obito Uchiha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual foi o problema enfrentado por Tsunade durante sua luta contra Kabuto Yakushi?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Como Itachi Uchiha conseguiu aprender todas as nove técnicas ilusórias da natureza?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quem era o segundo Hokage da Vila da Folha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é o nome da espada de Orochimaru que foi usada por Sasuke?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Por que Hinata Hyuuga desafiou seu primo Neji numa batalha no Exame Chunin?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é a habilidade especial que permite ao clã Inuzuka usar o seu olfato aguçado enquanto lutam?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quais foram os nomes dados às criaturas da estátua do Gedō Mazō?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual das cinco Grandes Nações Shinobi é a mais poderosa?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quantos ninjas já foram imortalizados na Pedra Memorial de Konoha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Como Jiraiya morreu?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Como Kurenai Yuhi perdeu seu bebê?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quem matou Haku?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é a origem do sobrenome Uzumaki?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual era a verdadeira identidade de Tobi?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "De onde veio a raposa de nove caudas Kurama?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é o nome do Quarteto do Som?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual técnica permitiu à Obito Uchiha se fundir com Madara Uchiha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual era a relação entre Nagato e Naruto antes da Quarta Grande Guerra Ninja?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual personagem foi capaz de usar um Rasengan no ar?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é o nome do clã ao qual pertence Tenten?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Como Kankuro se tornou um marionetista?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é a técnica que permite a Deidara criar as suas famosas esculturas de argila explosivas?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quantos irmãos Uzumaki existem?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "O que aconteceu com o pai de Kimimaro Kaguya?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual era o objetivo final de Madara Uchiha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Que jutsu permite a Orochimaru trocar de corpo para se manter jovem?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é o nome do Deserto na Terra do Vento?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual o nome da personagem que sempre usa chicotes nas lutas?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Como Mei Terumī adquiriu sua kekkei genkai Lava?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Quais são as habilidades específicas do clã Nara na luta ninja?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Por que Karin tem uma marca em sua bochecha?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Qual é a relação entre Konohamaru Sarutobi e Naruto Uzumaki?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },
    {
      "pergunta": "Por que Sasuke Uchiha fica cego depois de usar o Mangekyou?",
      "resposta": {
        "correta": "",
        "outras": []
      }
    },*/
  