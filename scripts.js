$(document).ready(function () {
    // Show loading screen
    $('#loading-screen').show();

    // Simulate loading time
    setTimeout(function () {
        $('#loading-screen').remove(); // Remove the loading screen
        $('#login-page').removeClass('d-none'); // Show the login page
    }, 3000); // 3 seconds loading time

    // Switch to sign up page
    $('#show-signup').click(function (e) {
        e.preventDefault();
        $('#login-page').addClass('d-none');
        $('#signup-page').removeClass('d-none');
    });

    // Switch to login page
    $('#show-login').click(function (e) {
        e.preventDefault();
        $('#signup-page').addClass('d-none');
        $('#login-page').removeClass('d-none');
    });

    // FORGET PASSWORD

    $(document).ready(function () {
        // Validate email
        function validateEmail(input) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const errorElement = input.nextElementSibling;
            if (emailPattern.test(input.value)) {
                errorElement.style.display = 'none';
            } else {
                errorElement.style.display = 'block';
            }
        }
    
        // Event listener for email validation on the reset password page
        $('#resetEmail').on('input', function () {
            validateEmail(this);
        });
    });


    // DASHBOARD

    $(document).ready(function () {
        // Toggle the sidebar menu
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    });

    // Handle login form submission
    $('#login-page form').submit(function(e) {
        e.preventDefault();
        // Add your form validation logic here
        window.location.href = 'dashboard.html';
    });

    // Handle sign-up form submission
    $('#signup-page form').submit(function(e) {
        e.preventDefault();
        // Add your form validation logic here
        window.location.href = 'dashboard.html';
    });
    
    

    // Initialize Google Sign-In
    // gapi.load('auth2', function () {
    //     var auth2 = gapi.auth2.init({
    //         client_id: 'YOUR_GOOGLE_CLIENT_ID',
    //     });

    //     auth2.attachClickHandler(document.getElementById('google-signin-button'), {},
    //         function (googleUser) {
    //             var profile = googleUser.getBasicProfile();
    //             console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //             // Redirect or handle sign-in
    //         }, function (error) {
    //             console.log(JSON.stringify(error, undefined, 2));
    //         });

    //     auth2.attachClickHandler(document.getElementById('google-signup-button'), {},
    //         function (googleUser) {
    //             var profile = googleUser.getBasicProfile();
    //             console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    //             // Redirect or handle sign-up
    //         }, function (error) {
    //             console.log(JSON.stringify(error, undefined, 2));
    //         });
    // });

    // // Validate email
    // function validateEmail(input) {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     const errorElement = input.nextElementSibling;
    //     if (emailPattern.test(input.value)) {
    //         errorElement.style.display = 'none';
    //     } else {
    //         errorElement.style.display = 'block';
    //     }
    // }

    // // Toggle password visibility
    // function togglePasswordVisibility(passwordFieldId) {
    //     const passwordField = document.getElementById(passwordFieldId);
    //     const button = passwordField.nextElementSibling;
    //     if (passwordField.type === 'password') {
    //         passwordField.type = 'text';
    //         button.textContent = 'Hide';
    //     } else {
    //         passwordField.type = 'password';
    //         button.textContent = 'Show';
    //     }
    // }

    // // Event listeners for email validation and password visibility toggle
    // $('#loginEmail').on('input', function () {
    //     validateEmail(this);
    // });

    // $('#signupEmail').on('input', function () {
    //     validateEmail(this);
    // });

    // $('#loginPasswordToggle').click(function () {
    //     togglePasswordVisibility('loginPassword');
    // });

    // $('#signupPasswordToggle').click(function () {
    //     togglePasswordVisibility('signupPassword');
    // });
});
