const deleteData = () => {
    localStorage.removeItem("loginInfo");
    sessionStorage.removeItem("logins");
    sessionStorage.removeItem("loginTypeNick");
}