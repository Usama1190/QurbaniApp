let selectCow = document.getElementById('cow');
let selectCowInput = document.getElementById('cowInput');
let selectCowBtn = document.getElementById('cowBtn');

let selectGoat = document.getElementById('goat');
let selectGoatInput = document.getElementById('goatInput');
let selectGoatBtn = document.getElementById('goatBtn');

let selectCamel = document.getElementById('camel');
let selectCamelInput = document.getElementById('camelInput');
let selectCamelBtn = document.getElementById('camelBtn');


document.getElementById("enterBtn").addEventListener('click', function() {
    let userInput = document.getElementById('enter').value;

    firstLetter = userInput[0].toUpperCase();
    remainingLetters = userInput.slice(1).toLowerCase();

    userInput = firstLetter + remainingLetters;
    console.log(userInput);

    if(userInput === "Cow") {
        document.getElementById('warning').style.display = 'none';

        // Cow
        selectCow.classList.replace('opacity0', 'opacity1');
        selectCow.classList.replace('cursornot', 'cursorauto');

        selectCowInput.removeAttribute('disabled');
        selectCowInput.classList.replace('cursornot', 'cursorauto');

        selectCowBtn.classList.replace('cursornot', 'cursor');

        // Goat
        selectGoat.classList.replace('opacity1', 'opacity0');
        selectGoat.classList.replace('cursorauto', 'cursornot');

        selectGoatInput.setAttribute('disabled', true);
        selectGoatInput.classList.replace('cursorauto', 'cursornot');

        selectGoatBtn.classList.replace('cursor', 'cursornot');

        // Camel
        selectCamel.classList.replace('opacity1', 'opacity0');
        selectCamel.classList.replace('cursorauto', 'cursornot');

        selectCamelInput.setAttribute('disabled', true);
        selectCamelInput.classList.replace('cursorauto', 'cursornot');

        selectCamelBtn.classList.replace('cursor', 'cursornot');
    }
    else if(userInput === "Goat") {
        document.getElementById('warning').style.display = 'none';

        // Goat
        selectGoat.classList.replace('opacity0', 'opacity1');
        selectGoat.classList.replace('cursornot', 'cursorauto');

        selectGoatInput.removeAttribute('disabled');
        selectGoatInput.classList.replace('cursornot', 'cursorauto');

        selectGoatBtn.classList.replace('cursornot', 'cursor');

        // Cow
        selectCow.classList.replace('opacity1', 'opacity0');
        selectCow.classList.replace('cursorauto', 'cursornot');

        selectCowInput.setAttribute('disabled', true);
        selectCowInput.classList.replace('cursorauto', 'cursornot');

        selectCowBtn.classList.replace('cursor', 'cursornot');

        // Camel
        selectCamel.classList.replace('opacity1', 'opacity0');
        selectCamel.classList.replace('cursorauto', 'cursornot');

        selectCamelInput.setAttribute('disabled', true);
        selectCamelInput.classList.replace('cursorauto', 'cursornot');

        selectCamelBtn.classList.replace('cursor', 'cursornot');
    }
    else if(userInput === "Camel") {
        document.getElementById('warning').style.display = 'none';

        // Camel
        selectCamel.classList.replace('opacity0', 'opacity1');
        selectCamel.classList.replace('cursornot', 'cursorauto');

        selectCamelInput.removeAttribute('disabled');
        selectCamelInput.classList.replace('cursornot', 'cursorauto');

        selectCamelBtn.classList.replace('cursornot', 'cursor');

        // Cow
        selectCow.classList.replace('opacity1', 'opacity0');
        selectCow.classList.replace('cursorauto', 'cursornot');

        selectCowInput.setAttribute('disabled', true);
        selectCowInput.classList.replace('cursorauto', 'cursornot');

        selectCowBtn.classList.replace('cursor', 'cursornot');

        // Goat
        selectGoat.classList.replace('opacity1', 'opacity0');
        selectGoat.classList.replace('cursorauto', 'cursornot');

        selectGoatInput.setAttribute('disabled', true);
        selectGoatInput.classList.replace('cursorauto', 'cursornot');

        selectGoatBtn.classList.replace('cursor', 'cursornot');
    }
    else {
        document.getElementById('warning').style.display = 'block';
    }
});



// 