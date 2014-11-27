//properties length
var text = "purple rain"
console.log(text["length"]);
console.log(text.length);

//object declaration
var cat = {color:"grey", name:"spot", size:47};
console.log(cat.size, cat.color, cat.name);
cat.size = 23;
console.log(cat.size);
delete cat.color;
console.log(cat);

//addind a property to an object if it doesn't exist
var empty = {};
empty.notReally = 1000;
console.log(empty.notReally);

//using variables as properties when using brackets
//between brackets it converts to string to determine the property name
var propertyName = "length";
var text = "mainLine";
console.log(text[propertyName]);

//using in to test weather an object has a certain property. It produces a boolean
var chineseBox = {};
chineseBox.content = chineseBox;
chineseBox.newProp = 20;
var newObj = {color:"Red", shape:"Circle", size:10};
console.log("content" in chineseBox);
console.log("content" in chineseBox.content);
console.log("newProp" in chineseBox);
console.log("color" in newObj);
console.log("circle" in newObj);

//compare objects, difference between having two references to the same object and having two objects with the same properties. 
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

//mailArchive for objects
var mailArchive = {0: "Dear nephew, ...(mail number 1)",
                   1:"(mail number 2)",
                   2:"mail number 3)"};
for(var current = 0; current in mailArchive; current++){
    console.log("Processing email" + " " +  current + ": ", mailArchive[current]);
}                   
            
//mailArchive for Arrays
var mailArchive = ["mail one", "mail two", "mail three"];

for(var current = 0; current < mailArchive.length; current++){
    console.log("Processing email", current, + " " + mailArchive[current]);
}

//Ex 4.2 Return upto a number using arrays
function range(number){
    var arrayNum = [];
    for(var current = 0; current <= number; current++){
        if (current < number){
            arrayNum[current] = current;
        }
    }
    return arrayNum;
}
range(5);

//string and array objects contain a number of properties that refer to function values
var letters = "abcdefg";
console.log(typeof letters.toUpperCase);
console.log(letters.toUpperCase());


//push and pop to add to arrays
var person = [];
person.push("mike");
person.push("orin");
person.push("ted");
console.log(person);
console.log(person.join(" ")); //builds a sting
console.log(person.pop()); //removes last person in array
console.log(person);

//pass a function to retrieve emails
var mailArchive = retrieveMails();

for (var i = 0; i < mailArchive.length; i++) {
  var email = mailArchive[i];
  print("Processing e-mail #", i);
  // Do more things...
}

//using split
var words = "The world is mine."
console.log(words.split(" "));

//array join and split uses a different value
var string = "a b c d e";
var array = ["a", "b", "c", "d e" ];
console.log(string.split(" ").join(" "));
console.log(array.join(" ").split(" "));

//using charAt to find specific character in  a string
var paragraph = "born 15-11-2003 (mother Spot): White Fang";
console.log(paragraph.charAt(0));
console.log(paragraph.charAt(1) == "j"); //see if the letter j is at index 1 of paragraph

//using slice to find a piece of string from first argument to the last argument
var paragraph = "born 15-11-2003 (mother Spot): White Fang";
console.log(paragraph.slice(0,4));
console.log(paragraph.slice(0,4) == "born");

//Ex. 4.4 Write a function called startsWith that takes two arguments, both strings. 
//It returns true when the first argument starts with the characters in the second argument, and false otherwise.
function startWith(string1, string2){
    return string1.slice(0, string2.length) == string2;
}
console.log(startWith("hello World","hello"));


//Ex. 4.5 Takes a paragraph as an agrument and returns an array on names
function catNames(paragraph){
    var colon = paragraph.indexOf(":");
    return paragraph.slice(colon + 2).split(", ");
}
console.log(catNames("born 20/09/2004 (mother Yellow Bess): " + "Doctor Hobbles the 2nd, Noog"));

//creating object using the new keyword, functions are used to build an object are called constructors 
var when = {year: 1980, month:2, day:1};
var when = new Date(1980, 1, 1);
console.log(when);
console.log(new Date());
console.log(new Date(1980,1,1));
console.log(new Date(2014, 2, 13, 11, 24, 30));

//retreive the contents of the Date object using get methods
var today = new Date();
console.log("Year: ", today.getFullYear(), ", month: ", today.getMonth(), ", day: ", today.getDate() );
console.log("Hour: ", today.getHours(), ", mintues ", today.getMinutes(), ", seconds: ", today.getSeconds());
console.log("Day of the week: ", today.getDay());
console.log("Time: ", today.getTime());

//compare dates
var date1 = new Date(1999, 1, 23);
var date2 = new Date(2001, 5, 12);
console.log(date1 < date2);
console.log(date1 == date2);
//cant compare two different objects even if they have the same properties.
console.log(date1 == new Date(1999, 1, 23)); 
//right way to compare dates
var date3 = new Date(1999, 1, 1);
var date4 = new Date(1999, 1, 1);
console.log(date3.getTime() == date4.getTime());

//get timezone, find out how many minutes it differs from GMT
var now = new Date();
console.log(now.getTimezoneOffset());

//Ex 4.6
function extractDate(paragraph){
    
   function numberAt(start, length){
       return Number(paragraph.slice(start, start + length));
   }
   
   return new Date(numberAt(11,4), numberAt(8, 2) -1, numberAt(5, 2));
}
console.log(extractDate("died 27/04/2006: Black Leclère"));

//Extract names of the mother cats from the paragraphs
function extractNames(paragraph){
    var start = paragraph.indexOf("(mother ")  + "(mother ".length;
    var end = paragraph.indexOf(")");
    console.log(start, end);
    return paragraph.slice(start, end);
    
}
console.log(extractNames("born 15/11/2003 (mother Spot): White Fang"));

//Ex 4.7 Write a function between that takes three arguments, all of which are strings. 
//It will return the part of the first argument that occurs between the patterns given by the second and the third arguments.
function between(string, start, end){
    var startAt = string.indexOf(start) + start.length;
    var endAt = string.indexOf(end, startAt);
    
    return string.slice(startAt, endAt);
}
console.log(between("bu ] boo [ bah ] gzz", "[ ", " ]"));

//Ex 4.8 formatDate function to add a 1 for the month
function formateDate(date){
    
    function pad(number){
        if(number > 10){
            return "0" + number;
        }
        else{
            return number;
        }
    }
    return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) + "/" + date.getFullYear();
}

console.log(formateDate(new Date(2000, 0, 1)));


//Ex 4.10 Range if two arguments are given the first indicates the start of the range, the second the end
function range(start, end){
    if(arguments.length < 2){
        end = start;
        start = 0;
    }
    
    var result = [];
    for (var i = start; i <= end; i++){
        result.push(i);
    }
    return result;
}

console.log(range(4));
console.log(range(2,5));

//Ex.4.11 Take the sum of a range
function range(start, end){
    
    var result = 0;
    for(var i = start; i < end; i++){
        result = result + i;
    }
    return result;
}
console.log(range(1, 10));







