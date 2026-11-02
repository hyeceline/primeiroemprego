/* =================================
   VARIÁVEIS DO JOGO
================================= */

let nomeJogador = "";
let cenaAtual = 0;
let dialogos = [];


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
   IR PARA A TELA DE IDENTIFICAÇÃO
================================= */

function irParaIdentificacao() {
    trocarTela("tela-inicial", "tela-identificacao");
}

/* =================================
   COMEÇAR O JOGO
================================= */

function comecarJogo() {

    // Pega o nome digitado pelo jogador

    nomeJogador = document.getElementById("nomeJogador").value.trim();

    // Verifica se o campo está vazio

    if (nomeJogador === "") {

        alert("Por favor, digite seu nome!");

        return;

    }
    trocarTela("tela-identificacao", "tela-jogo");
}

    // Cria os diálogos personalizados

    dialogos = [

        "Era uma manhã de segunda-feira. " + nomeJogador + " estava prestes a começar seu primeiro emprego.",

        "Depois de semanas procurando uma oportunidade, " + nomeJogador + " finalmente conseguiu uma entrevista na Aurora Comunicação.",

        "Ao chegar na empresa, " + nomeJogador + " foi recebido por uma funcionária chamada Marina.",

        "Marina: Olá, " + nomeJogador + "! Seja bem-vindo à equipe!"

    ];


    // Esconde a tela de identificação

    document.getElementById("tela-identificacao").style.display = "none";


    // Mostra a tela do jogo

    document.getElementById("tela-jogo").style.display = "block";


    // Reinicia a história

    cenaAtual = 0;


    // Mostra o primeiro diálogo

    mostrarDialogo();



/* =================================
   MOSTRAR DIÁLOGOS
================================= */

function mostrarDialogo() {

    document.getElementById("texto").textContent = dialogos[cenaAtual];

}


/* =================================
   AVANÇAR CENAS
================================= */

function proximaCena() {

    cenaAtual++;

    if (cenaAtual < dialogos.length) {

        mostrarDialogo();

    } else {

        document.getElementById("texto").textContent =
            nomeJogador + ", seu primeiro dia de trabalho está apenas começando!";

    }

}