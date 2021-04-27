let setInter, timer = 0;
leftsidebarButton.setAttribute('onclick', 'openNav();');
document.addEventListener('mousemove', () => {
    leftsidebarButton.style.opacity = "1";
    document.documentElement.style.cursor = 'auto';
    document.body.style.filter = "brightness(1)";
    clearInterval(setInter);
    timer = 0;
    leftsidebarButton.setAttribute('onclick', 'openNav();');
    setInter = setInterval(dimInterval, 1000);
})
const openNav = () => document.getElementById("myLeftSidenav").style.width = "25vw";
const closeNav = () => document.getElementById("myLeftSidenav").style.width = "0";
const dimInterval = () => {
    if (timer <= 10) timer++;
    else {
        leftsidebarButton.style.opacity = "0";
        leftsidebarButton.removeAttribute('onclick');
        document.body.style.filter = "brightness(0.5)";
        document.documentElement.style.cursor = 'none';
    }
}
setInter = setInterval(dimInterval, 1000);