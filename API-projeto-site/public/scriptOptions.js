let confirmLogOut, arrayCarros = ['Cybertruck', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi'];
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
h1Options.innerText = `Olá, ${sessionStorage.username_usuario_meuapp}`
if (arrayCarros.includes(sessionStorage.carro_usuario_meuapp)) {
    linkTesla.href += `${((sessionStorage.carro_usuario_meuapp).split(" ").join("")).toLowerCase()}`;
    linkCarroTesla.href += `${((sessionStorage.carro_usuario_meuapp).split(" ").join("")).toLowerCase()}.html`;
}