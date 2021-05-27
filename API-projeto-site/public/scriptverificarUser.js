const enterFunc = event => event.key === "Enter" ? verificarSenhaUser(event) : '';
const verificarSenhaUser = event => {
    event.preventDefault();
    if (!passwordId.value) {
        alert("Campo, Obrigatório de Senha Vazio");
        passwordId.value = "";
    }
    else {
        var formularioVerify = new URLSearchParams(new FormData(form_verify));
        fetch("/usuarios/autenticarSenha", {
            method: "POST",
            body: formularioVerify
        }).then(resposta => resposta.ok ? resposta.json().then(json => json.senha && json.senha == passwordId.value ? window.location.href = "perfil.html" : senhaCheck(json)) : console.log('Erro de verificação de senha!'));
    }
}
function senhaCheck(json) {
    alert(json);
    passwordId.value = "";
}
emailId.value = sessionStorage.email_usuario_meuapp;