
(function() {

    // Initialize Firebase


    // get elements
    const txtEmail = document.getElementById('fname');
    const textPassword = document.getElementById('lname');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');

    // Add login event
    btnLogin.addEventListener('click', e => {
        //Get email and pass
        const email = txtEmail.value;
        const pass = textPassword.value;
        const auth = firebase.auth();
        // Sign in

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

    });


    // Add Signup event
    btnSignUp.addEventListener('click', e => {
            //Get email and pass
            const email = txtEmail.value;
            const pass = textPassword.value;
            const auth = firebase.auth();
            // Sign in

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });


    });

    // Add a realtime Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }

    });




})