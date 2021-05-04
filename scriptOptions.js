let confirmLogOut;
menuOptions.style.display = "none";
historyTab.style.marginTop = "12.5vh";
const btnOptions = link => {
    window.location.href = link;
}
const logOut = () => {
    confirmLogOut = confirm('Tem certeza que deseja fazer log out?');
    if (confirmLogOut) {
        sessionStorage.removeItem('logins');
        window.location.href = "login.html";
    }
}
h1Options.innerText = `Olá, ${loginInfo[loginInfo.length-1].nome}`