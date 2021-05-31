let confirmLogOut, 
arrayCarros = ['Cybertruck', 'Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster', 'Semi'],
carroLinkComplete = ((sessionStorage.carro).split(" ").join("")).toLowerCase();
sideNavHandle(menuOptions);
const btnOptions = link => window.location.href = link;
const logOut = () => {
    confirmLogOut = confirm('Tem certeza que deseja fazer log out?');
    if (confirmLogOut) {
        sessionStorage.removeItem('logins');
        window.location.href = "login.html";
    }
}
h1Options.innerText = `Olá, ${sessionStorage.nome}`
if (arrayCarros.includes(sessionStorage.carro)) {
    linkTesla.href = `https://www.tesla.com/${carroLinkComplete}`;
    linkCarroTesla.href = `${carroLinkComplete}.html`;
}