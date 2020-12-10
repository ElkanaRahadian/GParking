var username = document.getElementById("txtusername")
var regular = document.getElementById("btnregular");
var premium = document.getElementById("btnpremium");
var rating = document.getElementById("numrating");
var summary = document.getElementById("txtratingsummary");
var ratingdesc = document.getElementById("txtratingdesc");
var agreement = document.getElementById("checkagreement");
var buttonRating = document.getElementById("btnRating");

var validation = (v) => {
  v.preventDefault();

  if (username.value == "") {
    alert("Username Must be filled");
  } else if (username.value.length < 7) {
    alert("Username Length must be greater than 6 characters ");
  } else if (username.value.includes(" ")) {
    alert("Username Cannot contain space character (‘ ‘)");
  } else if (!regular.checked && !premium.checked) {
    alert("Service Type Must be chosen");
  } else if (rating.value == "") {
    alert("Rating Must be filled");
  } else if (summary.value == "") {
    alert("Review Summary Must be filled");
  } else if (ratingdesc.value == "") {
    alert("Review Must be Filled");
  } else if (!agreement.checked) {
    alert("Agreement Must be checked");
  } else {
    var servicetype = "";
    if (regular.checked) servicetype = "Regular";
    else if (premium.checked) servicetype = "Premium";

    if (
      confirm(`
        Are you sure with this rating ?

        Username      : ${username.value}
        Service       : ${servicetype}
        Rating        : ${rating.value}
        Summary       : ${summary.value}
        Suggestion    : ${ratingdesc.value}`)
    ) {
      alert("Rating has been submitted, You can Proceed to Forum Page");
    } else {
      alert("Please Recheck your Rating Input");
    }
  }
};

buttonRating.addEventListener("click", (v) => validation(v));
