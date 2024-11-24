alert('In scripts javasript file');

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

alert('In login code');
//Login code
const API_URL = 'http://3.12.198.71:5000'; // Replace with your EC2 public IP
alert('In login code');
// Manage session state
document.addEventListener('DOMContentLoaded', () => {
    manageSessionState();
});
function manageSessionState() {
    const logoutButton = document.getElementById('logoutButton');
    const username = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (username) {
        logoutButton.style.display = 'inline-block'; // Show logout button
    } else {
        logoutButton.style.display = 'none'; // Hide logout button
    }
}


document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Store username in sessionStorage
            sessionStorage.setItem('username', username);
            //const sUsername = sessionStorage.getItem('username');
            //alert('This is Username:',sUsername);
            //alert('Login successful!');
            window.location.href = 'index.html'; // Redirect on success
        } else {
            document.getElementById('loginErrorMessage').innerText = data.error || 'Invalid credentials.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginErrorMessage').innerText = 'An error occurred.';
    }
});

      
// Toggle between forms
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("forgotUsernameForm").style.display = "none";
    document.getElementById("formTitle").innerText = "Login";
}

function showForgotPassword() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
    document.getElementById("forgotUsernameForm").style.display = "none";
    document.getElementById("formTitle").innerText = "Forgot Password";
}

function showForgotUsername() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("forgotUsernameForm").style.display = "block";
    document.getElementById("formTitle").innerText = "Forgot Username";
}

// Forgot Password
document.getElementById('forgotPasswordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value;
    //alert('Hey is it working!');
    try {
        const response = await fetch(`${API_URL}/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        //alert('entered forgot email code!');
        const data = await response.json();
        if (response.ok) {
            alert('One-Time-Password sent to your email.');
            window.location.href='resetpassword.html';
            alert("If the email exists in our records, we’ve sent you a one-time password to reset your Password. If you don’t see the email, check your spam or junk folder.");
        } else {
            document.getElementById('forgotPasswordMessage').innerText = data.error || 'Error occurred.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('forgotPasswordMessage').innerText = 'An error occurred.';
    }
});

// Forgot Username
document.getElementById('forgotUsernameForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('forgotUsernameEmail').value;

    try {
        const response = await fetch(`${API_URL}/forgot-username`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
            //alert('One-Time-Password sent to your email.');
            window.location.href='resetusername.html';
            alert("If the email exists in our records, we’ve sent you a one-time password to reset your Username. If you don’t see the email, check your spam or junk folder.");
        } else {
            document.getElementById('forgotUsernameMessage').innerText = data.error || 'Error occurred.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('forgotUsernameMessage').innerText = 'An error occurred.';
    }
});

   
// Logout functionality
function logout() {
    // Clear username from localStorage and sessionStorage
    localStorage.removeItem('username');
    sessionStorage.removeItem('username');
    // Notify server about logout (optional)
    fetch(`${API_URL}/logout`, {
        method: 'POST',
    }).catch(err => console.error('Logout error:', err));
    // Redirect to login page
    alert('You have logged out');
    window.location.href = 'login.html';
}
        