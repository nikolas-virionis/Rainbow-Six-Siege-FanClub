let confirmLogOut, arrayCarros = ['CyberTruck', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi'];
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
if (arrayCarros.includes(loginInfo[loginInfo.length-1].favCarro)) {
    linkTesla.href += `${((loginInfo[loginInfo.length-1].favCarro).split(" ").join("")).toLowerCase()}`;
}
verificar_autenticacao();