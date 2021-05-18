const enterFunc = event => event.key === "Enter" ? verificarSenhaUser(event) : '';
const verificarSenhaUser = event => {
    event.preventDefault();
    if (!passwordId.value) {
        alert("Campo, Obrigatório, de Senha Vazio");
        passwordId.value = "";
    }
    else {
        var formularioVerify = new URLSearchParams(new FormData(form_verify));
        fetch("/usuarios/autenticarSenha", {
            method: "POST",
            body: formularioVerify
        }).then(resposta => {
            if (resposta.ok) {
                resposta.json().then(json => {
                    if (json.senha && json.senha == passwordId.value) window.location.href = "perfil.html";
                    else {
                        alert(json);
                        passwordId.value = "";
                    }
                });
            } else {
                console.log('Erro de verificação de senha!');
                resposta.text().then(texto => {
                    console.warn(texto);
                });
            }
        });
    }
}
emailId.value = sessionStorage.email_usuario_meuapp;