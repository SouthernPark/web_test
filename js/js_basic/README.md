# JS Basics
Learn JS on its own, no html and css  

Then use it with html and css  

primitive type of js:  
    Number (only one number type including integers and decimal),  
    String,  
    Boolean,  
    Null,  
    Undefined,
    Symbol (not commonly used),  
    BigInt (not commonly used).    


Where to run code ? chrome developer tools console  
How console works : REPL : Read, evaluate, print and loop  


## numbers
typeof something : return the type of something  

NaN -> not a number, but is considered as a number type  

let var = 1; (declare variable)  

constant:  
const num = 1; (can not change num anymore)  

var : the old way to make variables(do not use it)  


## boolean
true  
false  
let flag = true;  
const flag = false;  

## variable name
you can use _ , $ to name a variable    
name style usually followJavaStyle  

## string
must wrapped with quote (double or single works but not mixed)  

indexed from 0  

let str = "Hello World !"    

str[0] will get "H"
str[100] will get undefined (a type)  
str.length : return the length of the str  

"abc" + "def" : "abcdef"    
1 + "abc" : "1abc"  

"hello".search("ell") : return the first occurenc of "ell"  

template literals:  
a way that allows embed a expression into a string    
`I counted ${3+4} sheep` (like script )    
PS: have to use the back tick ` to quote not single quote '    


## undefined
Variable that does not have an assigned value are undefined.    

## Null
Intentional absence of something. Must be assigned  

## Math Object  
Contains the properties and methods for mathmatical constants and functions.  

Math.floor(1.2) -> 1  

Math.ceil(1.2) -> 2  

Math.random() -> return random decimal from [0,1)  


