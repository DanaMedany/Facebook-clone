
function validation() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("mail").value;
  var password = document.getElementById("pass").value;
  // var errorMessages = document.getElementById("error");

  if (fname.length < 4 ) {
    alert("first Name must be at least 4 characters long")
    return false;
  }else if (lname.length < 4 ) {
    alert("last Name must be at least 4 characters long")
    return false;
  }else if (email.indexOf("@") == -1) {
    alert("Email must contain @")
    return false;
  }else if (password.length < 9) { 
    alert("Password must be at least 9 characters long")
    return false;
  }else {
    alert("You information has been submitted")
    return true;
  }
  }
