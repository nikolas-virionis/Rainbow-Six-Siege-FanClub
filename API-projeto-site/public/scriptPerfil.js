let readOnlyData = JSON.parse(sessionStorage.getItem("readOnlyData")) ?? true, confirmBtn = document.querySelector('#btnConfirm'), confirmSave, senhaValida;
nomeId.readOnly = readOnlyData;
nickId.readOnly = readOnlyData;
passwordId.readOnly = readOnlyData;
inputlist.readOnly = readOnlyData;
idadeId.readOnly = readOnlyData;
fanId.readOnly = readOnlyData;
emailId.value = sessionStorage.email_usuario_meuapp;
if (readOnlyData) {
    nomeId.value = sessionStorage.nome_usuario_meuapp ?? '*não declarado*';
    nickId.value = sessionStorage.username_usuario_meuapp ?? '*não declarado*';
    passwordId.value = sessionStorage.senha_usuario_meuapp ?? '*não declarado*';
    inputlist.value = sessionStorage.carro_usuario_meuapp ?? '*não declarado*';
    idadeId.value = sessionStorage.anoNasc_usuario_meuapp ?? '*não declarado*';
    fanId.value = sessionStorage.anoInicio_usuario_meuapp ?? '*não declarado*';    
    btnEdit.style.display = "flex";
    btnConfirm.style.display = "flex";
    btnCancel.style.display = "none";
    btnSave.style.display = "none";
} 
else {
    nomeId.value = sessionStorage.nome_usuario_meuapp ?? '';
    nickId.value = sessionStorage.username_usuario_meuapp ?? '';
    passwordId.value = sessionStorage.senha_usuario_meuapp ?? '';
    inputlist.value = sessionStorage.carro_usuario_meuapp ?? '';
    idadeId.value = sessionStorage.anoNasc_usuario_meuapp ?? '';
    fanId.value = sessionStorage.anoInicio_usuario_meuapp ?? '';    
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
    if (idadeId.value == "" || fanId.value == "" || inputlist.value == "" || passwordId.value == "" || nomeId.value == "" || nickId.value == "") alert("Existem campos obrigatórios vazios, preencha-los para continuar");
    else if (!validatePassword(passwordId)) alert("Senha Inválida");
    else{
        confirmSave = confirm('Tem certeza que deseja Salvar as Alterações?');
        if (confirmSave) {
            var formulario = new URLSearchParams(new FormData(form_update));
            fetch("/usuarios/atualizar", {
                method: "POST",
                body: formulario
            }).then(resposta => {
                if (resposta.ok) {
                    resposta.json().then(json => {
                        sessionStorage.username_usuario_meuapp = json.username;
                            sessionStorage.nome_usuario_meuapp = json.nome;
                            sessionStorage.carro_usuario_meuapp = json.carroFav;
                            sessionStorage.email_usuario_meuapp = json.email;
                            sessionStorage.senha_usuario_meuapp = json.senha;
                            sessionStorage.anoNasc_usuario_meuapp = json.anoNasc;
                            sessionStorage.anoInicio_usuario_meuapp = json.anoInicio;
                            sessionStorage.removeItem('readOnlyData');
                            window.location.reload();
                });
        } else {
            alert('Erro de cadastro');
            console.log("ERRO DE CADASTRO");
        }
    });
    }
    }
return false;
}
const prevent = event => event.preventDefault();
function enterFuncMid(event, blur, focus) {
    if(event.key === "Enter"){
        document.getElementById(blur).blur();
        document.getElementById(focus).focus();
        prevent(event);
    }
}
const validatePassword = senha => {
    senhaComNum = senha.value.indexOf('0') >= 0 || senha.value.indexOf('1') >= 0 || senha.value.indexOf('2') >= 0|| senha.value.indexOf('3') >= 0|| senha.value.indexOf('4') >= 0|| senha.value.indexOf('5') >= 0|| senha.value.indexOf('6') >= 0|| senha.value.indexOf('7') >= 0|| senha.value.indexOf('8') >= 0|| senha.value.indexOf('9') >= 0
    senhaValida = senha.value.length >= 8 && senha.value.length <= 16 && senha.value !== senha.value.toLowerCase() && senhaComNum && !(senha.value.includes(' '));
    if (senha.value == "" || senhaValida) passwordId.classList = 'classCadastro';
    else passwordId.classList = 'classCadastroError';
    return senhaValida;
}