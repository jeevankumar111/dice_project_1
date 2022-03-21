var randomNumber1 = Math.floor(Math.random() * 6) +1;//1-6

var randomDiceImage = "dice" + randomNumber1 +".png";//dice1pmg - dice6 png

var randomImagesrc = "images/" + randomDiceImage;//images/dice.pmg - images//diced.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesrc);



var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "💪player 1 win";

}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "💪player 2  win";
}
else {
    document.querySelector("h1").innerHTML = " Draw🤘";
}
