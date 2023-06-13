// Form validation code will come here.
function validate() {
  var username = document.getElementById("name-input");
  var email = document.getElementById("email-input");
  var phone = document.getElementById("phone-input");
  if (username.value.trim() === "") {
    alert("Please Enter your name");
    document.getElementById("name-label").style.visibility = "visible";
    return false;
  } else if (email.value.trim() === "") {
    alert("Please Enter your email");
    document.getElementById("email-label").style.visibility = "visible";
    return false;
  } else if (phone.value.trim() === "" || phone.value < 0) {
    alert("Please valid phone number");
    document.getElementById("phone-label").style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}
