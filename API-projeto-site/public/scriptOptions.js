let confirmLogOut, arrayCarros = ['Cybertruck', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi'],
carroLinkComplete = ((sessionStorage.carro_usuario_meuapp).split(" ").join("")).toLowerCase();
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
h1Options.innerText = `Olá, ${sessionStorage.nome_usuario_meuapp}`
if (arrayCarros.includes(sessionStorage.carro_usuario_meuapp)) {
    linkTesla.href += `${carroLinkComplete}`;
    linkCarroTesla.href += `${carroLinkComplete}.html`;
}