var varIdCarro, 
arrayCarros = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi', 'CyberTruck'], 
arrayObjs = [];
emailId.value = 1;
function submitRank() {
    for (let varIdCarro = 1; varIdCarro <= 7; varIdCarro++){
        emailId.value = varIdCarro;
        var formulario = new URLSearchParams(new FormData(form_ranking));
        fetch("/usuarios/autenticarRank", {
            method: "POST",
            body: formulario
        }).then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
                    for (let iterator of arrayObjs) {
                        if(iterator.id == Number(json.id)) iterator.qtdFavs = Number(json.resultado);
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
    firstLink.innerText = arrayObjs[0].nomeCarro;
    secondLink.innerText = arrayObjs[1].nomeCarro;
    thirdLink.innerText = arrayObjs[2].nomeCarro;
    fourthLink.innerText = arrayObjs[3].nomeCarro;
    fifthLink.innerText = arrayObjs[4].nomeCarro;
    sixthLink.innerText = arrayObjs[5].nomeCarro;
    seventhLink.innerText = arrayObjs[6].nomeCarro;
    ptsFirst.innerHTML = arrayObjs[0].qtdFavs;
    ptsSecond.innerHTML = arrayObjs[1].qtdFavs;
    ptsThird.innerHTML = arrayObjs[2].qtdFavs;
    ptsFourth.innerHTML = arrayObjs[3].qtdFavs;
    ptsFifth.innerHTML = arrayObjs[4].qtdFavs;
    ptsSixth.innerHTML = arrayObjs[5].qtdFavs;
    ptsSeventh.innerHTML = arrayObjs[6].qtdFavs;
return false;
}

arrayObjs.push({
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
});
    arrayObjs[0].nomeCarro = "Model S";
    console.log(arrayObjs[0].qtdFavs);
submitRank()