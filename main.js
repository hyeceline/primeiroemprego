/* =================================
   VARIÁVEIS
================================= */

let nomeJogador = "";
let cenaAtual = 0;
const diretorioImagensPersonagens = new URL(".", document.currentScript.src);

let pontos = {
    comunicacao: 0,
    iniciativa: 0,
    equipe: 0,
    honestidade: 0
};

/* =================================
   TRANSIÇÃO
================================= */

function trocarTela(telaAtual, proximaTela) {
    const transicao = document.getElementById("transicao");

    transicao.style.pointerEvents = "auto";
    transicao.classList.remove("sair");
    transicao.classList.add("ativar");

    setTimeout(function() {
        document.getElementById(telaAtual).style.display = "none";
        document.getElementById(proximaTela).style.display = "flex";

        transicao.classList.remove("ativar");
        transicao.classList.add("sair");

        setTimeout(function() {
            transicao.classList.remove("sair");
            transicao.style.pointerEvents = "none";
        }, 700);

    }, 700);
}


/* =================================
   MENU
================================= */

function irParaIdentificacao() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-identificacao").style.display = "flex";
}

function mostrarCreditos() {
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-creditos").style.display = "flex";
}

function voltarParaMenu() {
    document.getElementById("tela-creditos").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";
}


/* =================================
   COMEÇAR JOGO
================================= */

function comecarJogo() {
    nomeJogador = document.getElementById("nomeJogador").value.trim();

    if (nomeJogador === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    cenaAtual = 0;

    pontos = {
        comunicacao: 0,
        iniciativa: 0,
        equipe: 0,
        honestidade: 0
    };

    mostrarCena();
    trocarTela("tela-identificacao", "tela-jogo");
}


/* =================================
   HISTÓRIA
================================= */

const cenas = [

    // CENA 0 — INTRODUÇÃO
    {
        personagem: "NARRADOR",
        icone: "✦",
        classe: "narrador",
        local: "SEGUNDA-FEIRA — 08:00",
        fundo: "./bg2.png",

        texto:
        "Era uma manhã de segunda-feira. Depois de semanas procurando uma oportunidade, {nome} finalmente havia conseguido seu primeiro emprego na Aurora Comunicação, uma agência de publicidade conhecida por seus projetos criativos. Nervoso, mas animado, {nome} atravessou a porta da empresa sem imaginar o que aquele dia reservaria.",

        continuar: true
    },


    // CENA 1 — PRIMEIRA DECISÃO
    {
        personagem: "MARINA",
        icone: "M",
        classe: "marina",
        local: "RECEPÇÃO",
        fundo: "./bg2.png",

        texto:
        "Marina, responsável por orientar os novos funcionários, aproxima-se com uma pasta nas mãos. \"Oi! Você deve ser {nome}, certo? Seja bem-vindo! Hoje vamos começar com uma tarefa simples: ajudar a preparar uma apresentação para um cliente. Como prefere começar?\"",

        opcoes: [

            {
                texto: "A) Pedir que Marina explique todos os detalhes.",
                resultado:
                "\"Claro! Não tenha vergonha de perguntar. É melhor esclarecer as dúvidas antes de começar\", responde Marina.",
                pontos: { comunicacao: 2, honestidade: 1 },
                correta: true
            },

            {
                texto: "B) Aceitar a tarefa e tentar resolver sozinho.",
                resultado:
                "\"Gosto dessa disposição! Só não se esqueça de pedir ajuda se precisar\", comenta Marina.",
                pontos: { iniciativa: 2 },
                correta: false
            },

            {
                texto: "C) Procurar um colega para fazer a tarefa em conjunto.",
                resultado:
                "\"Boa ideia! Trabalhar em equipe pode facilitar bastante as coisas\", diz Marina.",
                pontos: { equipe: 2, comunicacao: 1 },
                correta: true
            }

        ]
    },

    // CENA 2 — SEGUNDA DECISÃO
    {
        personagem: "RENATA",
        icone: "R",
        classe: "renata",
        local: "SALA DE CRIAÇÃO",
        fundo: "./bg2.png",

        texto:
        "Na sala de criação, {nome} conhece Renata, uma funcionária que trabalha na agência há alguns meses. Ela percebe que você está analisando os documentos da apresentação. \"Olha, acho que algumas informações estão faltando aqui. A gente precisa descobrir os dados corretos antes de enviar isso ao cliente. O que você acha que devemos fazer?\"",

        opcoes: [

            {
                texto: "A) Pesquisar e conferir as informações antes de continuar.",
                resultado:
                "Renata concorda. \"Ótimo! Não podemos correr o risco de apresentar dados errados.\"",
                pontos: { iniciativa: 1, honestidade: 2 },
                correta: true
            },

            {
                texto: "B) Perguntar a Marina onde encontrar os dados.",
                resultado:
                "Marina indica os arquivos corretos e agradece por você ter perguntado antes de tomar uma decisão.",
                pontos: { comunicacao: 2, honestidade: 1 },
                correta: true
            },

            {
                texto: "C) Usar os dados disponíveis e deixar essa parte para depois.",
                resultado:
                "Renata fica um pouco preocupada. \"Espero que a gente consiga revisar isso a tempo...\"",
                pontos: { iniciativa: 1 },
                correta: false
            }

        ]
    },


    // CENA 3 — TERCEIRA DECISÃO
    {
        personagem: "RENATA",
        icone: "R",
        classe: "renata",
        local: "SALA DE REUNIÕES",
        fundo: "./bg2.png",

        texto:
        "Pouco antes da apresentação, Renata percebe que uma parte importante do material está diferente do que foi combinado. Ela parece bastante nervosa. \"Acho que cometi um erro na organização dos slides. Não sei se vamos conseguir terminar a tempo...\" Como você reage?",

        opcoes: [

            {
                texto: "A) Oferecer ajuda para corrigir os slides.",
                resultado:
                "Renata respira aliviada. \"Obrigada! Eu estava precisando de uma mão.\" Vocês conseguem reorganizar o material juntos.",
                pontos: { equipe: 2, comunicacao: 1 },
                correta: true
            },

            {
                texto: "B) Avisar Marina imediatamente e explicar o problema.",
                resultado:
                "Marina agradece por ter sido avisada. Juntos, vocês encontram uma solução antes da reunião.",
                pontos: { comunicacao: 1, honestidade: 2 },
                correta: true
            },

            {
                texto: "C) Ignorar o problema e continuar com sua própria parte.",
                resultado:
                "Você continua trabalhando, mas percebe que Renata precisa resolver a situação sozinha.",
                pontos: { iniciativa: 1 },
                correta: false
            }

        ]
    },


    // CENA 4 — QUARTA DECISÃO
    {
        personagem: "MARINA",
        icone: "M",
        classe: "marina",
        local: "REUNIÃO COM O CLIENTE",
        fundo: "./bg2.png",

        texto:
        "A apresentação está prestes a começar. Marina se aproxima e pergunta: \"{nome}, percebi que algumas partes do projeto ainda precisam de ajustes. Como você acha que devemos lidar com isso durante a reunião?\" É o momento de mostrar o que você aprendeu no seu primeiro dia.",

        opcoes: [

            {
                texto: "A) Ser transparente e explicar o que ainda precisa ser ajustado.",
                resultado:
                "\"Essa é uma atitude profissional. É importante manter a confiança do cliente\", responde Marina.",
                pontos: { honestidade: 2, comunicacao: 1 },
                correta: true
            },

            {
                texto: "B) Apresentar o trabalho mesmo com os problemas, sem comentar nada.",
                resultado:
                "Marina parece hesitante. \"Precisamos ter cuidado para não comprometer a confiança do cliente.\"",
                pontos: { iniciativa: 1 },
                correta: false
            },

            {
                texto: "C) Pedir ajuda à equipe para revisar tudo antes da apresentação.",
                resultado:
                "\"Excelente! Uma equipe que se comunica consegue encontrar soluções melhores\", diz Marina.",
                pontos: { equipe: 2, comunicacao: 1 },
                correta: true
            }

        ]
    }

];




function mostrarCena() {
    const cena = cenas[cenaAtual];

    const fundo = document.getElementById("fundoCena");
    fundo.style.backgroundImage = `url("${cena.fundo}")`;
    fundo.classList.add("ativo");

    document.getElementById("nomePersonagem").textContent =
        cena.personagem;

    document.getElementById("texto").textContent =
        cena.texto.replaceAll("{nome}", nomeJogador);

    document.getElementById("numeroCena").textContent =
        "DIA 01 — CENA " + (cenaAtual + 1);

    document.getElementById("localCena").textContent =
        cena.local;

    const personagem = document.getElementById("personagem");

    personagem.className = "personagem " + cena.classe;

    const icone = document.getElementById("iconePersonagem");
    const iconeTexto = document.getElementById("iconePersonagemTexto");
    iconeTexto.textContent = cena.icone;
    icone.onerror = function() {
        console.error("Não foi possível carregar a imagem do personagem:", icone.src);
        icone.style.display = "none";
        iconeTexto.style.display = "block";
    };

    if (cena.classe === "marina") {
        icone.src = new URL("Marina.jpg", diretorioImagensPersonagens).href;
        icone.style.display = "block";
        iconeTexto.style.display = "none";
    } else if (cena.classe === "renata") {
        icone.src = new URL("Renata.png", diretorioImagensPersonagens).href;
        icone.style.display = "block";
        iconeTexto.style.display = "none";
    } else {
        icone.style.display = "none";
        iconeTexto.style.display = "block";
    }

    const opcoes = document.getElementById("opcoes");
    const botaoContinuar = document.getElementById("botaoContinuar");

    opcoes.innerHTML = "";

    if (cena.opcoes) {
        botaoContinuar.classList.add("escondido");

        cena.opcoes.forEach(function(opcao, indice) {
            const botao = document.createElement("button");

            botao.textContent = opcao.texto;

            botao.onclick = function() {
                selecionarOpcao(indice);
            };

            opcoes.appendChild(botao);
        });

    } else {
        botaoContinuar.classList.remove("escondido");
    }
}


/* =================================
   SELECIONAR OPÇÃO
================================= */

function selecionarOpcao(indice) {
    const cena = cenas[cenaAtual];
    const opcao = cena.opcoes[indice];

    // Se for resposta errada → Game Over
    if (opcao.correta === false) {
        mostrarGameOver(opcao);
        return;
    }

    // Acertou: registra os pontos
    for (let atributo in opcao.pontos) {
        pontos[atributo] += opcao.pontos[atributo];
    }

    // Mostra a consequência
    document.getElementById("nomePersonagem").textContent = "CONSEQUÊNCIA";
    document.getElementById("texto").textContent = opcao.resultado;
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("botaoContinuar").classList.remove("escondido");
}

/* =================================
   AVANÇAR HISTÓRIA
================================= */

function continuarHistoria() {

    // Depois da última decisão, mostrar o final
    if (cenaAtual === cenas.length - 1) {
        mostrarFinal();
        return;
    }

    cenaAtual++;

    mostrarCena();
}


/* =================================
   FINAIS
================================= */

function mostrarFinal() {

    document.getElementById("nomePersonagem").textContent =
        "FIM DO PRIMEIRO DIA";

    document.getElementById("numeroCena").textContent =
        "DIA 01 — ENCERRAMENTO";

    document.getElementById("localCena").textContent =
        "AURORA COMUNICAÇÃO";

    document.getElementById("personagem").className =
        "personagem narrador";

    const icone = document.getElementById("iconePersonagem");
    icone.style.display = "none";
    document.getElementById("iconePersonagemTexto").style.display = "block";

    document.getElementById("opcoes").innerHTML = "";

    document.getElementById("botaoContinuar").classList.add("escondido");

    let tituloFinal = "";
    let textoFinal = "";

    const totalEquipe =
        pontos.equipe + pontos.comunicacao + pontos.honestidade;

    if (pontos.honestidade >= 3 && totalEquipe >= 6) {

        tituloFinal = "FINAL 1 — UM BOM COMEÇO";

        textoFinal =
        "Ao final da reunião, Marina elogia sua postura e Renata agradece pela ajuda. Você demonstrou responsabilidade, empatia e capacidade de trabalhar em equipe. Seu primeiro dia termina com a sensação de que encontrou um lugar onde pode crescer. Talvez esse seja o início de uma grande trajetória profissional.";

    } else if (pontos.iniciativa >= 3) {tituloFinal = "FINAL 2 — UM TALENTO EM DESENVOLVIMENTO";

        textoFinal =
        "Marina percebe sua disposição para enfrentar desafios e sua vontade de aprender. Embora algumas situações tenham sido difíceis, você mostrou iniciativa e independência. Ainda há muito a descobrir sobre o mundo do trabalho, mas uma coisa é certa: você não tem medo de tentar.";

    } else {

        tituloFinal = "FINAL 3 — UMA LIÇÃO IMPORTANTE";

        textoFinal =
        "O primeiro dia não saiu exatamente como você imaginava. Algumas decisões poderiam ter sido diferentes, e você percebe que trabalhar envolve muito mais do que cumprir tarefas. Comunicação, responsabilidade e colaboração fazem diferença. Apesar dos obstáculos, amanhã será uma nova oportunidade para fazer melhor.";

    }

    document.getElementById("nomePersonagem").textContent =
        tituloFinal;

    escreverTexto(textoFinal);

    const botaoReiniciar = document.createElement("button");

    botaoReiniciar.textContent = "JOGAR NOVAMENTE";
    botaoReiniciar.className = "botao-principal";

    botaoReiniciar.onclick = function() {
        reiniciarJogo();
    };

    document.getElementById("opcoes").appendChild(botaoReiniciar);
}
/* =================================
   GAME OVER
================================= */

function mostrarGameOver(opcao) {
    document.body.classList.add("game-over");

    // Define o texto do Game Over
    document.getElementById("textoGameOver").textContent =
        "Sua escolha não foi a mais adequada. " +
        opcao.resultado + " " +
        "Infelizmente, esse primeiro dia não terminou bem. " +
        "Talvez a próxima tentativa seja diferente...";

    // Usa a transição existente
    trocarTela("tela-jogo", "tela-game-over");
}


/* =================================
   TEXTO GRADUAL
================================= */

function escreverTexto(texto) {
    const elemento = document.getElementById("texto");

    elemento.textContent = texto;
}


/* =================================
   REINICIAR
================================= */

function reiniciarJogo() {
    document.body.classList.remove("game-over");

    // Esconde as telas do jogo e do game over
    document.getElementById("tela-jogo").style.display = "none";
    document.getElementById("tela-game-over").style.display = "none";
    document.getElementById("tela-inicial").style.display = "flex";

    document.getElementById("nomeJogador").value = "";

    const fundo = document.querySelector(".cenario-fundo");
    if (fundo) {
        fundo.classList.remove("ativo");
        fundo.style.backgroundImage = "";
    }

    cenaAtual = 0;

    pontos = {
        comunicacao: 0,
        iniciativa: 0,
        equipe: 0,
        honestidade: 0
    };
}