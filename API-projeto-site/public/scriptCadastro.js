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
function cadastroFeito() {
    sessionStorage.username = nickId.value;
    sessionStorage.nome = nomeId.value;
    sessionStorage.carro = inputlist.value;
    sessionStorage.email = emailId.value;
    sessionStorage.senha = passwordId.value;
    sessionStorage.anoNasc = idadeId.value;
    sessionStorage.anoInicio = fanId.value;
    logins = "1";
    sessionStorage.setItem("logins", logins);
    window.location.href = 'menuOptions.html';
}
function cadastroError(json) {
    alert(json);
    window.location.href = 'login.html'
}
function confirmProfile() {
    if (emailId.value == "" || passwordId.value == "" || passwordIdConfirm.value == "" || nomeId.value == "" || nickId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (!validateEmail(emailId)) emailInvalido();
    else if (!validatePassword(passwordId)) senhaInvalida()
    else if (!confirmPassword()) alert("Senhas diferentes");
    else dadosPessoaisValidos();//perfil válido, e entrada bem sucedida
}
const finalizarCadastro = () => idadeId.value == "" || fanId.value == "" || inputlist.value == "" || checkData(idadeId) || checkData(fanId) ? alert("Existem campos obrigatórios vazios, preencha-los para continuar") : cadastrar();
function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(resposta => resposta.ok ? resposta.json().then(json => typeof json == 'string' ? cadastroError(json) : cadastroFeito()) : alert('Erro de cadastro'));
    return false;
}
const enterFunc = (event, num) => {
    if (event.key === "Enter") {
        event.preventDefault();
        num === 1 ? confirmProfile() : finalizarCadastro();
    }
}
function dadosPessoaisValidos() {
    cadastro1.style.display = "none";
    cadastro2.style.display = "block";
    inputlist.focus();
}
function emailInvalido() {
    alert("Email Inválido");
    emailId.value = "";
}
function senhaInvalida() {
    alert("Senha Inválida");
    passwordId.value = "";
    passwordIdConfirm.value = "";
}
function enterFuncMid(event, blur, focus) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
    }
}
function checkData(id) {
    if(id.value && Number(id.value) > 2021 || id.value && Number(id.value) < 1900){
        id.value = '';
        alert('Insira anos válidos');
    }
    return Number(id.value) > 2021 || Number(id.value) < 1900;
}
validatePassword(passwordId);
validateEmail(emailId);