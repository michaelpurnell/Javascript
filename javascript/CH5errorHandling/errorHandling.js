//throw: is a keyword that is used to raise an exception 
//try: keyword sets up an obsticale for exceptions: When the code in the block after it raises an exception the catch block will be executed
//catch: keyword to the exception value inside this block 

function lastElement(array){
    
    if(array.length > 0){
        return array[array.length - 1];
    }
    else{
        throw "Can not take the last element of an empty array";
    }
}

function lastElementPlusTen(array){
    return lastElement(array) + 10;
}

try{
    console.log(lastElementPlusTen([]));
}
catch (error){
    console.log("Something went wrong:", error);
}