let posição, pontos, backg;
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
        }).then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
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
                })
            }
            else console.error(`Erro de autenticação do carro ${idCarro}`);
        })
    }
    return false;
}