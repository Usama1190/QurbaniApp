let selectCow = document.getElementById("cow");
let selectCowInput = document.getElementById("cowInput");
let selectCowBtn = document.getElementById("cowBtn");

let selectGoat = document.getElementById("goat");
let selectGoatInput = document.getElementById("goatInput");
let selectGoatBtn = document.getElementById("goatBtn");

let selectCamel = document.getElementById("camel");
let selectCamelInput = document.getElementById("camelInput");
let selectCamelBtn = document.getElementById("camelBtn");

document.getElementById("enterBtn").addEventListener("click", function () {
  let userInput = document.getElementById("enter").value;

  if (userInput.trim() === "") {
    document.getElementById("warning").style.display = "block";
  } else {
    document.getElementById("warning").style.display = "none";

    firstLetter = userInput[0].toUpperCase();
    remainingLetters = userInput.slice(1).toLowerCase();

    userInput = firstLetter + remainingLetters;
    console.log(userInput);
  }

  if (userInput === "Cow") {
    document.getElementById("warning").style.display = "none";

    // Cow
    selectCow.classList.replace("opacity0", "opacity1");
    selectCow.classList.replace("cursornot", "cursorauto");

    selectCowInput.removeAttribute("disabled");
    selectCowInput.classList.replace("cursornot", "cursorauto");

    selectCowBtn.classList.replace("cursornot", "cursor");

    // Goat
    selectGoat.classList.replace("opacity1", "opacity0");
    selectGoat.classList.replace("cursorauto", "cursornot");

    selectGoatInput.setAttribute("disabled", true);
    selectGoatInput.classList.replace("cursorauto", "cursornot");

    selectGoatBtn.classList.replace("cursor", "cursornot");

    // Camel
    selectCamel.classList.replace("opacity1", "opacity0");
    selectCamel.classList.replace("cursorauto", "cursornot");

    selectCamelInput.setAttribute("disabled", true);
    selectCamelInput.classList.replace("cursorauto", "cursornot");

    selectCamelBtn.classList.replace("cursor", "cursornot");
  } else if (userInput === "Goat") {
    document.getElementById("warning").style.display = "none";

    // Goat
    selectGoat.classList.replace("opacity0", "opacity1");
    selectGoat.classList.replace("cursornot", "cursorauto");

    selectGoatInput.removeAttribute("disabled");
    selectGoatInput.classList.replace("cursornot", "cursorauto");

    selectGoatBtn.classList.replace("cursornot", "cursor");

    // Cow
    selectCow.classList.replace("opacity1", "opacity0");
    selectCow.classList.replace("cursorauto", "cursornot");

    selectCowInput.setAttribute("disabled", true);
    selectCowInput.classList.replace("cursorauto", "cursornot");

    selectCowBtn.classList.replace("cursor", "cursornot");

    // Camel
    selectCamel.classList.replace("opacity1", "opacity0");
    selectCamel.classList.replace("cursorauto", "cursornot");

    selectCamelInput.setAttribute("disabled", true);
    selectCamelInput.classList.replace("cursorauto", "cursornot");

    selectCamelBtn.classList.replace("cursor", "cursornot");
  } else if (userInput === "Camel") {
    document.getElementById("warning").style.display = "none";

    // Camel
    selectCamel.classList.replace("opacity0", "opacity1");
    selectCamel.classList.replace("cursornot", "cursorauto");

    selectCamelInput.removeAttribute("disabled");
    selectCamelInput.classList.replace("cursornot", "cursorauto");

    selectCamelBtn.classList.replace("cursornot", "cursor");

    // Cow
    selectCow.classList.replace("opacity1", "opacity0");
    selectCow.classList.replace("cursorauto", "cursornot");

    selectCowInput.setAttribute("disabled", true);
    selectCowInput.classList.replace("cursorauto", "cursornot");

    selectCowBtn.classList.replace("cursor", "cursornot");

    // Goat
    selectGoat.classList.replace("opacity1", "opacity0");
    selectGoat.classList.replace("cursorauto", "cursornot");

    selectGoatInput.setAttribute("disabled", true);
    selectGoatInput.classList.replace("cursorauto", "cursornot");

    selectGoatBtn.classList.replace("cursor", "cursornot");
  } else {
    document.getElementById("warning").style.display = "block";
  }
});

document.getElementById("cowBtn").addEventListener("click", function () {
  let inputCow = selectCowInput.value;

  if (inputCow.trim() === "") {
    document.getElementById("showCow").innerHTML = "Invalid input field";
    document.getElementById("showCow").style.color = "#d30004";

    document.getElementById("showGoat").innerHTML = "Showing result...";
    document.getElementById("showCamel").innerHTML = "Showing result...";
    document.getElementById("showGoat").style.color = "#1B4242";
    document.getElementById("showCamel").style.color = "#1B4242";

  } else {
    let cowShare = 7;
    let calculateValue = parseInt(inputCow / cowShare);
    let slaughterCow = (calculateValue * 10) / 100;
    let total = calculateValue + slaughterCow;

    document.getElementById(
      "showCow"
    ).innerHTML = `Per head Rs.${calculateValue} + 10% Slaughter Rs.${slaughterCow}, total Rs.${total}/-`;
    document.getElementById("showCow").style.color = "#1B4242";

    document.getElementById("showCamel").innerHTML = "Showing result...";
    document.getElementById("showGoat").innerHTML = "Showing result...";
  }
});

document.getElementById("goatBtn").addEventListener("click", function () {
  let inputGoat = selectGoatInput.value;

  if (inputGoat.trim() === "") {
    document.getElementById("showGoat").innerHTML = "Invalid input field";
    document.getElementById("showGoat").style.color = "#d30004";

    document.getElementById("showCow").innerHTML = "Showing result...";
    document.getElementById("showCamel").innerHTML = "Showing result...";
    document.getElementById("showCow").style.color = "#1B4242";
    document.getElementById("showCamel").style.color = "#1B4242";

  } else {
    let goatShare = 3;
    let calculateValue = parseInt(inputGoat / goatShare);
    let slaughterGoat = (calculateValue * 10) / 100;
    let total = calculateValue + slaughterGoat;

    document.getElementById(
      "showGoat"
    ).innerHTML = `Per head Rs.${calculateValue} + 10% Slaughter Rs.${slaughterGoat}, total Rs.${total}/-`;
    document.getElementById("showGoat").style.color = "#1B4242";

    document.getElementById("showCow").innerHTML = "Showing result...";
    document.getElementById("showCamel").innerHTML = "Showing result...";
  }
});

document.getElementById("camelBtn").addEventListener("click", function () {
  let inputCamel = selectCamelInput.value;

  if (inputCamel.trim() === "") {
    document.getElementById("showCamel").innerHTML = "Invalid input field";
    document.getElementById("showCamel").style.color = "#d30004";

    document.getElementById("showCow").innerHTML = "Showing result...";
    document.getElementById("showGoat").innerHTML = "Showing result...";
    document.getElementById("showCow").style.color = "#1B4242";
    document.getElementById("showGoat").style.color = "#1B4242";

  } else {
    let camelShare = 7;
    let calculateValue = parseInt(inputCamel / camelShare);
    let slaughterCamel = (calculateValue * 10) / 100;
    let total = calculateValue + slaughterCamel;

    document.getElementById(
      "showCamel"
    ).innerHTML = `Per head Rs.${calculateValue} + 10% Slaughter Rs.${slaughterCamel}, total Rs.${total}/-`;
    document.getElementById("showCamel").style.color = "#1B4242";

    document.getElementById("showCow").innerHTML = "Showing result...";
    document.getElementById("showGoat").innerHTML = "Showing result...";
  }
});
