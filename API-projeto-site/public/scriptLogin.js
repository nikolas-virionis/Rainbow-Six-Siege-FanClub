let invalidPassword = 0, confirmEmailLogin;
nickId.focus();
historyTab.style.marginTop = "12.5vh";
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
    if(event.key === "Enter"){
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
                sessionStorage.username_usuario_meuapp = json.username;
                sessionStorage.nome_usuario_meuapp = json.nome;
                sessionStorage.carro_usuario_meuapp = json.carroFav;
                sessionStorage.email_usuario_meuapp = json.email;
                sessionStorage.senha_usuario_meuapp = json.senha;
                sessionStorage.anoNasc_usuario_meuapp = json.anoNasc;
                sessionStorage.anoInicio_usuario_meuapp = json.anoInicio;
                logins = "1";
                sessionStorage.setItem("logins", logins);
                window.location.href = 'menuOptions.html';
            });
        } else {
            console.log('Erro de login!');
            alert('Username ou senha incorretos');
            window.location.reload();
            resposta.text().then(texto => {
                console.warn(texto);
            });
        }
    });
    return false;
}