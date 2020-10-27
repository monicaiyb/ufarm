// This function works on the validation of login form for customers
const loginValidation =()=>{
    const userName=document.getElementById("user_name");
    const password=document.getElementById("password");
    const errorName=document.getElementById("error_user");
    const errorPassword=document.getElementById("error_password");
    
    userName.focus();
    alert("hello")
    
    //Regular expression for validating the email and password before sending to database.
    let userNameRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex=/^[0-9a-zA-Z]+$/;
    
        
    // this condition checks if the username format entered by the user matches with what we specicified.
    if(userName.value.match(userNameRegex)){
        userName.style.border="1px solid green";
    }else{
        userName.style.border="1px solid red";
        errorName.innerHTML = "Sorry your id is wrong!";
        errorName.style.color="red"
        return false
    }
    if(password.value.match(passwordRegex)){
        alert("right input");
        // console.log(password.value);

        password.style.border="5px solid green";
    }else{
        password.style.border="1px solid red";
        errorPassword.innerHTML = "Sorry your id is wrong!";
        errorPassword.style.color="red"
        return false
    }
    if(userName.value==""&&password.value==""){
        alert("Empty fields")
        password.style.border="5px solid red";
        userName.style.border="5px solid red";
        userName.focus();
        return false
    }
}

// This function works on validation of signup for
// const signUpValidation=()=>{
//     const nameUser=document.signUpForm.name;
//     const email=document.signUpForm.email;
//     const password=document.signUpForm.password;
//     const phone=document.signUpForm.phone;

//     let checkNameUser=/^[0-9a-zA-Z]+$/;
//     let checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let checkPassword=/^\w{7,12}/
//     let checkPhone=/^[0-9]{3}/
//     if (nameUser.value.match(checkNameUser)) {
//         alert("correct name input");
//         nameUser.style.border="3px solid blue";
//     } else {
//         alert("wrong name input");
//         email.style.border="3px solid red";
//     }
//     if (checkEmail.test(email.value)) {
//         alert("correct email input");
//         email.style.border="3px solid blue";
//     } else {
//         alert("wrong email input");
//         email.style.border="3px solid red";
//     }
//     if (checkPassword.test(password.value)==true) {
//         alert("correct password input");
//         password.style.border="3px solid blue";
//     } else {
//         alert("wrong email input");
//         password.style.border="3px solid red";
//     }
// }
