let setInter, timer = 0, menu = document.querySelector(".menu-btn"), counter = 1, setIntervalVar, valorSelecionado, rbs = document.querySelectorAll('input[name="radio-btn"]');
document.addEventListener('mousemove', () => {
    menu.style.opacity = "1";
    document.documentElement.style.cursor = 'auto';
    document.body.style.filter = "brightness(1)";
    clearInterval(setInter);
    timer = 0;
    setInter = setInterval(dimInterval, 1000);
})
const dimInterval = () => {
    if (timer < 30) timer++;
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
    menuBtn.classList.add('open');
    document.getElementById("myLeftSidenav").style.width = "25vw";
    menuOpen = true;
    funcSetInterval();
  } 
  else {
    menuBtn.classList.remove('open');
    document.getElementById("myLeftSidenav").style.width = "0";
    menuOpen = false;
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
}, 10000);
}