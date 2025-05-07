// const usernameField = document.querySelector('#usernameField'); // Use # for ID selector
// const feedBackArea = document.querySelector(".invalid_feedback");
// const emailField = document.querySelector('#emailField');
// const emailFeedBackArea = document.querySelector(".emailFeedbackArea");
// const usernameSuccessOutput = document.querySelector('.usernameSuccessOutput');


// emailField.addEventListener("keyup", (e) => {

//     const emailVal = e.target.value;
    

//     emailField.classList.remove("is-invalid");
//     emailFeedBackArea.style.display = "none"
    

//     if (emailVal.length > 0) {
//         fetch("/authentication/validate-email",{
//             body:JSON.stringify({email: emailVal}),
//             method: "POST",
//         })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log('data', data);
//                 if (data.email_error){
//                     emailField.classList.add("is-invalid");
//                     emailFeedBackArea.style.display = "block"
//                     emailFeedBackArea.innerHTML=`<p>${data.email_error}</p>`
//                 }
//         });
//     }  
// });

// usernameField.addEventListener("keyup", (e) => {

//     const usernameVal = e.target.value;

//     usernameSuccessOutput.style.display='block';

//     usernameSuccessOutput.textContent=`Checking ${usernameVal}`;

//     usernameField.classList.remove("is-invalid");
//     feedBackArea.style.display = "none"
    

//     if (usernameVal.length > 0) {
//         fetch("/authentication/validate-username",{
//             body:JSON.stringify({username: usernameVal}),
//             method: "POST",
//         })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log('data', data);
//                 usernameSuccessOutput.style.display='none';
//                 if (data.username_error){
//                     usernameField.classList.add("is-invalid");
//                     feedBackArea.style.display = "block"
//                     feedBackArea.innerHTML=`<p>${data.username_error}</p>`
//                 }
//         });
//     }  
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const toggle = document.getElementById('togglePassword');
//     const field = document.getElementById('passwordField');
  
//     toggle.addEventListener('click', () => {
//       if (field.type === 'password') {
//         field.type = 'text';
//         toggle.textContent = 'HIDE';
//       } else {
//         field.type = 'password';
//         toggle.textContent = 'SHOW';
//       }
//     });
//   });
  


document.addEventListener('DOMContentLoaded', function () {
    const usernameField = document.querySelector('#usernameField');
    const feedBackArea = document.querySelector(".invalid_feedback");
    const emailField = document.querySelector('#emailField');
    const emailFeedBackArea = document.querySelector(".emailFeedbackArea");
    const passwordField = document.querySelector("#passwordField");
    const usernameSuccessOutput = document.querySelector('.usernameSuccessOutput');
    const showPasswordToggle = document.querySelector('.showPasswordToggle');
    const submitBtn = document.querySelector('.submit-btn');
    const handleToggleInput = (e) =>{

        if(showPasswordToggle.textContent=== 'SHOW'){
            showPasswordToggle.textContent = 'HIDE';

            passwordField.setAttribute('type', 'text');
        }else{
            showPasswordToggle.textContent = 'SHOW';

            passwordField.setAttribute('type', 'password');
        }

    };

    showPasswordToggle.addEventListener('click', handleToggleInput);
  
    // Email Validation Event Listener
    emailField.addEventListener("keyup", (e) => {
      const emailVal = e.target.value;
  
      emailField.classList.remove("is-invalid");
      emailFeedBackArea.style.display = "none";
  
      if (emailVal.length > 0) {
        fetch("/authentication/validate-email",{
          body:JSON.stringify({email: emailVal}),
          method: "POST",
        })
          .then(res => res.json())
          .then(data => {
            if (data.email_error) {
              submitBtn.disabled = true;
              emailField.classList.add("is-invalid");
              emailFeedBackArea.style.display = "block";
              emailFeedBackArea.innerHTML = `<p>${data.email_error}</p>`;
            }else{
                submitBtn.removeAttribute('disabled');
            }
        });
      }
    });
  
    // Username Validation Event Listener
    usernameField.addEventListener("keyup", (e) => {
      const usernameVal = e.target.value;
  
      usernameSuccessOutput.style.display = 'block';
      usernameSuccessOutput.textContent = `Checking ${usernameVal}`;
  
      usernameField.classList.remove("is-invalid");
      feedBackArea.style.display = "none";
  
      if (usernameVal.length > 0) {
        fetch("/authentication/validate-username", {
          body: JSON.stringify({ username: usernameVal }),
          method: "POST",
        })
          .then(res => res.json())
          .then(data => {
            usernameSuccessOutput.style.display = 'none';
            if (data.username_error) {
              usernameField.classList.add("is-invalid");
              feedBackArea.style.display = "block";
              feedBackArea.innerHTML = `<p>${data.username_error}</p>`;
              submitBtn.disabled = true;
            }else{
                submitBtn.removeAttribute('disabled');  
            }
        });
      }
    });
  
    // Password Toggle Visibility
    const togglePassword = document.getElementById('togglePassword');
    // const passwordField = document.getElementById('passwordField');
  
    if (togglePassword && passwordField) {
      togglePassword.addEventListener('click', () => {
        // Toggle the password visibility
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;
        
        // Toggle button text between SHOW and HIDE
        togglePassword.textContent = type === 'text' ? 'HIDE' : 'SHOW';
      });
    }
  });
  