let setInter, timer = 0, menuOpen = false, username_usuario,
  counter = 1, setIntervalVar, valorSelecionado, nome_usuario,
  header = document.querySelector('.header'),
  bodydiv = document.querySelector('.bodyDiv')
    ?? document.querySelector('.bodyDivMain')
    ?? document.querySelector('.bodyDivMotive'),
  logins = sessionStorage.getItem("logins") ?? '0',
  menu = document.querySelector(".menu-btn__burger"),
  leftNavBar = document.querySelector('.leftsidenav'),
  rbs = document.querySelectorAll('input[name="radio-btn"]');
const menuBtn = document.querySelector('.menu-btn');
const actionDone = () => {
  menu.style.opacity = "1";
  document.documentElement.style.cursor = 'auto';
  document.body.style.filter = "brightness(1)";
  clearInterval(setInter);
  timer = 0;
  setInter = setInterval(dimInterval, 1000);
}
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
const openNav = () => {
  leftNavBar.style.width = "25vw";
  menuOpen = true;
  funcSetInterval();
  clearInterval(setInter);
  menuBtn.classList.add('open');
  clearInterval(setInter);
  closeNavAlternative();
}
const radioChange = num => {
  counter = num;
  funcSetInterval();
}
const funcSetInterval = () => {
  clearInterval(setIntervalVar);
  setIntervalVar = setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    if (counter >= 4) counter = 0;
    counter++;
  }, 8000);
}
const closeNavAlternative = () => {
  document.addEventListener('click', e => {
    try {
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
    catch (e) { }
  }
  )
}
const closeNav = () => {
  document.getElementById("myLeftSidenav").style.width = "0";
  menuOpen = false;
  clearInterval(setInter);
  setInter = setInterval(dimInterval, 1000);
  menuBtn.classList.remove('open');
}
if (logins === '1' || document.title[document.title.length - 1] == 's') {
  loginLink.style.display = "none";
  loginId.style.display = "none";
  menuOptions.style.display = "block"
}
else {
  loginLink.style.display = "block";
  loginId.style.display = "block";
  menuOptions.style.display = "none"
}
document.addEventListener('mousemove', () => actionDone());
document.addEventListener('keypress', () => actionDone());
setInter = setInterval(dimInterval, 1000);
menuBtn.addEventListener('click', () => menuOpen ? closeNav() : openNav());