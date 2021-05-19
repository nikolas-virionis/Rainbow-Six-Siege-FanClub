let vMax, aceleração0_100, aceleração400m, peso, potencia, chargeRange;

if (document.title[document.title.length - 1].toLowerCase() == "s") passwordId.value = 1;
else if (document.title[document.title.length - 1].toLowerCase() == "3") passwordId.value = 2;
else if (document.title[document.title.length - 1].toLowerCase() == "x") passwordId.value = 3;
else if (document.title[document.title.length - 1].toLowerCase() == "y") passwordId.value = 4;
else if (document.title[document.title.length - 1].toLowerCase() == "r") passwordId.value = 5;
else if (document.title[document.title.length - 1].toLowerCase() == "i") passwordId.value = 6;
else if (document.title[document.title.length - 1].toLowerCase() == "k") passwordId.value = 7;
else console.error("Erro de escolha do carro, tente novamente mais tarde")

form_carro.submit();

// if (passwordId.value == "1") {
//     vMaxId.innerHTML = 320;
//     aceleração0_100Id.innerHTML = 1.99;
//     pesoId.innerHTML = 2162;
//     powerId.innerHTML = 1020;
//     chargeRangeId.innerHTML = 624;
//     aceleração400mId.innerHTML = 9.23;
// } 
// else if (passwordId.value == "2") {
//     vMaxId.innerHTML = 260;
//     aceleração0_100Id.innerHTML = 3.1;
//     pesoId.innerHTML = 1844;
//     powerId.innerHTML = 480;
//     chargeRangeId.innerHTML = 504;
//     aceleração400mId.innerHTML = 11.60;
// }
// else if (passwordId.value == "3") {
//     vMaxId.innerHTML = 261;
//     aceleração0_100Id.innerHTML = 2.5;
//     pesoId.innerHTML = 2445;
//     powerId.innerHTML = 1020;
//     chargeRangeId.innerHTML = 544;
//     aceleração400mId.innerHTML = 9.90;
// }
// else if (passwordId.value == "4") {
//     vMaxId.innerHTML = 248;
//     aceleração0_100Id.innerHTML = 3.5;
//     pesoId.innerHTML = 2003;
//     powerId.innerHTML = 456;
//     chargeRangeId.innerHTML = 485;
//     aceleração400mId.innerHTML = 12.40;
// }
// else if (passwordId.value == "5") {
//     vMaxId.innerHTML = 400;
//     aceleração0_100Id.innerHTML = '<1.9';
//     pesoId.innerHTML = 1305;
//     powerId.innerHTML = 1020;
//     chargeRangeId.innerHTML = 1000;
//     aceleração400mId.innerHTML = 8.80;
// }
// else if (passwordId.value == "6") {
//     vMaxId.innerHTML = 130;
//     aceleração0_100Id.innerHTML = 5;
//     pesoId.innerHTML = 11340;
//     powerId.innerHTML = 1000;
//     chargeRangeId.innerHTML = 810;
// }
// else if (passwordId.value == "7") {
//     vMaxId.innerHTML = 200;
//     aceleração0_100Id.innerHTML = 4.5;
//     pesoId.innerHTML = 2950;
//     powerId.innerHTML = 800;
//     chargeRangeId.innerHTML = 480;
//     aceleração400mId.innerHTML = 10.80;
// }

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
                powerId.innerHTML = potencia;
                chargeRangeId.innerHTML = chargeRange;
                if(aceleração400mId) aceleração400mId.innerHTML = aceleração400m;
            });
        } else {
            // alert('Erro ao carregar informações sobre o carro \n Tente novamente mais tarde');
            // window.location.href = "menuOptions.html";
        }
    });
    return false;
}
loginLink.innerHTML = "Carros Favoritos";
loginLink.href = "rankingCarros.html";