let emailValido, senhaValida, senhasIguais, senhaComNum;
nomeId.focus();
const validateEmail = email => {
    emailValido = email.value.indexOf('@') >= 0 && email.value.indexOf('@') === email.value.lastIndexOf('@') && email.value.indexOf('.') >= 0 && email.value.lastIndexOf('.') !== email.value.length - 1 && email.value.lastIndexOf('@') !== email.value.length - 1 && !(email.value.includes(' ')) && email.value.length > 15;
    if (email.value == "" || emailValido) emailId.classList = 'classCadastro';
    else emailId.classList = 'classCadastroError';
    return emailValido;
}
const validatePassword = senha => {
    senhaComNum = senha.value.indexOf('0') >= 0 || senha.value.indexOf('1') >= 0 || senha.value.indexOf('2') >= 0 || senha.value.indexOf('3') >= 0 || senha.value.indexOf('4') >= 0 || senha.value.indexOf('5') >= 0 || senha.value.indexOf('6') >= 0 || senha.value.indexOf('7') >= 0 || senha.value.indexOf('8') >= 0 || senha.value.indexOf('9') >= 0
    senhaValida = senha.value.length >= 8 && senha.value.length <= 16 && senha.value !== senha.value.toLowerCase() && senhaComNum && !(senha.value.includes(' '));
    if (senha.value == "" || senhaValida) passwordId.classList = 'classCadastro';
    else passwordId.classList = 'classCadastroError';
    return senhaValida;
}
const confirmPassword = () => {
    senhasIguais = passwordId.value === passwordIdConfirm.value;
    if (senhasIguais || passwordIdConfirm.value === "") passwordIdConfirm.classList = 'classCadastro';
    else passwordIdConfirm.classList = 'classCadastroError';
    return senhasIguais;
}
function confirmProfile() {
    if (emailId.value == "" || passwordId.value == "" || passwordIdConfirm.value == "" || nomeId.value == "" || nickId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (!validatePassword(passwordId)) {
        alert("Senha Inválida");
        passwordId.value = "";
        passwordIdConfirm.value = "";
    }
    else if (!confirmPassword()) alert("Senhas diferentes");
    else if (!validateEmail(emailId)) {
        alert("Email Inválido");
        emailId.value = "";
    }
    else {//perfil válido, e entrada bem sucedida
        cadastro1.style.display = "none";
        cadastro2.style.display = "block";
        inputlist.focus();
    }
}
const enterFunc = (event, num) => {
    if (event.key === "Enter") {
        event.preventDefault();
        num === 1 ? confirmProfile() : finalizarCadastro();
    }
}
function enterFuncMid(event, blur, focus) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
    }
}
const finalizarCadastro = () => idadeId.value == "" || fanId.value == "" || inputlist.value == "" ? alert("Existem campos obrigatórios vazios, preencha-los para continuar") : cadastrar();
function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (typeof json != 'string') {
                    sessionStorage.username_usuario_meuapp = nickId.value;
                    sessionStorage.nome_usuario_meuapp = nomeId.value;
                    sessionStorage.carro_usuario_meuapp = inputlist.value;
                    sessionStorage.email_usuario_meuapp = emailId.value;
                    sessionStorage.senha_usuario_meuapp = passwordId.value;
                    sessionStorage.anoNasc_usuario_meuapp = idadeId.value;
                    sessionStorage.anoInicio_usuario_meuapp = fanId.value;
                    logins = "1";
                    sessionStorage.setItem("logins", logins);
                    window.location.href = 'menuOptions.html';
                }
                else {
                    alert(json);
                    window.location.href = 'login.html'
                }
            });
        }
        else {
            alert('Erro de cadastro');
            console.log("ERRO DE CADASTRO");
        }
    });
    return false;
}