document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating a login process. In a real-world scenario, this will involve server-side authentication.
    if (username && password) {
        alert(Logging in with Username: ${username});
        // You would typically send the credentials to the server for validation
    }{else {
        alert('Please enter both username and password.');
    }
}