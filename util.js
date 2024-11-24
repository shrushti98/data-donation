//Function to check if the user is logged in or not

function checkUserLoggedIn(redirect = false) {
    const isLoggedIn = !!localStorage.getItem('authToken'); // Double negation to return a boolean
    if (!isLoggedIn && redirect) {
        window.location.href = 'login.html';
    }
    return isLoggedIn;
}
export{checkUserLoggedIn};


//Code for Dark mode Toggle
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}
export{darkMode};
export{lightMode};


function checkSession() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        alert('Session expired. Please log in again.');
        window.location.href = 'login.html'; // Redirect to login
        return null;
    }
    return username;
}
export{checkSession};

// Helper function to make POST requests
async function postRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}
export{postRequest};
/*
function isUserLoggedIn() {
    if (!localStorage.getItem('authToken')) {
        return false; // User is not logged in
    }
    return true; // User is logged in
}
export{isUserLoggedIn};
*/


//Consolidating Both Use Cases
//If you want to handle both scenarios within a single reusable function, you can add an optional redirect behavior:
/*function checkUserLoggedIn(redirect = false) {
    if (!localStorage.getItem('authToken')) {
        if (redirect) {
            window.location.href = 'login.html';
        }
        return false; // Not logged in
    }
    return true; // Logged in
}

//Show Content Conditionally:
if (checkUserLoggedIn()) {
    document.getElementById('protectedSection').style.display = 'block';
} else {
    document.getElementById('protectedSection').style.display = 'none';
}

//Redirect if Not Logged In:
checkUserLoggedIn(true); // Redirects if not logged in
*/