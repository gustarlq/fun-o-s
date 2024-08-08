const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de entrar em uma empresa que está implementando uma nova tecnologia: um sistema de IA que pode otimizar processos e responder dúvidas de clientes. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você ficou preocupado com a possível substituição de empregos e o impacto da IA nos processos tradicionais da empresa."
            },
            {
                texto: "Isso é empolgante!",
                afirmacao: "Você ficou animado com as oportunidades de otimização e eficiência que a IA pode trazer para o ambiente de trabalho."
            }
        ]
    },
    {
        enunciado: "A empresa organiza um workshop para ensinar os funcionários a utilizar a nova ferramenta de IA. Como você se prepara para o workshop?",
        alternativas: [
            {
                texto: "Você pesquisa sobre as funcionalidades da ferramenta e explora tutoriais online para se preparar melhor.",
                afirmacao: "Você conseguiu se familiarizar com a ferramenta antes do workshop e ficou mais confiante para aproveitar as oportunidades que ela oferece."
            },
            {
                texto: "Você decide ir ao workshop sem preparação prévia e confiar na apresentação para aprender tudo que precisa.",
                afirmacao: "Você preferiu absorver as informações diretamente da fonte e aprendeu as funcionalidades da IA conforme foram apresentadas."
            }
        ]
    },
    {
        enunciado: "Após o workshop, você começa a usar a ferramenta de IA em seus projetos. Como você integra essa tecnologia em seu trabalho diário?",
        alternativas: [
            {
                texto: "Você utiliza a IA para automatizar tarefas repetitivas e liberar mais tempo para atividades criativas e estratégicas.",
                afirmacao: "Você encontrou um equilíbrio entre a automação e a criatividade, melhorando a produtividade e a qualidade do seu trabalho."
            },
            {
                texto: "Você mantém os métodos tradicionais de trabalho e utiliza a IA apenas quando necessário, sem alterar significativamente seu fluxo de trabalho.",
                afirmacao: "Você preferiu seguir com seus métodos tradicionais e utilizou a IA como uma ferramenta auxiliar sem mudar muito seu modo de trabalho."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião, um colega sugere que a IA pode ajudar a criar relatórios mais detalhados e precisos. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Você apoia a ideia e sugere integrar a IA para análise de dados e geração de relatórios mais robustos.",
                afirmacao: "Você vê o valor na IA para melhorar a qualidade e a precisão dos relatórios e se envolve na implementação dessa sugestão."
            },
            {
                texto: "Você tem dúvidas e acha que a supervisão humana ainda é necessária para garantir a integridade e a precisão dos relatórios.",
                afirmacao: "Você acredita que a IA pode ser uma ferramenta útil, mas considera essencial a revisão humana para assegurar que os relatórios sejam confiáveis."
            }
        ]
    },
    {
        enunciado: "O uso da IA trouxe mudanças significativas na empresa, incluindo uma reestruturação de equipes. Como você lida com essas mudanças?",
        alternativas: [
            {
                texto: "Você vê a reestruturação como uma oportunidade de crescimento e está aberto a aprender novas habilidades e se adaptar.",
                afirmacao: "Você abraça as mudanças e busca maneiras de se adaptar às novas demandas do mercado, aproveitando as oportunidades de desenvolvimento pessoal."
            },
            {
                texto: "Você se sente inseguro e prefere manter-se na sua zona de conforto, resistindo a mudanças que envolvem o uso intensivo da IA.",
                afirmacao: "Você prefere manter a estabilidade e busca formas de se ajustar gradualmente às novas tecnologias sem abandonar completamente os métodos antigos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Futuro da empresa com IA...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
