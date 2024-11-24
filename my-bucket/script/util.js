function isUserLoggedIn() {
    if (!localStorage.getItem('authToken')) {
        return false; // User is not logged in
    }
    return true; // User is logged in
}
export{isUserLoggedIn};