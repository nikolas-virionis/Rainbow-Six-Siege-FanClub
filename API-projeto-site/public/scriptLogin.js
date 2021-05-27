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
                if (json.carroFav == 1) sessionStorage.carro_usuario_meuapp = "Model S";
                else if (json.carroFav == 2) sessionStorage.carro_usuario_meuapp = "Model 3";
                else if (json.carroFav == 3) sessionStorage.carro_usuario_meuapp = "Model X";
                else if (json.carroFav == 4) sessionStorage.carro_usuario_meuapp = "Model Y";
                else if (json.carroFav == 5) sessionStorage.carro_usuario_meuapp = "Roadster";
                else if (json.carroFav == 6) sessionStorage.carro_usuario_meuapp = "Semi";
                else if (json.carroFav == 7) sessionStorage.carro_usuario_meuapp = "Cybertruck";
                sessionStorage.username_usuario_meuapp = json.username;
                sessionStorage.nome_usuario_meuapp = json.nome;
                sessionStorage.email_usuario_meuapp = json.email;
                sessionStorage.senha_usuario_meuapp = json.senha;
                sessionStorage.anoNasc_usuario_meuapp = json.anoNasc;
                sessionStorage.anoInicio_usuario_meuapp = json.anoInicio;
                logins = "1";
                sessionStorage.setItem("logins", logins);
                window.location.href = 'menuOptions.html';
            });
        }
        else alert('Username ou senha incorretos');
    });
    return false;
}