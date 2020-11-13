// This function works on the validation of login form for customers
const loginValidation =()=>{
    const userName=document.getElementById("user_name");
    const password=document.getElementById("password");
    const errorName=document.getElementById("error_user");
    const errorPassword=document.getElementById("error_password");
    
    userName.focus();
    
    
    //Regular expression for validating the email and password before sending to database.
    let userNameRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex=/^[0-9a-zA-Z]+$/;
    
        
    // this condition checks if the username format entered by the user matches with what we specicified.
    if(userName.value.match(userNameRegex)){
        userName.style.border="1px solid green";
    }else{
        userName.style.border="1px solid red";
        errorName.innerHTML = "Sorry your id is wrong!";
        errorName.style.color="red";
        return false;
    }
    // Checks if password format matches required format
    if(password.value.match(passwordRegex)){
        password.style.border="1px solid green";

    }else{
        password.style.border="1px solid red";
        errorPassword.innerHTML = "Sorry your id is wrong!";
        errorPassword.style.color="red";
        return false;
    }
}

// This function works on validation of signup for
const signUpValidation=()=>{
    const fname=document.signUpForm.fname;
    const lname=document.signUpForm.lname;
    const username=document.signUpForm.username;
    const password=document.signUpForm.password;
    const phone=document.signUpForm.phone;

    //Declaring variables for error
    const fNameErr=document.getElementById("fname_err");
    const lNameErr=document.getElementById("lname_err");
    const sEmailErr=document.getElementById("signup_email_err");
    const sPhoneErr=document.getElementById("signup_phone_err");
    const sPasswordErr=document.getElementById("signup_password_err");
    



    let checkNameUser=/^[0-9a-zA-Z]+$/;
    let checkusername=/^[0-9a-zA-Z]+$/;;
    let checkPassword=/^\w{7,12}/
    let checkPhone=/^[0-9]{3}/

    //This condition checks validation for fname
    if (fname.value.match(checkNameUser)) {
        nameUser.style.border="1px solid green";
    } else {
        fname.style.border="1px solid red";
        // fNameErr.textContent="Please enter a valid name";
        fNameErr.innerHTML="Please enter a valid first name";
        fNameErr.style.border="1px solid red";
    }
    //This condition checks validation for lname
    if (lname.value.match(checkNameUser)) {
        lname.style.border="1px solid green";
    } else {
        lname.style.border="1px solid red";
        lNameErr.innerHTML="Please enter a last name";
        lNameErr.style.border="1px solid red";
        
    }

    //This condition checks validation for email
    if (checkusername.test(username.value)) {
        username.style.border="1px solid green";
    } else {
       
        username.style.border="1px solid red";
        sEmailErr.innerHTML="Please enter a email";
        sEmailErr.style.border="1px solid red";
    }

    //This condition checks validation for phone
    if (checkPassword.test(password.value)==true) {
        password.style.border="1px solid blue";
    } else {
        password.style.border="1px solid red";
        sPasswordErr.innerHTML="Please enter a valid password";
        sPasswordErr.style.border="1px solid red";
    }

    //This condition checks validation for password
    if (checkPhone.test(phone.value)==true) {
        password.style.border="1px solid blue";
    } else {
        
        phone.style.border="1px solid red";
        sPhoneErr.innerHTML="Please enter a phone number";
        sPhoneErr.style.border="1px solid red";
    }
}


// This is validation for registration form.

