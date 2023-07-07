var  r1=Math.floor(Math.random()*6)+1;
var rdmsrc1="images/dice"+r1+".png"
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",rdmsrc1);

var  r2=Math.floor(Math.random()*6)+1;
var rdmsrc2="images/dice"+r2+".png"
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",rdmsrc2);

if(r1>r2){
    document.querySelector("h1").innerHTML="❤️player 1 wins";
}
else if(r1<r2){
    document.querySelector("h1").innerHTML="player 2 wins❤️";
    }
else{
    document.querySelector("h1").innerHTML="DRAW";
}
var playagain= document.getElementById("play");
play=()=>{
    location.reload();
}