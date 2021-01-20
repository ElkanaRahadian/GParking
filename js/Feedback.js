va username = document.getElementById("txtusername");
var regular = document.getElementById("btnregular");
var premium = document.getElementById("btnpremium");
var dissatisfied = document.getElementById("btndissatisfied");
var neutral = document.getElementById("btnneutral");
var satisfied = document.getElementById("btnsatisfied");
var summary = document.getElementById("txtfeedsummary");
var suggestion = document.getElementById("txtsuggestion");
var agreement = document.getElementById("checkagreement");
var buttonFeed = document.getElementById("btnFeed");

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
  } else if (!dissatisfied.checked && !neutral.checked && !satisfied.checked) {
    alert("Overall Satisfaction Must be chosen");
  } else if (summary.value == "") {
    alert("Feedback Summary Must be filled");
  } else if (suggestion.value == "") {
    alert("Suggestion Must be Filled");
  } else if (!agreement.checked) {
    alert("Agreement Must be checked");
  } else {
    var servicetype = "";
    var satisfaction = "";

    if (regular.checked) servicetype = "Regular";
    else if (premium.checked) servicetype = "Premium";

    if (dissatisfied.checked) satisfaction = "Dissatisfied";
    else if (neutral.checked) satisfaction = "Neutral";
    else if (satisfied.checked) satisfaction = "Satisfied";

    if (
      confirm(`
        Are you sure with this feedback data ?

        Username      : ${username.value}
        Service       : ${servicetype}
        Satisfaction  : ${satisfaction}
        Summary       : ${summary.value}
        Suggestion    : ${suggestion.value}`)
    ) {
      alert("Feedback has been sent, You can Proceed to Rating or Forum Page");
    } else {
      alert("Please Recheck your Feedback Input");
    }
  }
};

buttonFeed.addEventListener("click", (v) => validation(v));
