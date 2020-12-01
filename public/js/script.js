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
    let passwordRegex=/^[0-9a-zA-Z]{7,}$/;
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

// This function works on validation for Registration forms
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
    let checkfName=/^[a-zA-Z]{5,50}$/;
    if (!fname.value.match(checkfName)) {
        fname.style.border="1px solid red";
        fNameErr.innerHTML="first name contain atleast 5 characters";
        fNameErr.style.color="red";
        return false
    }
    //This condition checks validation for lname
    let checklName=/^[a-zA-Z]{5,50}$/;
    if (!lname.value.match(checklName)) {
        lname.style.border="1px solid red";
        lNameErr.innerHTML="first name contain atleast 5 characters";
        lNameErr.style.color="red";
        return false
    }
    //This condition checks validation for username
    let checkusername=/^[0-9A-Z]+$/;
    if (!username.value.match(checkusername)) {      
        username.style.border="1px solid red";
        regUsernameErr.innerHTML="Check username formate.g UF096,or FO156";
        regUsernameErr.style.color="red";
        return false
    }

    //This condition checks validation for phone
    
    if (reg_dob.value ==="") {
        reg_dob.style.border="1px solid red";
        regDobErr.innerHTML="User must be 10years and above";
        regDobErr.style.border="1px solid red";
        return false
    }
    let checkPhone=/^[0-9]{10}/
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
    
    if (reg_date.value==="") {
        reg_date.style.border="1px solid red";
        regDateErr.innerHTML="Please check date";
        regDateErr.style.border="1px solid red";
        return false
    }
    let checkAddress=/^[0-9a-zA-Z]{5,}$/
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
        alert("User Data is Validated");
        return true;
}    
    
} 


// This is validation for AO signup form.
// validation for signup

const signUpValidation=()=>{
    const signFname=document.signUpForm.fname;
    const signLname=document.signUpForm.lname;
    const signUsername=document.signUpForm.username;
    const signPhone=document.signUpForm.reg_phone;
    const signRole=document.signUpForm.role
    const signPassword=document.signUpForm.password;

    const signFnameErr=document.getElementById("signFname_err");
    const signLnameErr=document.getElementById("signLname_err");
    const signUsernameErr=document.getElementById("signup_username_err");
    const signPhoneErr=document.getElementById("signup_phone_err");
    const signRoleErr=document.getElementById("#signup_role");
    const signPasswordErr=document.getElementById("signup_password_err");

  
    let checkSignName=/^[a-zA-Z]{5,50}$/;
    if (!signFname.value.match(checkSignName)) {
        signFname.style.border="1px solid red";
        signFnameErr.innerHTML="Please check the name entered";
        signFnameErr.style.color="red";
        return false
    }
    let checkSignLName=/^[0-9a-zA-Z]{5,50}$/;
    if (!signLname.value.match(checkSignLName)) {
        signLname.style.border="1px solid red";
        signLnameErr.innerHTML="Please check the name entered";
        signLnameErr.style.color="red";
        return false
    }
    let checkSignUsername=/^[0-9A-Z]{5,50}$/;
    if (!signUsername.value.match(checkSignUsername)) {
        signUsername.style.border="1px solid red";
        signUsernameErr.innerHTML="User name should be alphanumeric eg AO999";
        signUsernameErr.style.color="red";
        return false
    }
    let checkSignPhone=/^[0-9]{10}/
    if (!signPhone.value.match(checkSignPhone)) {
        signPhone.style.border="1px solid red";
        signPhoneErr.innerHTML="This is not a valid phone number";
        signPhoneErr.style.color="red";
        return false
    }
    let checkSignPassword=/^\w{7}/;
    if (!signPassword.value.match(checkSignPassword)) {
        signPassword.style.border="1px solid red";
        signPasswordErr.innerHTML="Please check your password  ";
        signPasswordErr.style.color="red";
        return false
    }
    
else{
    alert("User Data is Validated");
    return true;
} 
  
}

// validation for products form
const productValidation=()=>{
// initialisin variables for  form fields to be validated
const pName=document.pAdd.pName;
const pCategory=document.pAdd.pCategory;
const ward=document.pAdd.ward;
const pUnitPrice=document.pAdd.pUnitPrice;
const paymentMode=document.pAdd.paymentMode;
const pQuantity=document.pAdd.pQuantity;
const deliveryMode=document.pAdd.deliveryMode;
const farmerUserID=document.pAdd.farmerUserID;
const pFphone=document.pAdd.pFphone;
const pFdirections=document.pAdd.pFdirections;

const pnameErr=document.getElementById("pnameErr");
const pCategoryErr=document.getElementById("pCategoryErr");
const wardErr=document.getElementById("wardErr");
const pUnitPriceErr=document.getElementById("pUnitPriceErr");
const paymentModeErr=document.getElementById("paymentModeErr");
const pQuantityErr=document.getElementById("pQuantityErr");
const deliveryModeErr=document.getElementById("deliveryModeErr");
const farmerUserIDErr=document.getElementById("farmerUserIDErr");
const pFphoneErr=document.getElementById("pFphoneErr");
const pFdirectionsErr=document.getElementById("pFdirectionsErr");


let checkpName=/^[a-zA-Z]{1,50}$/;
if (!pName.value.match(checkpName)) {
    pName.style.border="1px solid red";
    pnameErr.innerHTML="Please check the name entered";
    pnameErr.style.color="red";
    return false
}

if (pCategory.value=="") {
    pCategory.style.border="1px solid red";
    pCategoryErr.innerHTML="Please select a product category";
    pCategoryErr.style.color="red";
    return false
}
if (ward.value=="") {
    ward.style.border="1px solid red";
    wardErr.innerHTML="Select a ward";
    wardErr.style.color="red";
    return false
}
let checkPrice=/^[0-9]{2,50}$/;
if (!pUnitPrice.value.match(checkPrice)) {
    pUnitPrice.style.border="1px solid red";
    pUnitPriceErr.innerHTML="Please Price in figures";
    pUnitPriceErr.style.color="red";
    return false
}
if (paymentMode.value==[]) {
    paymentMode.style.border="1px solid red";
    paymentModeErr.innerHTML="Select a tleast one mode of payment";
    paymentModeErr.style.color="red";
    return false
}
let checkQty=/^[0-9]{1,50}$/;
if (!pQuantity.value.match(checkQty)) {
    pQuantity.style.border="1px solid red";
    pQuantityErr.innerHTML="Enter correct quantity";
    pQuantityErr.style.color="red";
    return false
}
if (!deliveryMode.value==[]) {
    deliveryMode.style.border="1px solid red";
    deliveryModeErr.innerHTML="Please select our delivery mode";
    deliveryModeErr.style.color="red";
    return false
}
let checkID=/^[a-zA-Z0-9]{5}$/;
if (!farmerUserID.value.match(checkID)) {
    farmerUserID.style.border="1px solid red";
    farmerUserIDErr.innerHTML="User id must contain 5 character";
    farmerUserIDErr.style.color="red";
    return false
}
let checkfPhone=/^[0-9]{10}$/;
if (!pFphone.value.match(checkfPhone)) {
    pFphone.style.border="1px solid red";
    pFphoneErr.innerHTML="Please check the phone number";
    pFphoneErr.style.color="red";
    return false
}
let checkDirections=/^[a-zA-Z0-9]{5,50}$/;
if (!pFdirections.value.match(checkDirections)) {
    pFdirections.style.border="1px solid red";
    pFdirectionsErr.innerHTML="Enter directions properly";
    pFdirectionsErr.style.color="red";
    return false
}

else{
    alert("User Data is Validated");
    return true;
} 


}