document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('error-message').innerHTML = 'Please fill in both fields.';
    } else {
    
        alert('Login successful!');
        
    }
});
