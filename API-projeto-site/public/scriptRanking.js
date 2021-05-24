var arrayCarros = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi', 'CyberTruck'], 
arrayObjs = [
    {
        id: 1,
        nomeCarro: "Model S",
        qtdFavs: 0
    },
    {
        id: 2,
        nomeCarro: 'Model 3',
        qtdFavs: 0
    },
    {
        id: 3,
        nomeCarro: 'Model X',
        qtdFavs: 0
    },
    {
        id: 4,
        nomeCarro: 'Model Y',
        qtdFavs: 0
    },
    {
        id: 5,
        nomeCarro: 'Roadster',
        qtdFavs: 0
    },
    {
        id: 6,
        nomeCarro: 'Semi',
        qtdFavs: 0
    },
    {
        id: 7,
        nomeCarro: 'Cybertruck',
        qtdFavs: 0
    }];
    var posição, pontos;
emailId.value = 1;
submitRank();
function submitRank() {
    debugger
    for (let idCarro = 1; idCarro <= 7; idCarro++){
        emailId.value = idCarro;
        var formulario = new URLSearchParams(new FormData(form_ranking));
        fetch("/usuarios/autenticarRank", {
            method: "POST",
            body: formulario
        }).then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
                    if (idCarro == 1) {
                        posição = document.getElementById('firstLink')
                        pontos = document.getElementById('ptsFirst')
                    }
                    else if (idCarro == 2) {
                        posição = document.getElementById('secondLink')
                        pontos = document.getElementById('ptsSecond')
                    }
                    else if (idCarro == 3) {
                        posição = document.getElementById('thirdLink')
                        pontos = document.getElementById('ptsThird')
                    }
                    else if (idCarro == 4) {
                        posição = document.getElementById('fourthLink')
                        pontos = document.getElementById('ptsFourth')
                    }
                    else if (idCarro == 5) {
                        posição = document.getElementById('fifthLink')
                        pontos = document.getElementById('ptsFifth')
                    }
                    else if (idCarro == 6) {
                        posição = document.getElementById('sixthLink')
                        pontos = document.getElementById('ptsSixth')
                    }
                    else if (idCarro == 7) {
                        posição = document.getElementById('seventhLink')
                        pontos = document.getElementById('ptsSeventh')
                    }
                    console.log(json[idCarro - 1])
                    posição.innerHTML = json[idCarro - 1].nomeCarro;
                    pontos.innerHTML = json[idCarro - 1].qtdFks;
                    posição.href += `${((json[idCarro - 1].nomeCarro).split(" ").join("")).toLowerCase()}.html`;
                })
            }
            else console.error(`Erro de autenticação dos carro ${idCarro}`);
        })
    }
return false;
}