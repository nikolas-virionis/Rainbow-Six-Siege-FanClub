let carro;
if (document.title[document.title.length - 1].toLowerCase() == "s") carro = 1;
else if (document.title[document.title.length - 1].toLowerCase() == "3") carro = 2;
else if (document.title[document.title.length - 1].toLowerCase() == "x") carro = 3;
else if (document.title[document.title.length - 1].toLowerCase() == "y") carro = 4;
else if (document.title[document.title.length - 1].toLowerCase() == "r") carro = 5;
else if (document.title[document.title.length - 1].toLowerCase() == "i") carro = 6;
else if (document.title[document.title.length - 1].toLowerCase() == "k") carro = 7;
else console.error("Erro de escolha do carro, tente novamente mais tarde");
const checkCarro = () => fetch(`/carros/autenticarCarro/${carro}`).then(resposta => resposta.ok ? resposta.json().then(json => assignNewValues(json)) : carError());
function assignNewValues(json) {
    vMaxId.innerHTML = json.vMax;
    aceleração0_100Id.innerHTML = json.aceleração0_100;
    pesoId.innerHTML = json.peso;
    powerId.innerHTML = json.potencia;
    chargeRangeId.innerHTML = json.chargeRange;
    if (aceleração400mId) aceleração400mId.innerHTML = json.aceleração400m;
}
function carError() {
    alert('Erro ao carregar informações sobre o carro \n Tente novamente mais tarde');
    window.location.href = "menuOptions.html";
}
checkCarro()
loginLink.innerHTML = "Carros Favoritos";
loginLink.href = "rankingCarros.html";
loginLink.style.display = "block";