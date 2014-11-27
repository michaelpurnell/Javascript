//simple function call 
function add(even, odd){
    return(even + odd);
}
console.log(add(3,4));

//power of number
function power(base, exponent){
    var result = 1;
    for(var count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2,10));

//absolute value of a number
function absolute(value){
    if(value < 0){
        return -value;
    }
    else{
        return value;
    }
}
console.log(absolute(-144));

//Recursive
function power(base, exponent){
    if(exponent == 0){
        return 1;
    }
    else{
        return base * power(base, exponent - 1);
    }
}
