let varIdCarro, objModelS, objModel3, objModelX, objModelY, objRoadster, objSemi, objCyertruck, 
arrayObjs = [{
    id: 1,
    nomeCarro: 'Model S',
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
}], 
arrayCarros = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi', 'CyberTruck'];
emailId.value = 1;
function submitRank() {
    for (varIdCarro = 1; varIdCarro <= 7; varIdcarro++){
        emailId.value = varIdCarro;
        var formulario = new URLSearchParams(new FormData(form_ranking));
        fetch("/usuarios/autenticarRank", {
            method: "POST",
            body: formulario
        }).then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
                    for (let iterator of arrayObjs) {
                        if(iterator.id == Number(json.id)) iterador.qtdFavs = Number(json.resultado);
                    }
                });
            } else {
                console.error(`Erro de autenticação dos carro ${varIdCarro}`)
                alert('Username ou senha incorretos');
                resposta.text().then(texto => {
                    console.warn(texto);
                });
            }
        });
    }
    arrayObjs.sort((b, a) => (a.qtdFavs).localeCompare(b.qtdFavs));
    arrayObjs[0].nomeCarro = firstLink.innerText;
    arrayObjs[1].nomeCarro = secondLink.innerText;
    arrayObjs[2].nomeCarro = thirdLink.innerText;
    arrayObjs[3].nomeCarro = fourthLink.innerText;
    arrayObjs[4].nomeCarro = fifthLink.innerText;
    arrayObjs[5].nomeCarro = sixthLink.innerText;
    arrayObjs[6].nomeCarro = seventhLink.innerText;
    arrayObjs[0].qtdFavs = ptsFirst.innerText;
    arrayObjs[1].qtdFavs = ptsSecond.innerText;
    arrayObjs[2].qtdFavs = ptsThird.innerText;
    arrayObjs[3].qtdFavs = ptsFourth.innerText;
    arrayObjs[4].qtdFavs = ptsFifth.innerText;
    arrayObjs[5].qtdFavs = ptsSixth.innerText;
    arrayObjs[6].qtdFavs = ptsSeventh.innerText;
return false;
}
form_ranking.submit();