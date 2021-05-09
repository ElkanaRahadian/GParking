var fullnam = document.getElementById("txtname");
var email = document.getElementById("txtemail");
var username = document.getElementById("txtusername");
var password = document.getElementById("txtpassword");
var confirmpassword = document.getElementById("txtcopassword");
var male = document.getElementById("btnmale");
var female = document.getElementById("btnfemale");
var dob = document.getElementById("txtdob");
var agreement = document.getElementById("checkagreement");
var buttonRegis = document.getElementById("btnRegis");

var numeric = (num) => {
  var char = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (c of char) {
    if (num.includes(c)) return true;
  }
  return false;
};

var specialchar = (special) => {
  var char = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "[]", '"'];
  for (c of char) {
    if (special.includes(c)) return true;
  }
  return false;
};

var emailchar = (emailchar) => {
  var char = ["@", "."];
  for (c of char) {
    if (emailchar.includes(c)) return true;
  }
  return false;
};

var alphabet = (a) => {
  var char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (c of char) {
    if (a.includes(c)) return true;
  }
  return false;
};

var validation = (v) => {
  v.preventDefault();

  if (fullname.value == "") {
    alert("Fullname Must be filled ");
  } else if (
    emailchar(fullname.value) ||
    numeric(fullname.value) ||
    specialchar(fullname.value)
  ) {
    alert("Fullname Must consist of letters only");
  } else if (email.value == "") {
    alert("Email Must be filled");
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    alert("Email Must contain '@' and '.'");
  } else if (
    email.value.indexOf("@") - 1 == email.value.indexOf(".") ||
    email.value.indexOf("@") + 1 == email.value.indexOf(".")
  ) {
    alert("‘@’ and ‘.’ cannot be side by side");
  } else if (specialchar(email.value)) {
    alert("Email Must not contain symbols others than ‘@’ and ‘.’");
  } else if (username.value == "") {
    alert("Username Must be filled");
  } else if (username.value.length < 7) {
    alert("Username Length must be greater than 6 characters ");
  } else if (username.value.includes(" ")) {
    alert("Username Cannot contain space character (‘ ‘)");
  } else if (password.value.length == "") {
    alert("Password must be filled");
  } else if (password.value.length < 9) {
    alert("Password Length must be greater than 8 characters");
  } else if (!alphabet(password.value) || !numeric(password.value)) {
    alert("Password Must be alphanumeric (contain letter and digit)");
  } else if (confirmpassword.value == "") {
    alert("Confirmation Password Must be filled");
  } else if (confirmpassword.value != password.value) {
    alert("Confirmation Password Must be the same with password");
  } else if (!male.checked && !female.checked) {
    alert("Gender Must be chosen");
  } else if (dob.value.length == "") {
    alert("Date of Birth Must be filled");
  } else if (!agreement.checked) {
    alert("Agreement Must be checked");
  } else {
    var gender = "";

    if (male.checked) gender = "Male";
    else if (female.checked) gender = "Female";

    if (
      confirm(`
        Is this Registration data correct ?

        Fullname      : ${fullname.value}
        Username      : ${username.value}
        Password      : ${password.value}
        Gender        : ${gender}        
        Date of Birth : ${dob.value}
        Email         : ${email.value}`)
    ) {
      alert("Registration Successful, You can Proceed to Login Page");
    } else {
      alert("Please Recheck Registration Input");
    }
  }
};

buttonRegis.addEventListener("click", (v) => validation(v));
