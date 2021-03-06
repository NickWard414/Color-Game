var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
   setupModeButtons();
   setupSquares();    
    reset();

}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // Add click listeners to squares
        squares[i].addEventListener("click", function(){
           var clickedColor = this.style.backgroundColor;
    
           if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT!";
                correctColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?"
           }else{
               this.style.backgroundColor = "#232323";
               messageDisplay.textContent = "TRY AGAIN!";
           }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
}

resetBtn.addEventListener("click", function(){
    reset();
});

colorDisplay.textContent = pickedColor;


function correctColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
   var rand =  Math.floor(Math.random() * colors.length);
    return colors[rand];
};

function generateRandomColors(num){
    var colorArray = [];

    for(var i = 0; i < num; i++){
      colorArray.push(randomColor());
    };
    return colorArray;
};

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
    
};


