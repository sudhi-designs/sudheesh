function validate(){

let fName =document.getElementById("name").value;
let uEmail =document.getElementById("email").value;
let uPhone = document.getElementById("phone").value;
let uMessage = document.getElementById("message").value;

let Regex_name=/^[a-zA-Z]{1,20}\s{1}[a-zA-Z ]{1,20}$/;
let Regex_email=/^\w{1}[a-zA-Z0-9_.-]+@[A-Za-z0-9-]+\.[a-zA-Z.]{2,5}$/;
let Regex_phone=/^[0-9]{10}$/;
let Regex_message=0;

// let mError =document.getElementsByClassName("error-style")
// mError.style.color="red";

//name validation
if(fName.length==0){
    document.getElementById("error-message").innerHTML="*Name field is required";
document.getElementById("submit").innerHTML="Please fix the error in fields";
    
    return false;

}
if(!fName.match(Regex_name)){
    document.getElementById("error-message").innerHTML="*Enter your Full Name";
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;

}
else{
    document.getElementById("error-message").innerHTML=" ";
document.getElementById("submit").innerHTML=" ";


    }

//email validation

if(uEmail.length==0){
    document.getElementById("error-message1").innerHTML="Email field is required";
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;
}
if(!uEmail.match(Regex_email)){
    document.getElementById("error-message1").innerHTML="Enter a Valid email";
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;
}else{
    document.getElementById("error-message1").innerHTML=" ";
document.getElementById("submit").innerHTML=" ";

    
}

//phone validation

if(uPhone.length==0){
    document.getElementById("phoneval").innerHTML="Phone number is required";
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;
    
}
if(!uPhone.match(Regex_phone)){
    document.getElementById("phoneval").innerHTML="Enter Valid Phone number";
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;
    
}else{
    document.getElementById("phoneval").innerHTML=" "
document.getElementById("submit").innerHTML=" ";

}

//message validation
if(uMessage.length==0){
    document.getElementById("messval").innerHTML="Don't leave message feild empty"
document.getElementById("submit").innerHTML="Please fix the error in fields";

    return false;
}else{
    document.getElementById("messval").innerHTML=" "
document.getElementById("submit").innerHTML=" ";

}


}

