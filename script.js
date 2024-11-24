

//JS CODE FOR ALL PAGES
//Function to check if the user is logged in or not

function checkUserLoggedIn(redirect = false) {
    const isLoggedIn = localStorage.getItem('authToken'); // Double negation to return a boolean
    if (!isLoggedIn ) {
        window.location.href = 'login.html';
    }
    if(isLoggedIn.length > 0) return true;
    return false;
}

function checkSession() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        alert('Session expired. Please log in again.');
        window.location.href = 'login.html'; // Redirect to login
        return null;
    }
    return username;
}

/*// Helper function to make POST requests
async function postRequest(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}
*/

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




//HOME PAGE SECTION

//Code for Progress Bars 

// Data for each progress bar
const progressData = [
    { containerId: 'progressBar1', color: 'bg-instagram', width: '25%', label: '25%' },
    { containerId: 'progressBar2', color: 'bg-tiktok', width: '50%', label: '50%' },
    { containerId: 'progressBar3', color: 'bg-snapchat', width: '75%', label: '75%' },
    { containerId: 'progressBar4', color: 'bg-youtube', width: '100%', label: '100%' },
    { containerId: 'progressBar5', color: 'bg-ig-status', width: '30%', label: '30%' },
    { containerId: 'progressBar6', color: 'bg-tt-status', width: '30%', label: '30%' },
    { containerId: 'progressBar7', color: 'bg-sc-status', width: '30%', label: '30%' },
    { containerId: 'progressBar8', color: 'bg-yt-status', width: '30%', label: '30%' }
];

// Function to generate the progress bars

checkUserLoggedIn() && progressData.forEach(data => {
    const progressBar = document.createElement('div');
    progressBar.className = `progress-bar ${data.color}`;
    progressBar.style.width = data.width;
    progressBar.textContent = data.label;

    const container = document.getElementById(data.containerId);
    container.appendChild(progressBar);
});

// Hide or Show Badges and Progress Bars
function manageVisibility() {
    const isLoggedIn = checkUserLoggedIn();

    // Progress Bars
    const progressBars = document.querySelectorAll('.progress-container');
    progressBars.forEach(bar => {
        bar.style.display = isLoggedIn ? 'block' : 'none';
    });

    // Badges
    const badgesContainer = document.getElementById('badges');
    badgesContainer.style.display = isLoggedIn ? 'block' : 'none';
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', manageVisibility);



/*// Code for Card 1 Upload section

// Function to toggle dropdown visibility with slide effect
function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('show');
}

// Function to select folder type and close the dropdown
function selectFolderType(element, type) {
    const selectedTypeDisplay = element.closest('.card').querySelector('#selectedType');
    selectedTypeDisplay.innerText = "Selected Folder Type: " + type;
    element.closest('.dropdown-content').classList.remove('show');
}

async function uploadFolder(button) {
    const card = button.closest('.card');
    const folderInput = card.querySelector('#folderUpload');
    const selectedTypeDisplay = card.querySelector('#selectedType').innerText;

    // Get the selected folder type
    const folderType = selectedTypeDisplay.replace("Selected Folder Type: ", "");
    if (!folderInput.files.length) {
        alert("Please select a folder.");
        return;
    }
    if (folderType === "No folder type selected") {
        alert("Please select a folder type before uploading.");
        return;
    }

    // Get the folder name from the first file's path
    const folderName = folderInput.files[0].webkitRelativePath.split('/')[0];

    // Create a FormData object
    const formData = new FormData();
    formData.append("folder_name", folderName);
    formData.append("folder_type", folderType);

    // Append all files in the folder
    for (const file of folderInput.files) {
        formData.append("files", file);
    }

    // Include the JWT token if applicable
    const token = localStorage.getItem("authToken"); // Ensure the token is stored after login

    try {
        const response = await fetch("http://3.12.198.71:5000", {
            method: "POST",
            headers: {
                "Authorization": token || "", // Add token for authentication
            },
            body: formData, // Send folder data
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message || "Folder uploaded successfully!");
        } else {
            alert(result.error || "Failed to upload folder.");
        }
    } catch (error) {
        console.error("Error uploading folder:", error);
        alert("An unexpected error occurred while uploading the folder.");
    }
}*/
/*
// Helper: Function to select folder type
function selectFolderType(element, type) {
    const selectedTypeDisplay = element.closest('.card').querySelector('#selectedType');
    selectedTypeDisplay.innerText = "Selected Folder Type: " + type;
    element.closest('.dropdown-content').classList.remove('show');
}



// Function to handle folder upload
function uploadFolder(button) {
    const card = button.closest('.card');
    const folderInput = card.querySelector('#folderUpload');
    const folderNameDisplay = card.querySelector('#folderName');
    const selectedTypeDisplay = card.querySelector('#selectedType').innerText;

    const fileList = folderInput.files;
    const folderName = fileList.length > 0 ? fileList[0].webkitRelativePath.split('/')[0] : 'No folder selected';
    folderNameDisplay.innerText = folderName;

    if (selectedTypeDisplay === "No folder type selected") {
        alert('Please select a folder type before uploading.');
    } else if (folderName === 'No folder selected') {
        alert('Please select a folder before uploading.');
    } else {
        alert(`Folder Name: ${folderName}\n${selectedTypeDisplay}`);
        // Additional folder upload logic can go here
    }
}*/






//ABOUT PAGE SECTION

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Feedback submitted successfully!');
    this.reset();
});





//LOGIN PAGE SECTION

//document.getElementById('loginForm').addEventListener('submit', function(e) {
//    e.preventDefault();
//    alert('Login functionality to be implemented');
//});

/*
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
    }*/

    /*// Login form handling
    function login(event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const errorMessage = document.getElementById("loginErrorMessage");

        if (!validateEmail(email)) {
            errorMessage.innerText = "Please enter a valid email address.";
            return;
        }

        if (password.length < 6) {
            errorMessage.innerText = "Password must be at least 6 characters long.";
            return;
        }

        errorMessage.innerText = "";
        alert("Login successful for: " + email);
    }*/

    /*// Forgot Password form handling
    function recoverPassword(event) {
        event.preventDefault();
        const email = document.getElementById("passwordEmail").value;
        const message = document.getElementById("passwordMessage");

        if (validateEmail(email)) {
            message.innerText = "Password reset link has been sent to " + email;
            message.style.color = "green";
        } else {
            message.innerText = "Please enter a valid email address.";
            message.style.color = "red";
        }
    }

    // Forgot Username form handling
    function recoverUsername(event) {
        event.preventDefault();
        const email = document.getElementById("usernameEmail").value;
        const message = document.getElementById("usernameMessage");

        if (validateEmail(email)) {
            message.innerText = "Your username has been sent to " + email;
            message.style.color = "green";
        } else {
            message.innerText = "Please enter a valid email address.";
            message.style.color = "red";
        }
    }*/

    // Email validation function
    //function validateEmail(email) {
    //    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //    return regex.test(email);
    //}






//SIGNUP PAGE SECTION





/*
//Connection to AWS
// scripts/config.js
const API_CONFIG = {
    BASE_URL: 'http://ec2-3-12-198-71.us-east-2.compute.amazonaws.com:3000',
    SECRET_KEY: 'DrexelProject'
};

// scripts/app.js
async function testBackendConnection() {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_CONFIG.SECRET_KEY
            }
        });
        const data = await response.json();
        console.log('Backend Connection:', data);
    } catch (error) {
        console.error('Connection Failed:', error);
    }
}

// Example data fetching function
async function fetchUserData() {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/api/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_CONFIG.SECRET_KEY
            }
        });
        const userData = await response.json();
        displayUserData(userData);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

function displayUserData(userData) {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = userData.map(user => 
        `<div>${user.name}</div>`
    ).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    testBackendConnection();
    fetchUserData();
});
*/





/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

//Login code
const API_URL = 'http://3.12.198.71:5000'; // Replace with your EC2 public IP

// Manage session state
document.addEventListener('DOMContentLoaded', () => {
    manageSessionState();
});
function manageSessionState() {
    const logoutButton = document.getElementById('logoutButton');
    const username = localStorage.getItem('username');
    if (username !== "") {
        logoutButton.style.display = 'inline-block'; // Show logout button
    } else {
        logoutButton.style.display = 'none'; // Hide logout button
    }
}

console.log('In Login code');
// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch(`${API_URL}/login`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json',},
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//             // Store username in sessionStorage
//             localStorage.setItem('username', username);
//             const sUsername = localStorage.getItem('username');
//             alert('This is Username:',sUsername);
//             //alert('Login successful!');
//             window.location.href = 'index.html'; // Redirect on success
//         } else {
//             document.getElementById('loginErrorMessage').innerText = data.error || 'Invalid credentials.';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('loginErrorMessage').innerText = 'An error occurred.';
//     }
// });

async function onSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // Store username in sessionStorage
            localStorage.setItem('username', username);
            const sUsername = localStorage.getItem('username');
            alert('This is Username:', sUsername);
            // Redirect on success
            window.location.href = 'index.html'; // Redirect on success
        } else {
            document.getElementById('loginErrorMessage').innerText = data.error || 'Invalid credentials.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginErrorMessage').innerText = 'An error occurred.';
    }
}

      
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
    
    //sessionStorage.removeItem('username');
    // Notify server about logout (optional)
    fetch(`${API_URL}/logout`, {
        method: 'POST',
    }).catch(err => console.error('Logout error:', err));
    localStorage.removeItem('username');
    // Redirect to login page
    alert('You have logged out');
    window.location.href = 'login.html';
}
        