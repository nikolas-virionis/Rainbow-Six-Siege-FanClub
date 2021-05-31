const enterFunc = event => event.key === "Enter" ? verificarSenhaUser(event) : '';
const verificarSenhaUser = event => {
    event.preventDefault();
    if (!passwordId.value) alert("Campo de senha vazio");
    else {
        var formularioVerify = new URLSearchParams(new FormData(form_verify));
        fetch(`/usuarios/autenticarSenha/${sessionStorage.email}`, {
            method: "POST",
            body: formularioVerify
        }).then(resposta => resposta.ok 
            ? resposta.json().then(json => json.senha && json.senha == passwordId.value 
                ? window.location.href = "perfil.html" 
                : senhaCheck()) 
            : console.log('Erro de verificação de senha!'));
    }
}
function senhaCheck() {
    alert('Senha Incorreta');
    passwordId.value = "";
}