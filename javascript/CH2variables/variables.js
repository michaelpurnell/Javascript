//string
console.log("This is a string");

//New line of String
console.log("This is a \n New Line");

//concatenate string
console.log("html5" + "css" + "js" + "php");

//typeof produces a string value of the type you give it
console.log(typeof 12);
console.log(typeof "hello");
console.log(typeof true);

//booleans
console.log(3>2 + " " + 3<2);
console.log("Aardvark" < "Zoroaster");
console.log((4 >= 6 || "grass" != "green") &&
   !(12 * 2 == 144 && true));

//variables
var add = 5*5;
add = 4 * 4;
console.log(add);

//Math.Max takes the arguments and returns the greatest
//returns 2 as the min
alert(Math.max(2,4));
//returns 2 and adds 100 = 102
alert(Math.max(2,4) + 100);

//confirm displays a dialog box Yes or No
confirm("Shall we, then?");

//prompt first argument is the question and the second is the text from the user, returns text from user. 
prompt("Tell us everything you know.", "...");

//while loop to print event numbers until 12
var currentNumber = 0;
while (currentNumber <= 12){
    console.log(currentNumber);
    currentNumber = currentNumber + 2;
}

//take power 2^10
var result = 1
var counter = 0;
while(counter < 10){
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

//write a 10 line triangle using while loop
var triangle = "";
var counter = 0;
while (counter < 10){
    triangle = triangle + "*";
    console.log(triangle);   
    counter = counter + 1;
}

//write a 10 line triangle using for loop
var triangle = "";
for(var counter = 0; counter <10; counter++){
    triangle = triangle + "*";
    console.log(triangle);
}

//show all numbers below 20 which are divisible by 3 & 4
for(var counter = 0; counter < 20; counter++){
    if (counter % 3 == 0 && counter % 4 ==0){
        console.log(counter);
    }
}

//ask what is 2+2 if 4 then alert
var number = prompt("what is 2+2", "...");
if(number == 4){
    alert("Correct");
}
else{
    alert("Try again");
}

var answer;
while(true){
    answer = prompt("What is the value of 2 + 2?","");
    
    if(answer == "4"){
        alert("Correct!")
        break;
    }
    else if(answer == "3" || answer == "5"){
        alert("almost");
    }
    else{
        alert("Do better!");
    }
}