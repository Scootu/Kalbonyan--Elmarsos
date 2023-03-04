//
const username = document.getElementById("username"),
  useremail = document.getElementById("useremail"),
  userPassword = document.getElementById("userpassword"),
  confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.querySelector("button");

// Check if valide email
function isValidEmail(email) {
   if(String(email.value.trim())
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) { 
      showSuccess(email);
  }else { 
    showError(email,'Email is not valid');
  }
}
//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      // trim() without white space
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
// Check input length
function checkLength(input, min, max) {
  if (input.value.length <= min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length >= max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check password match 
function checkPasswordMatch(pass1,pass2) {
       if(pass1.value != pass2.value) { 
         showError(pass2,'Password not match !');
       }
}
//Get field Name
function getFieldName(input) {
  let word = input.id.split("user").join("");
  return word.split("")[0].toUpperCase() + word.slice(1);
}
//CheckFnc

function checkFnc(elem) {
  //check user Input and update the border input if succed or error
  elem.preventDefault(); //prevent elem from submission behavior
  checkRequired([username, useremail, userPassword, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(userPassword, 6, 25);
  isValidEmail(useremail);
  checkPasswordMatch(userPassword,confirmPassword);
}

function showError(elem, mError) {
  elem.parentElement.classList.add("error");
  elem.nextElementSibling.textContent = mError;
}
function showSuccess(elem) {
  /*
  elem.parentElement.classList.remove("error");
  elem.parentElement.classList.add("success");
  */
  elem.parentElement.classList = "form-control success"; //overwrrting
}

//submitBtn.addEventListener('click',checkFnc(this));
submitBtn.addEventListener("click", checkFnc);

/* 
  if (username.value.lenght < 3) {
    showError(username, "Username must be at least 3 characters");
  } else {
    showSuccess(username);
  }
  if (useremail.value == '') {
    showError(useremail, "Email is requered !");
   } else if(!isValidEmail(useremail)){
     showError(useremail,"Email not valid !");
     }else {
    showSuccess(useremail);
  }
  if (userPassword.value == '') {
    showError(userPassword, "Password is requered !");
  } else {
    showSuccess(userPassword);
  }
  if (confirmPassword.value == '') {
    showError(confirmPassword, "Password 2 is requered !");
  } else {
    showSuccess(confirmPassword);
  }
  */
