document.getElementById('loginFormElement').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = 'https://reqres.in/api/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    };

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // Handle the response as needed
            if (response.token) {
                // direct to login page
                window.location.href = '/menu/login.html';
            } else {
                // Show error message
                alert('Login failed: ' + response.error);
            }
        })
});
