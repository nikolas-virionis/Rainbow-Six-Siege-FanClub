let readOnlyData = JSON.parse(sessionStorage.getItem("readOnlyData")) ?? true,
    confirmBtn = document.querySelector('#btnConfirm'), confirmSave, senhaValida;
nomeId.readOnly = readOnlyData;
nickId.readOnly = readOnlyData;
passwordId.readOnly = readOnlyData;
inputlist.readOnly = readOnlyData;
idadeId.readOnly = readOnlyData;
fanId.readOnly = readOnlyData;
emailId.value = sessionStorage.email;
if (readOnlyData) {
    nomeId.value = sessionStorage.nome ?? '*não declarado*';
    nickId.value = sessionStorage.username ?? '*não declarado*';
    passwordId.value = sessionStorage.senha ?? '*não declarado*';
    inputlist.value = sessionStorage.carro ?? '*não declarado*';
    idadeId.value = sessionStorage.anoNasc ?? '*não declarado*';
    fanId.value = sessionStorage.anoInicio ?? '*não declarado*';
    btnEdit.style.display = "flex";
    btnConfirm.style.display = "flex";
    btnCancel.style.display = "none";
    btnSave.style.display = "none";
}
else {
    nomeId.value = sessionStorage.nome ?? '';
    nickId.value = sessionStorage.username ?? '';
    passwordId.value = sessionStorage.senha ?? '';
    inputlist.value = sessionStorage.carro ?? '';
    idadeId.value = sessionStorage.anoNasc ?? '';
    fanId.value = sessionStorage.anoInicio ?? '';
    btnEdit.style.display = "none";
    btnConfirm.style.display = "none";
    btnCancel.style.display = "flex";
    btnSave.style.display = "flex";
}
const editarDados = () => {
    sessionStorage.setItem('readOnlyData', JSON.stringify(false));
    window.location.reload();
}
const voltarMenu = event => {
    event.preventDefault();
    window.location.href = "menuOptions.html";
}
const cancelarEdição = () => deixarReadOnly();
const salvarEdição = event => {
    event.preventDefault();
    if (idadeId.value == "" 
        || fanId.value == "" 
        || inputlist.value == "" 
        || passwordId.value == "" 
        || nomeId.value == "" 
        || nickId.value == "") alertCampoVazio();
    else if (!validatePassword(passwordId)) senhaInvalida();
    else {
        confirmSave = confirm('Tem certeza que deseja Salvar as Alterações?');
        if (confirmSave) {
            var formulario = new URLSearchParams(new FormData(form_update));
            fetch("/usuarios/atualizar", {
                method: "POST",
                body: formulario
            }).then(resposta => salvarInfo());
        }
    }
    return false;
}
function deixarReadOnly() {
    sessionStorage.removeItem('readOnlyData');
    window.location.reload();
}
function salvarInfo() {
    sessionStorage.username = nickId.value;
    sessionStorage.nome = nomeId.value;
    sessionStorage.carro = inputlist.value;
    sessionStorage.senha = passwordId.value;
    sessionStorage.anoNasc = idadeId.value;
    sessionStorage.anoInicio = fanId.value;
    deixarReadOnly();
}
function enterFuncMid(event, blur, focus) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
    }
}
const validatePassword = senha => {
    senhaComNum = senha.value.indexOf('0') >= 0 || senha.value.indexOf('1') >= 0 || senha.value.indexOf('2') >= 0 || senha.value.indexOf('3') >= 0 || senha.value.indexOf('4') >= 0 || senha.value.indexOf('5') >= 0 || senha.value.indexOf('6') >= 0 || senha.value.indexOf('7') >= 0 || senha.value.indexOf('8') >= 0 || senha.value.indexOf('9') >= 0
    senhaValida = senha.value.length >= 8 && senha.value.length <= 16 && senha.value !== senha.value.toLowerCase() && senhaComNum && !(senha.value.includes(' '));
    if (senha.value == "" || senhaValida) passwordId.classList = 'classCadastro';
    else passwordId.classList = 'classCadastroError';
    return senhaValida;
}
validatePassword(passwordId);