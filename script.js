let setInter, timer = 0, menu = document.querySelector(".menu-btn"), counter = 1, leftNavBar = document.querySelector('.leftsidenav'), setIntervalVar, valorSelecionado, rbs = document.querySelectorAll('input[name="radio-btn"]');
document.addEventListener('mousemove', () => {
    menu.style.opacity = "1";
    document.documentElement.style.cursor = 'auto';
    document.body.style.filter = "brightness(1)";
    clearInterval(setInter);
    timer = 0;
    setInter = setInterval(dimInterval, 1000);
})
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
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    leftNavBar.style.width = "25vw";
    menuOpen = true;
    funcSetInterval();
    clearInterval(setInter);
    menuBtn.classList.add('open');
    clearInterval(setInter);
  } 
  else {
    document.getElementById("myLeftSidenav").style.width = "0";
    menuOpen = false;
    clearInterval(setInter);
    setInter = setInterval(dimInterval, 1000);
    menuBtn.classList.remove('open');
}
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
cadastroLink.style.display = "block";