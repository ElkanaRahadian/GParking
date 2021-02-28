var emai = document.getElementById("txtemail");
var password = document.getElementById("txtpassword");
var buttonLogin = document.getElementById("btnLogin");

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

  if (email.value == "") {
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
  } else if (password.value.length == "") {
    alert("Password must be filled");
  } else if (password.value.length < 9) {
    alert("Password Length must be greater than 8 characters");
  } else if (!alphabet(password.value) || !numeric(password.value)) {
    alert("Password Must be alphanumeric (contain letter and digit)");
  } else {
    if (
      confirm(`
        Is this Login data correct ?

        Email       : ${email.value}
        Password    : ${password.value}`)
    ) {
      alert(
        "Login Successful, You can Proceed to Feedback, Rating, or Forum Page"
      );
    } else {
      alert("Please Recheck Login Credentials");
    }
  }
};

buttonLogin.addEventListener("click", (v) => validation(v));
