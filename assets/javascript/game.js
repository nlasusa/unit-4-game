// Ready Method Function 
$(document).ready(function(){ 

// Variables 

var wins= 0;
var losses =0; 
var totalScore =0; 

// Magic number from ranges 30-130
    var Random=Math.floor(Math.random()*100+30);
    console.log (Random)

// Append magic # to id in HTML 
$("#magicNumber").text(Random);

// Random numbers from 1-21 for each crystal 
var crys1 = Math.floor(Math.random()*20+1);
var crys2 = Math.floor(Math.random()*20+1);
var crys3 = Math.floor(Math.random()*20+1);
var crys4 = Math.floor(Math.random()*20+1);
    console.log (crys1)
    console.log (crys2)
    console.log (crys3)
    console.log (crys4)
})

$("#one").on("click", function() {
    var crys1;
    console.log (crys1);
});