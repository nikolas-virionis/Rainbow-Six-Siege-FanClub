let emailValido, senhaValida, nome, username, email, senha;
const validateEmail = email => {
    emailValido = email.value.indexOf('@') >= 0 && email.value.indexOf('@') === email.value.lastIndexOf('@') && email.value.indexOf('.') >= 0 && email.value.lastIndexOf('.') !== email.value.length-1 && email.value.lastIndexOf('@') !== email.value.length-1 && !(email.value.includes(' ')) && email.value.length > 15;
    if (email.value == "" || emailValido) emailId.classList = 'classCadastro';
    else emailId.classList = 'classCadastroError';
}
const validatePassword = senha => {
    senhaComNum = senha.value.indexOf('0') >= 0 || senha.value.indexOf('1') >= 0 || senha.value.indexOf('2') >= 0|| senha.value.indexOf('3') >= 0|| senha.value.indexOf('4') >= 0|| senha.value.indexOf('5') >= 0|| senha.value.indexOf('6') >= 0|| senha.value.indexOf('7') >= 0|| senha.value.indexOf('8') >= 0|| senha.value.indexOf('9') >= 0
    senhaValida = senha.value.length >= 8 && senha.value.length <= 16 && senha.value !== senha.value.toLowerCase() && senhaComNum && !(senha.value.includes(' '));
    if (senha.value == "" || senhaValida) passwordId.classList = 'classCadastro';
    else {
        passwordId.classList = 'classCadastroError';
        alert("Senha não contém todos os requisitos: \n Ter entre 8 e 16 caracteres \n Ter ao menos um número \n Ter ao menos uma letra maiúscula");
}
}
const confirmPassword = () => {
    if (passwordId.value === passwordIdConfirm.value) passwordIdConfirm.classList = 'classCadastro';
    else passwordIdConfirm.classList = 'classCadastroError';
}
function confirmProfile(){
    if (emailId.value == "" || passwordId.value == "" || passwordIdConfirm.value == "" || nomeId.value == "" || nickId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (!senhaValida) {
        alert("Senha Inválida");
        passwordId.value = "";
        passwordIdConfirm.value = "";
    }
    else if (passwordId.value != passwordIdConfirm.value) alert("Senhas diferentes");
    else if (!emailValido) {
        alert("Email Inválido");
        emailId.value = "";
    }
    else if (loginInfo.length > 0 && emailId.value == loginInfo[0].email || loginInfo.length > 1 && emailId.value == loginInfo[1].email) {
        alert("Perfil já existente com esse Email");
        window.location.href = "login.html";
    }
    else{//perfil válido, e entrada bem sucedida
        nome = nomeId.value;
        username = nickId.value;
        email = emailId.value;
        senha = passwordId.value;
        loginInfo.push({
            nome,
            username,
            email,
            senha
        });
        loginInfoJSONsend = JSON.stringify(loginInfo);
        localStorage.setItem('loginInfo', loginInfoJSONsend);
        logins = "1"
        sessionStorage.setItem("logins", logins);
        window.location.href = "menuOptions.html";
    }
}
const enterFunc = event => event.key === "Enter" ? confirmProfile() : '';
function enterFuncMid(event, blur, focus) {
    if(event.key === "Enter"){
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
    }
}