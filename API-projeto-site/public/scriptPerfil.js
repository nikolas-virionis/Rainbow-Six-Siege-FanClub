let readOnlyData = JSON.parse(sessionStorage.getItem("readOnlyData")) ?? true, confirmBtn = document.querySelector('#btnConfirm'), confirmSave, emailValido, senhaValida;
nomeId.readOnly = readOnlyData;
nickId.readOnly = readOnlyData;
emailId.readOnly = readOnlyData;
passwordId.readOnly = readOnlyData;
inputlist.readOnly = readOnlyData;
idadeId.readOnly = readOnlyData;
fanId.readOnly = readOnlyData;
if (readOnlyData) {
    nomeId.value = loginInfo[loginInfo.length-1].nome ?? '*não declarado*';
    nickId.value = loginInfo[loginInfo.length-1].username ?? '*não declarado*';
    emailId.value = loginInfo[loginInfo.length-1].email ?? '*não declarado*';
    passwordId.value = loginInfo[loginInfo.length-1].senha ?? '*não declarado*';
    inputlist.value = loginInfo[loginInfo.length-1].favCarro ?? '*não declarado*';
    idadeId.value = loginInfo[loginInfo.length-1].idade ?? '*não declarado*';
    fanId.value = loginInfo[loginInfo.length-1].anoFan ?? '*não declarado*';    
    btnEdit.style.display = "flex";
    btnConfirm.style.display = "flex";
    btnCancel.style.display = "none";
    btnSave.style.display = "none";
} 
else {
    nomeId.value = loginInfo[loginInfo.length-1].nome ?? '';
    nickId.value = loginInfo[loginInfo.length-1].username ?? '';
    emailId.value = loginInfo[loginInfo.length-1].email ?? '';
    passwordId.value = loginInfo[loginInfo.length-1].senha ?? '';
    inputlist.value = loginInfo[loginInfo.length-1].favCarro ?? '';
    idadeId.value = loginInfo[loginInfo.length-1].idade ?? '';
    fanId.value = loginInfo[loginInfo.length-1].anoFan ?? '';    
    btnEdit.style.display = "none";
    btnConfirm.style.display = "none";
    btnCancel.style.display = "flex";
    btnSave.style.display = "flex";
}
const editarDados = () => {
    sessionStorage.setItem('readOnlyData', JSON.stringify(false));
    window.location.reload();
}
const voltarMenu = (event) => {
    event.preventDefault();
    window.location.href = "menuOptions.html";
}
const cancelarEdição = () => {
    sessionStorage.removeItem('readOnlyData');
    window.location.reload();
}
const salvarEdição = (event) => {
        event.preventDefault();
    if (idadeId.value == "" || fanId.value == "" || inputlist.value == "" || emailId.value == "" || passwordId.value == "" || nomeId.value == "" || nickId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (!validateEmail(emailId)) alert("Email Inválido");
    else if (!validatePassword(passwordId)) alert("Senha Inválida");
    else{
        confirmSave = confirm('Tem certeza que deseja Salvar as Alterações?');
        if (confirmSave) {
            sessionStorage.removeItem('readOnlyData');
            loginInfo[loginInfo.length-1].nome = nomeId.value;
            loginInfo[loginInfo.length-1].username = nickId.value;
            loginInfo[loginInfo.length-1].email = emailId.value;
            loginInfo[loginInfo.length-1].senha = passwordId.value;
            loginInfo[loginInfo.length-1].idade = idadeId.value;
            loginInfo[loginInfo.length-1].favCarro = inputlist.value;
            loginInfo[loginInfo.length-1].anoFan = fanId.value;
            localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
            window.location.reload();
        }
    }
}
function prevent(event) {
    event.preventDefault();
}
function enterFuncMid(event, blur, focus) {
    if(event.key === "Enter"){
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
        prevent(event);
    }
}
const validateEmail = email => {
    emailValido = email.value.indexOf('@') >= 0 && email.value.indexOf('@') === email.value.lastIndexOf('@') && email.value.indexOf('.') >= 0 && email.value.lastIndexOf('.') !== email.value.length-1 && email.value.lastIndexOf('@') !== email.value.length-1 && !(email.value.includes(' ')) && email.value.length > 15;
    if (email.value == "" || emailValido) emailId.classList = 'classCadastro';
    else emailId.classList = 'classCadastroError';
    return emailValido;
}
const validatePassword = senha => {
    senhaComNum = senha.value.indexOf('0') >= 0 || senha.value.indexOf('1') >= 0 || senha.value.indexOf('2') >= 0|| senha.value.indexOf('3') >= 0|| senha.value.indexOf('4') >= 0|| senha.value.indexOf('5') >= 0|| senha.value.indexOf('6') >= 0|| senha.value.indexOf('7') >= 0|| senha.value.indexOf('8') >= 0|| senha.value.indexOf('9') >= 0
    senhaValida = senha.value.length >= 8 && senha.value.length <= 16 && senha.value !== senha.value.toLowerCase() && senhaComNum && !(senha.value.includes(' '));
    if (senha.value == "" || senhaValida) passwordId.classList = 'classCadastro';
    else passwordId.classList = 'classCadastroError';
    return senhaValida;
}
verificar_autenticacao();