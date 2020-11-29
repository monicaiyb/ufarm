// This function works on the validation of login form for customers
const loginValidation =()=>{
    const userName=document.getElementById("user_name");
    const password=document.getElementById("password");
    const errorName=document.getElementById("error_user");
    const errorPassword=document.getElementById("error_password");

    userName.focus()
    //Regular expression for validating the email and password before sending to database.
    let userNameRegex=/^[0-9a-zA-Z]+$/;
  
  
    // this condition checks if the username format entered by the user matches with what we specicified.
    if(!userName.value.match(userNameRegex)){
        userName.style.border="1px solid red";
        errorName.innerHTML = "Sorry your username is wrong!";
        errorName.style.color="red";
        return false;
    }
    
    // Checks if password format matches required format
    let passwordRegex=/^[0-9a-zA-Z]+$/;
    if(!password.value.match(passwordRegex)){
          password.style.border="1px solid red";
        errorPassword.innerHTML = "Sorry your password is wrong!";
        errorPassword.style.color="red";
        return false;
    }
    else{
        alert("Logged in successfully");
        return true;
    }
}

// This function works on validation of signup for
const regFormValidation=()=>{
    const fname=document.regForm.fname;
    const lname=document.regForm.lname;
    const username=document.regForm.username;
    const reg_dob=document.regForm.reg_dob;
    const reg_phone=document.regForm.reg_phone;
    const reg_id=document.regForm.reg_id;
    const reg_date=document.regForm.reg_date;
    const address=document.regForm.address;
    const password=document.regForm.password;

    //Declaring variables for error
    const fNameErr=document.getElementById("error_reg_fname");
    const lNameErr=document.getElementById("error_reg_lname");
    const regUsernameErr=document.getElementById("error_reg_username");
    const regDobErr=document.getElementById("error_reg_dob");
    const regPhoneErr=document.getElementById("error_reg_phone");
    const regIdErr=document.getElementById("error_reg_id");
    const addressErr=document.getElementById("error_address")
    const regDateErr=document.getElementById("error_reg_date");
    const regPasswordErr=document.getElementById("error_reg_password");

    //This condition checks validation for fname
    let checkfName=/^[a-zA-Z]+$/;
    if (!fname.value.match(checkfName)) {
        fname.style.border="1px solid red";
        fNameErr.innerHTML="first name should be alphabetic characters only";
        fNameErr.style.color="red";
        return false
    }
    //This condition checks validation for lname
    let checklName=/^[a-zA-Z]+$/;
    if (!lname.value.match(checklName)) {
        lname.style.border="1px solid red";
        lNameErr.innerHTML="last name should be alphabetic characters only";
        lNameErr.style.color="red";
        return false
    }
    //This condition checks validation for username
    let checkusername=/^[0-9a-zA-Z]+$/;
    if (!username.value.match(checkusername)) {      
        username.style.border="1px solid red";
        regUsernameErr.innerHTML="Make sure you enter correct username format";
        regUsernameErr.style.color="red";
        return false
    }

    //This condition checks validation for phone
    // let checkDob=/^/
    // if (!reg_dob.value.match(checkDob)) {
    //     reg_dob.style.border="1px solid red";
    //     regDobErr.innerHTML="User must be 18 and above";
    //     regDobErr.style.border="1px solid red";
    //     return false
    // }
    let checkPhone=/^[0-9]/
    if (!reg_phone.value.match(checkPhone)) {
        reg_phone.style.border="1px solid red";
        regPhoneErr.innerHTML="Please enter a valid password";
        regPhoneErr.style.color="red";
        return false
    }
    let checkId=/^[0-9a-zA-Z]{13}/
    if (!reg_id.value.match(checkId)) {
        reg_id.style.border="1px solid red";
        regIdErr.innerHTML="Please check your Id";
        regIdErr.style.color="red";
        return false
    }
    
    // if (!reg_date.value="dd/mm/yyyy") {
    //     reg_date.style.border="1px solid red";
    //     regDateErr.innerHTML="Please check date";
    //     regDateErr.style.border="1px solid red";
    //     return false
    // }
    let checkAddress=/^[0-9a-zA-Z]+$/
    if (!address.value.match(checkAddress)) {
        address.style.border="1px solid red";
        addressErr.innerHTML="Please check your Address";
        addressErr.style.color="red";
        return false
    }
    //This condition checks validation for password
    let checkPassword=/^[0-9a-zA-Z]{7,14}$/
    if(!password.value.match(checkPassword)) {
        password.style.border="1px solid red";
        regPasswordErr.innerHTML="Please enter a valid password";
        regPasswordErr.style.color="red";
        return false
    }
else{
        alert("User added in successfully");
        return true;
}    
    
}


// This is validation for registration form.

