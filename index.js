var rand1 = Math.floor((Math.random() * 5)+1);
var rand2 = Math.floor((Math.random() * 5)+1);
document.querySelector(".img1").setAttribute("src", "images/dice"+rand1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+rand2+".png");
if(rand1>rand2){
    document.querySelector(".container h1").innerHTML = "<i class='fas fa-flag' style='color:red;'></i> Player 1 Wins!";
}
else if(rand2>rand1){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! <i class='fas fa-flag' style='color:red;'></i>";
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!";
}