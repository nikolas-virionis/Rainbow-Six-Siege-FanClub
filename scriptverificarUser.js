const verificarSenhaUser = () =>{
    if (loginInfo.length > 0 && passwordId.value !== loginInfo[0].senha || loginInfo.length > 1 && passwordId.value !== loginInfo[1].senha) {
        alert("Senha Inválida");
        passwordId.value = "";
    }
    else window.location.replace('perfil.html');
}