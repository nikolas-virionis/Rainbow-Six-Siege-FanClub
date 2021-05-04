let invalidPassword = 0, 
confirmEmailLogin, 
loginTypeNick = sessionStorage.getItem('loginTypeNick') ?? true;
nickId.focus();
if (loginTypeNick === 'false') nickId.placeholder = 'Email';
historyTab.style.marginTop = "12.5vh";
loginLink.style.display = "none";
loginId.style.display = "none";
function confirmProfile(){
    if (loginTypeNick !== 'false'){
        if (nickId.value == "" || passwordId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
        else if (loginInfo.length > 0 && nickId.value !== loginInfo[0].username || loginInfo.length > 1 &&  nickId.value !== loginInfo[1].username) {
            invalidPassword++
            if (invalidPassword > 2) {
                confirmEmailLogin = confirm('Prefere realizar o login com o email cadastrado?');
                if (confirmEmailLogin) {
                    loginTypeNick = false;
                    sessionStorage.setItem('loginTypeNick', loginTypeNick)
                    nickId.value = "";
                    passwordId.value = "";
                    window.location.reload();
                    return;
                }
            } 
            alert("Username Inválido");
            nickId.value = "";
        }
        else if (loginInfo.length > 0 && passwordId.value !== loginInfo[0].senha || loginInfo.length > 1 && passwordId.value !== loginInfo[1].senha) {
               
            alert("Senha Inválida");
            passwordId.value = "";
        }
        else{//perfil válido, e entrada bem sucedida
            logins = "1"
            sessionStorage.setItem("logins", logins);
            window.location.href = "menuOptions.html";
        }
    }
    else {
        if (nickId.value == "" || passwordId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (loginInfo.length > 0 && nickId.value !== loginInfo[0].email || loginInfo.length > 1 && nickId.value !== loginInfo[1].email) {
        alert("Email Inválido");
        nickId.value = "";
    }
    else if (loginInfo.length > 0 && passwordId.value !== loginInfo[0].senha || loginInfo.length > 1 && passwordId.value !== loginInfo[1].senha) {
        alert("Senha Inválida");
        passwordId.value = "";
    }
    else{//perfil válido, e entrada bem sucedida
        logins = "1"
        sessionStorage.setItem("logins", logins);
        window.location.href = "menuOptions.html";
    }
    }
}
const enterFunc = event => event.key === "Enter" ? confirmProfile() : '';
function enterFuncMid(event) {
    if(event.key === "Enter"){
        nickId.blur();
        passwordId.focus();
    }
}