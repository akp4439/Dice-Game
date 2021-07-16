var player1 = prompt("Enter name of player1:");
var player2 = prompt("Enter name of player2:");
document.querySelectorAll("p")[0].innerHTML=player1;
document.querySelectorAll("p")[1].innerHTML=player2;


function diceRoll(){

var num1=Math.random()*6;
num1=(Math.floor(num1));
num1= num1+1;
var diceImg= "images/dice"+num1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImg);


var num2= Math.floor(Math.random()*6)+1;
var diceImg2= "images/dice"+num2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImg2);

if(num1>num2){
    //alert("Player1 Wins!");
    document.querySelector("h1").innerHTML=player1 + " Wins!";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML=player2 + " Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
}

document.querySelector("button").addEventListener("click", diceRoll);