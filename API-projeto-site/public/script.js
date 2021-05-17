let setInter, 
timer = 0, 
header = document.querySelector('.header'), 
bodydiv = document.querySelector('.bodyDiv') ?? document.querySelector('.bodyDivMain') ?? document.querySelector('.bodyDivMotive'), 
menuOpen = false, 
logins = sessionStorage.getItem("logins") ?? '0', 
menu = document.querySelector(".menu-btn__burger"), 
counter = 1, 
leftNavBar = document.querySelector('.leftsidenav'), 
setIntervalVar, 
valorSelecionado, 
username_usuario, 
nome_usuario
rbs = document.querySelectorAll('input[name="radio-btn"]');
if (logins === '1') {
  loginLink.style.display = "none";
  loginId.style.display = "none";
  menuOptions.style.display = "block"
}
else{
  loginLink.style.display = "block";
  loginId.style.display = "block";
  menuOptions.style.display = "none"
}
const actionDone = () => {
    menu.style.opacity = "1";
    document.documentElement.style.cursor = 'auto';
    document.body.style.filter = "brightness(1)";
    clearInterval(setInter);
    timer = 0;
    setInter = setInterval(dimInterval, 1000);
}
document.addEventListener('mousemove', () => actionDone())
document.addEventListener('keypress', () => actionDone())
const dimInterval = () => {
    if (menuOpen === true) {
      menu.style.opacity = "1";
      document.body.style.filter = "brightness(1)";
      document.documentElement.style.cursor = 'auto';
      return;
    }
    if (timer < 34) timer++;
    else {
        menu.style.opacity = "0";
        document.body.style.filter = "brightness(0.75)";
        document.documentElement.style.cursor = 'none';
    }
}
setInter = setInterval(dimInterval, 1000);
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    leftNavBar.style.width = "25vw";
    menuOpen = true;
    funcSetInterval();
    clearInterval(setInter);
    menuBtn.classList.add('open');
    clearInterval(setInter);
    closeNavAlternative();
  } 
  else closeNav();
});
const radioChange = num => {
  counter = num;
  funcSetInterval();
}
const funcSetInterval = () => {
  clearInterval(setIntervalVar);
  setIntervalVar = setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  if(counter >= 4) counter = 0;
  counter++;
}, 8000);
}
const closeNavAlternative = () => {
  document.addEventListener('click', (e) => {
try{
  if (e.target === header || 
      e.target === header.lastElementChild || 
      e.target === bodydiv || 
      e.target === bodydiv.firstElementChild || 
      e.target === bodydiv.firstElementChild.nextElementSibling || 
      e.target === bodydiv.firstElementChild.nextElementSibling.nextElementSibling || 
      e.target === bodydiv.lastElementChild || 
      e.target === bodydiv.lastElementChild.previousElementSibling || 
      e.target === bodydiv.firstElementChild.nextElementSibling.firstElementChild || 
      e.target === bodydiv.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild || 
      e.target === bodydiv.lastElementChild.firstElementChild || 
      e.target === bodydiv.lastElementChild.previousElementSibling.firstElementChild || 
      e.target === bodydiv.firstElementChild.nextElementSibling.lastElementChild || 
      e.target === bodydiv.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild || 
      e.target === bodydiv.lastElementChild.lastElementChild || 
      e.target === bodydiv.lastElementChild.previousElementSibling.lastElementChild) closeNav();
  }
  catch(e){

  }
}
)}
const closeNav = () => {
  document.getElementById("myLeftSidenav").style.width = "0";
  menuOpen = false;
  clearInterval(setInter);
  setInter = setInterval(dimInterval, 1000);
  menuBtn.classList.remove('open');
}
const redirecionar_login = () => window.location.href = 'login.html';

function verificar_autenticacao() {
    username_usuario = sessionStorage.username_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (!username_usuario)  {
        redirecionar_login();
    } else {
        h1Options.innerHTML = nome_usuario;
        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${username_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${username_usuario}`, {cache:'no-store'}); 
}