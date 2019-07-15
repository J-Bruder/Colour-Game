var numberOfSquares = 6
var colours = randomColours(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomSelecter();
var correctColour = document.querySelector("h1");
var message = document.querySelector("#message");
var background1 = document.querySelector("h1");
var background2 = document.querySelector("h4");
var resetButton = document.querySelector("#changeColours");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    background1.style.backgroundColor = "steelblue";
    background2.style.backgroundColor = "steelblue";

    numberOfSquares = 3;
    colours = randomColours(numberOfSquares);
    pickedColor = randomSelecter();
    correctColour.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.background = "none";
        }
    }

})

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    background1.style.backgroundColor = "steelblue";
    background2.style.backgroundColor = "steelblue";

    numberOfSquares = 6;
    colours = randomColours(numberOfSquares);
    pickedColor = randomSelecter();
    correctColour.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.background = "block";
        }
    }

})

correctColour.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    completeReset();
    this.textContent = "New Colours"
})

for (var i = 0; i < squares.length; i++) {
    // give squares initial colours
    squares[i].style.backgroundColor = colours[i];

    // hav click listeners to squares
    squares[i].addEventListener("click", function () {
        // get colour of picked square 
        var selected = this.style.backgroundColor;

        //compare colour to correctColour
        if (selected === pickedColor) {
            resetButton.textContent = "playAgain?"
            message.textContent = "Correct";
            changeColours(selected);
            background1.style.backgroundColor = selected;
            background2.style.backgroundColor = selected;

        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })
}

function changeColours(selected) {
    //loop through squares and give them correctColour
    for (var i = 0; i < numberOfSquares; i++) {
        squares[i].style.backgroundColor = selected;
    }
}

function randomSelecter() {
    //Math random gets 0.00 - 1.00 (*6=> random num 0.00 - 5.99)
    //Math.floor => 0 - 5
    //get random num between 0-5
    var randomElement = Math.floor(Math.random() * colours.length);
    return colours[randomElement];
}

function randomColours(num) {
    //make array
    var arr = [];
    //add num of random colours 
    for (var i = 0; i < num; i++) {
        //get random colour and push to array
        console.log(i);

        arr.push(createRandomColours());
    }
    //return random array
    return arr;
}

function createRandomColours() {
    //pick red - 0-255
    var red = Math.floor(Math.random() * 256);
    //pick green - 0-255
    var green = Math.floor(Math.random() * 256);
    //pick blue - 0-255
    var blue = Math.floor(Math.random() * 256);
    //included spaces after commas because css automatically adds space
    // it won't match if they aren't included
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}

function resetColours() {
    for (var i = 0; i < squares.length; i++) {
        // give squares initial colours
        squares[i].style.backgroundColor = colours[i];
    }
}

function completeReset() {
    //on click change colours
    colours = randomColours(numberOfSquares);
    //pick new random colour
    pickedColor = randomSelecter();
    //change colour of squares
    resetColours();
    //reset background 
    background1.style.backgroundColor = "steelblue";
    background2.style.backgroundColor = "steelblue";
    //change correct colour
    correctColour.textContent = pickedColor;
    //remove (in)correct message
    message.textContent = "";

}