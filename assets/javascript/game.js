// Ready Method Function 
$(document).ready(function(){ 

// Variables 
var userTotal = 0; 
var wins= 0;
var losses =0; 
var newUserTotal="";
var totalScore =0; 

// Magic number from ranges 30-130
var randomNum = Math.floor(Math.random()*100+30);
    console.log (randomNum)

// Append magic # to id in HTML 
$("#magicNumber").text(randomNum);

//Apend wins and lossees to id in HTML 
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// Random numbers from 1-19 for each crystal 
var crys1 = Math.floor(Math.random()*18+1);
var crys2 = Math.floor(Math.random()*18+1);
var crys3 = Math.floor(Math.random()*18+1);
var crys4 = Math.floor(Math.random()*18+1);
    console.log (crys1)
    console.log (crys2)
    console.log (crys3)
    console.log (crys4)

function resetGame (){
    randomNum = Math.floor(Math.random()*100+30);
    console.log (randomNum) 
    $("#magicNumber").text(randomNum);
    crys1 = Math.floor(Math.random()*18+1);
    crys2 = Math.floor(Math.random()*18+1);
    crys3 = Math.floor(Math.random()*18+1);
    crys4 = Math.floor(Math.random()*18+1);
    userTotal= 0; 
    $("#totalScore").text(userTotal);
}  

// alert and wins added for user 
function winner () {
    alert ("Awesome, you got it!");
    wins++;
    $("numberWins").text(wins);
    resetGame();
}

// alert and losses added for user 
function loser (){
    alert ("You Lose! Better luck next time!");
    losses++;
    $("numberLosses").text(losses);
    resetGame();
}

// click functions for crys1, crys2, crys3 and crys 4
$("#img1").on("click", function(){
    userTotal = userTotal + crys1;
    console.log("NewUserTotal=" + userTotal);
    $("#totalScore").text(userTotal);

// if else conditions 
    if (userTotal == randomNum){
        winner();
    }
    else if (userTotal > randomNum){
        loser();
    }
})
$("#img2").on("click", function(){
    userTotal = userTotal + crys2;
    console.log("NewUserTotal=" + userTotal);
    $("#totalScore").text(userTotal);

// if else conditions
    if (userTotal == randomNum){
        winner();
    }
    else if (userTotal > randomNum){
        loser();
    }
})
$("#img3").on("click", function(){
    userTotal = userTotal + crys3;
    console.log("NewUserTotal=" + userTotal);
    $("#totalScore").text(userTotal);

// if else conditions
    if (userTotal == randomNum){
        winner();
    }
    else if (userTotal > randomNum){
        loser();
    }
$("#img4").on("click", function(){
    userTotal = userTotal + crys4;
    console.log("NewUserTotal=" + userTotal);
    $("#totalScore").text(userTotal);
    
    // if else conditions
    if (userTotal == randomNum){
        winner();
    }
    else if (userTotal > randomNum){
        loser();
    }
    })
});
});

