let posição, pontos, backg, colocações = document.querySelectorAll('.colocação'), fontSizeInicial = 6;
emailId.value = 1;
const setLink = (linkpos, linkpts, backRank) => {
    posição = document.getElementById(linkpos);
    pontos = document.getElementById(linkpts);
    backg = document.querySelector(backRank);
}
submitRank();
function submitRank() {
    for (let idCarro = 1; idCarro <= 7; idCarro++) {
        emailId.value = idCarro;
        var formulario = new URLSearchParams(new FormData(form_ranking));
        fetch("/usuarios/autenticarRank", {
            method: "POST",
            body: formulario
        }).then(resposta => resposta.ok ? resposta.json().then(json => dadosCarro(json, idCarro)) : console.error(`Erro de autenticação do carro ${idCarro}`));
    }
    colocações[0].style.color = 'gold'
    colocações[1].style.color = 'silver'
    colocações[2].style.color = 'darkgoldenrod'
    for (let iterator of colocações) {
        fontSizeInicial >= 2.5 ? iterator.style.fontSize = `${fontSizeInicial}vw` : iterator.style.fontSize = `2.5vw`;
        fontSizeInicial -= 0.7;
    }
    return false;
}
function dadosCarro(json, idCarro) {
    if (idCarro == 1) setLink('firstLink', 'ptsFirst', '.firstplace');
    else if (idCarro == 2) setLink('secondLink', 'ptsSecond', '.secondplace');
    else if (idCarro == 3) setLink('thirdLink', 'ptsThird', '.thirdplace');
    else if (idCarro == 4) setLink('fourthLink', 'ptsFourth', '.fourthplace');
    else if (idCarro == 5) setLink('fifthLink', 'ptsFifth', '.fifthplace');
    else if (idCarro == 6) setLink('sixthLink', 'ptsSixth', '.sixthplace');
    else if (idCarro == 7) setLink('seventhLink', 'ptsSeventh', '.seventhplace');
    posição.innerHTML = json[idCarro - 1].nomeCarro;
    pontos.innerHTML = json[idCarro - 1].qtdFks;
    posição.href += `${((json[idCarro - 1].nomeCarro).split(" ").join("")).toLowerCase()}.html`;
    if (sessionStorage.carro_usuario_meuapp == posição.innerHTML) backg.style.backgroundColor = "#404040";
}