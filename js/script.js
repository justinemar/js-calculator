$(document).ready(function(){
var userInput=""; //initial user input
var newInput; // will hold parsed input;
var arrNum = []; //will hold push parsed input
var operatorType = []; //will hold operator usedv
var dscreen = document.getElementById("screen"); //the screen in the DOM;

/* While still experimenting i was planning to use this but i found it hard to implement.
var operators = {
        addition: function (a, b) { return a + b; },
        subtraction: function (a, b) { return a - b; },
        multiplication: function (a, b) { return a * b; },
    };

function calculate(operand, values) {
    console.log(alues.reduce(operators[operand]));
}*/

/*detect click on button numbers*/
 $(".btnnum").click(function(){
        document.getElementById("screen").innerHTML+=  $(this).val(); //display object value as innerHTML
        userInput += $(this).val(); //Get the value of btnnum (current object)
        newInput = parseFloat(userInput); //parse user input 

    });
  
/*clear current existing values */
$("#clear").click(function(){
    operatorType = []; 
    arrNum = [];
    userInput = "";
    dscreen.innerHTML = "";
});



/*Operations*/
$("#add").click(function(){
        arrNum.push(newInput); // store parse user input to array
        operatorType.push("add"); // store 'add' element to operatortype array
        dscreen.innerHTML = ""; // clear current display
        userInput=""; // clear user input
});

$("#multiply").click(function(){
        arrNum.push(newInput);
        operatorType.push("multiply");
        dscreen.innerHTML = "";
        userInput="";
});

$("#subtract").click(function(){
        arrNum.push(newInput);
        operatorType.push("subtract");
        dscreen.innerHTML = "";
        userInput="";
});



/*actual calculation*/
$("#equal").click(function(){
    arrNum.push(newInput);
    var ans = arrNum[0];
    for(var i=0;i<operatorType.length;i++){
        if(operatorType[i] === "add"){
            ans += arrNum[i + 1];
        }else if(operatorType[i] === "multiply"){
            ans *= arrNum[i + 1];
        }else if(operatorType[i] === "subtract"){
            ans -= arrNum[i + 1];
        }
    }
     
     dscreen.innerHTML = ans;
     arrNum=[];
     userInput="";

         
});






});


