//JS CODE FOR ALL PAGES
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
progressData.forEach(data => {
    const progressBar = document.createElement('div');
    progressBar.className = `progress-bar ${data.color}`;
    progressBar.style.width = data.width;
    progressBar.textContent = data.label;

    const container = document.getElementById(data.containerId);
    container.appendChild(progressBar);
});


// Code for Card 1 Upload section

// Function to toggle dropdown visibility with slide effect
function toggleDropdown(button) {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('show');
}

// Function to select file type and close the dropdown
function selectFileType(element, type) {
    const selectedTypeDisplay = element.closest('.card').querySelector('.selectedType');
    selectedTypeDisplay.innerText = "Selected File Type: " + type;
    element.closest('.dropdown-content').classList.remove('show');
}

// Function to handle file upload
function uploadFile(button) {
    const card = button.closest('.card');
    const fileInput = card.querySelector('.fileUpload');
    const fileNameDisplay = card.querySelector('.fileName');
    const selectedTypeDisplay = card.querySelector('.selectedType').innerText;

    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';
    fileNameDisplay.innerText = fileName;

    if (selectedTypeDisplay === "No file type selected") {
        alert('Please select a file type before uploading.');
    } else if (fileName === 'No file selected') {
        alert('Please select a file before uploading.');
    } else {
        alert(`File Name: ${fileName}\n${selectedTypeDisplay}`);
        // Additional file upload logic can go here
    }
}

/*let instagramSelectedFileType = ''; // Variable to store the instagram selected file type
let tiktokSelectedFileType = ''; // Variable to store the tiktok selected file type
let snapchatSelectedFileType = ''; // Variable to store the snapchat selected file type
let youtubeSelectedFileType = ''; // Variable to store the youttube selected file type

const instagramDropdownContent = document.getElementById('instagramDropdownContent');
const tiktokDropdownContent = document.getElementById('tiktokDropdownContent');
const snapchatDropdownContent = document.getElementById('snapchatDropdownContent');
const youtubeDropdownContent = document.getElementById('youtubeDropdownContent');

// INSTAGRAM Function to toggle the dropdown visibility with sliding effect
function instagramToggleDropdown() {
    instagramDropdownContent.classList.toggle('show');
//    if (instagramDropdownContent.classList.contains('show')) {
//        instagramDropdownContent.classList.remove('show');
//    } else {
//        instagramDropdownContent.classList.add('show');
//    }
}
// Function to handle file type selection
function instagramSelectedFileType(type) {
    instagramSelectedFileType = type;
    document.getElementById('selectedType').innerText = "Selected File Type: " + instagramSelectedFileType;
    instagramToggleDropdown(); // Slide up (close) the dropdown after selecting an option

}
// Function to upload file (currently just logs the details)
function instagramUploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';
    document.getElementById('fileName').innerText = fileName;

    // Log the selected file and file type
    if (instagramSelectedFileType === '') {
        alert('Please select a file type before uploading.');
    } else if (fileName === 'No file selected') {
        alert('Please select a file before uploading.');
    } else {
        alert(`File Name: ${fileName}\nFile Type: ${instagramSelectedFileType}\nFile Uploaded Successfully!`);
        // Code to handle file upload can be added here
    }
}

// TIKTOK Function to toggle the dropdown visibility with sliding effect
function tiktokToggleDropdown() {
    if (tiktokDropdownContent.classList.contains('show')) {
        tiktokDropdownContent.classList.remove('show');
    } else {
        tiktokDropdownContent.classList.add('show');
    }
}
// Function to handle file type selection
function tiktokSelectFileType(type) {
    tiktokSelectedFileType = type;
    document.getElementById('selectedType').innerText = "Selected File Type: " + tiktokSelectedFileType;
    tiktokToggleDropdown(); // Slide up (close) the dropdown after selecting an option
}
// Function to upload file (currently just logs the details)
function tiktokUploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';
    document.getElementById('fileName').innerText = fileName;

    // Log the selected file and file type
    if (tiktokSelectedFileType === '') {
        alert('Please select a file type before uploading.');
    } else if (fileName === 'No file selected') {
        alert('Please select a file before uploading.');
    } else {
        alert(`File Name: ${fileName}\nFile Type: ${tiktokSelectedFileType}\nFile Uploaded Successfully!`);
        // Code to handle file upload can be added here
    }
}


// SNAPCHAT Function to toggle the dropdown visibility with sliding effect
function snapchatToggleDropdown() {
    if (snapchatDropdownContent.classList.contains('show')) {
        snapchatDropdownContent.classList.remove('show');
    } else {
        snapchatDropdownContent.classList.add('show');
    }
}
// Function to handle file type selection
function snapchatSelectedFileType(type) {
    snapchatSelectedFileType = type;
    document.getElementById('selectedType').innerText = "Selected File Type: " + snapchatSelectedFileType;
    snapchatToggleDropdown(); // Slide up (close) the dropdown after selecting an option

}
// Function to upload file (currently just logs the details)
function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';
    document.getElementById('fileName').innerText = fileName;

    // Log the selected file and file type
    if (snapchatSelectedFileType === '') {
        alert('Please select a file type before uploading.');
    } else if (fileName === 'No file selected') {
        alert('Please select a file before uploading.');
    } else {
        alert(`File Name: ${fileName}\nFile Type: ${snapchatSelectedFileType}\nFile Uploaded Successfully!`);
        // Code to handle file upload can be added here
    }
}



// YOUTUBE Function to toggle the dropdown visibility with sliding effect
function youtubeToggleDropdown() {
    if (youtubeDropdownContent.classList.contains('show')) {
        youtubeDropdownContent.classList.remove('show');
    } else {
        youtubeDropdownContent.classList.add('show');
    }
}
// Function to handle file type selection
function youtubeSelectedFileType(type) {
    youtubeSelectedFileType = type;
    document.getElementById('selectedType').innerText = "Selected File Type: " + youtubeSelectedFileType;
    youtubeToggleDropdown();// Slide up (close) the dropdown after selecting an option

}

// Function to upload file (currently just logs the details)
function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file selected';
    document.getElementById('fileName').innerText = fileName;

    // Log the selected file and file type
    if (youtubeSelectedFileType === '') {
        alert('Please select a file type before uploading.');
    } else if (fileName === 'No file selected') {
        alert('Please select a file before uploading.');
    } else {
        alert(`File Name: ${fileName}\nFile Type: ${youtubeSelectedFileType}\nFile Uploaded Successfully!`);
        // Code to handle file upload can be added here
    }
}*/





//ABOUT PAGE SECTION

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Feedback submitted successfully!');
    this.reset();
});





//LOGIN PAGE SECTION

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login functionality to be implemented');
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

    // Login form handling
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
    }

    // Forgot Password form handling
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
    }

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }






//SIGNUP PAGE SECTION
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign up functionality to be implemented');
});






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