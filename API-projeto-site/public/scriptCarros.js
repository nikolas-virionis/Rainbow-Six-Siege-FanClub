let vMax, aceleração0_100, aceleração400m, peso, potencia, chargeRange;

if (document.title[document.title.length - 1].toLowerCase() == "s") passwordId.value = 1;
else if (document.title[document.title.length - 1].toLowerCase() == "3") passwordId.value = 2;
else if (document.title[document.title.length - 1].toLowerCase() == "x") passwordId.value = 3;
else if (document.title[document.title.length - 1].toLowerCase() == "y") passwordId.value = 4;
else if (document.title[document.title.length - 1].toLowerCase() == "r") passwordId.value = 5;
else if (document.title[document.title.length - 1].toLowerCase() == "i") passwordId.value = 6;
else if (document.title[document.title.length - 1].toLowerCase() == "k") passwordId.value = 7;
else console.error("Erro de escolha do carro, tente novamente mais tarde")
form_carro.submit()
function checkCarro() {
    var formularioCarro = new URLSearchParams(new FormData(form_carro));
    fetch("/carros/autenticarCarro", {
        method: "POST",
        body: formularioCarro
    }).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                vMax = json.vMax;
                aceleração0_100 = json.aceleração0_100;
                aceleração400m = json.aceleração400m;
                peso = json.peso;
                potencia = json.potencia;
                chargeRange = json.chargeRange;
                vMaxId.innerHTML = vMax;
                aceleração0_100Id.innerHTML = aceleração0_100;
                pesoId.innerHTML = peso;
                potenciaId.innerHTML = potencia;
                chargeRangeId.innerHTML = chargeRange;
                if(aceleração400mId) aceleração400mId.innerHTML = aceleração400m;
            });
        } else {
            alert('Erro ao carregar informações sobre o carro \n Tente novamente mais tarde');
            // window.location.href = "menuOptions.html";
        }
    });
    return false;
}