// capture the entire form using the form name

const loginForm = document.querySelector('#log');

const loginBtn = document.getElementById('loginBtn');

function loginUser(e) {
    // prevents page refresh on submit
    e.preventDefault();

    // capture the email and password
    let email = loginForm.email.value;
    let password = loginForm.password.value;

    // handle registration logic using Firebase
    firebase.auth().signInWithEmailAndPassword(email,password)
    // promise that checks whether a user has been autheticated
        .then(() => {
            alert('Login successful, redirecting...');
            // redirect back to login page
            window.location.assign('index.html');
        })
       .catch(err => alert(err.message));
}

loginBtn.addEventListener('click',LOGIN);

// login with Google btn
let googleBtn = document.getElementById('btn');

// ALTERNATIVE 1
// googleBtn.addEventListener('click', function() { 
//     // this class is calling Google Auth Provider
//     let googleProvider = new firebase.auth.GoogleAuthProvider();

//     // code to sign in with Google using a pop up
//     firebase.auth().signInWithPopup(googleProvider)
//         .then(() => {
//             // redirect to home page
//             window.location.assign('home.html');
//         })
//         .catch(err => alert(err.message))
// })

// function signInWithGoogle
function signInWithGoogle() {
    // this class is calling Google Auth Provider
    let googleProvider = new firebase.auth.GoogleAuthProvider();

    // code to sign in with Google using a pop up
    firebase.auth().signInWithPopup(googleProvider)
        .then(() => {
            // redirect to home page
            window.location.assign('home.html');
        })
        .catch(err => alert(err.message))
}


googleBtn.addEventListener('click',signInWithGoogle);