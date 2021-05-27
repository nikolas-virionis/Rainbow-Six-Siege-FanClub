function checkCarro() {
    var formularioCarro = new URLSearchParams(new FormData(form_carro));
    fetch("/carros/autenticarCarro", {
        method: "POST",
        body: formularioCarro
    }).then(resposta => resposta.ok ? resposta.json().then(json => assignNewValues(json)) : carError());
    return false;
}
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
if (document.title[document.title.length - 1].toLowerCase() == "s") passwordId.value = 1;
else if (document.title[document.title.length - 1].toLowerCase() == "3") passwordId.value = 2;
else if (document.title[document.title.length - 1].toLowerCase() == "x") passwordId.value = 3;
else if (document.title[document.title.length - 1].toLowerCase() == "y") passwordId.value = 4;
else if (document.title[document.title.length - 1].toLowerCase() == "r") passwordId.value = 5;
else if (document.title[document.title.length - 1].toLowerCase() == "i") passwordId.value = 6;
else if (document.title[document.title.length - 1].toLowerCase() == "k") passwordId.value = 7;
else console.error("Erro de escolha do carro, tente novamente mais tarde");
checkCarro()
loginLink.innerHTML = "Carros Favoritos";
loginLink.href = "rankingCarros.html";
loginLink.style.display = "block";