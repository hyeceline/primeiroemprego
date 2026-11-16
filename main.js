/* =================================
   VARIÁVEIS DO JOGO
================================= */

let nomeJogador = "";
let cenaAtual = 0;
let dialogos = [];


/* =================================
   FUNÇÃO DE TRANSIÇÃO
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
   TELA DE CRÉDITOS
================================= */

function mostrarCreditos() {
    trocarTela("tela-inicial", "tela-creditos");
}

function voltarParaMenu() {
    trocarTela("tela-creditos", "tela-inicial");
}


/* =================================
   TELA DE IDENTIFICAÇÃO
================================= */

function irParaIdentificacao() {
    trocarTela("tela-inicial", "tela-identificacao");
}


/* =================================
   COMEÇAR O JOGO
================================= */

function comecarJogo() {
    nomeJogador = document.getElementById("nomeJogador").value.trim();

    if (nomeJogador === "") {
        alert("Por favor, digite seu nome!");
        return;
    }

    // Prepara os diálogos
    dialogos = [
        "Era uma manhã de segunda-feira. " + nomeJogador + " estava prestes a começar seu primeiro emprego.",
        "Depois de semanas procurando uma oportunidade, " + nomeJogador + " finalmente conseguiu uma entrevista na Aurora Comunicação.",
        "Ao chegar na empresa, " + nomeJogador + " foi recebido por uma funcionária chamada Marina.",
        "Marina: Olá, " + nomeJogador + "! Seja bem-vindo à equipe!"
    ];

    cenaAtual = 0;
    mostrarDialogo();

    // Faz a transição para a tela do jogo
    trocarTela("tela-identificacao", "tela-jogo");
}



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