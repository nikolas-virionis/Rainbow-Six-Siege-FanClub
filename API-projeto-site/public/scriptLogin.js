let confirmEmailLogin;
nickId.focus();
sideNavHandle(false);
loginLink.style.display = "none";
loginId.style.display = "none";
const confirmProfile = () => nickId.value == "" || passwordId.value == "" ? alert("Existem campos obrigatórios vazios, preencha-los para continuar") : entrar();
const enterFunc = event => {
    if (event.key === "Enter") {
        event.preventDefault();
        confirmProfile();
    }
}
const enterFuncMid = event => {
    if (event.key === "Enter") {
        event.preventDefault();
        nickId.blur();
        passwordId.focus();
    }
}
function entrar() {
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (json.carroFav == 1) sessionStorage.carro = "Model S";
                else if (json.carroFav == 2) sessionStorage.carro = "Model 3";
                else if (json.carroFav == 3) sessionStorage.carro = "Model X";
                else if (json.carroFav == 4) sessionStorage.carro = "Model Y";
                else if (json.carroFav == 5) sessionStorage.carro = "Roadster";
                else if (json.carroFav == 6) sessionStorage.carro = "Semi";
                else if (json.carroFav == 7) sessionStorage.carro = "Cybertruck";
                sessionStorage.username = json.username;
                sessionStorage.nome = json.nome;
                sessionStorage.email = json.email;
                sessionStorage.senha = json.senha;
                sessionStorage.anoNasc = json.anoNasc;
                sessionStorage.anoInicio = json.anoInicio;
                logins = "1";
                sessionStorage.setItem("logins", logins);
                window.location.href = 'menuOptions.html';
            });
        }
        else alert('Username ou senha incorretos');
    });
    return false;
}