//LogIn 
document.getElementById('btn-login').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'mahedi@gmail.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    } else {
        alert('Please Enter Valid Email and Password');
    }
});

