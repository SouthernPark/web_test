# Decision making

## comparisons

== euqality (check if two variables are equal, not check the type)  
Example: 1 == '1', 0 == false, 0 == '', null == undefined (All true)  
   
=== strictly equality (check the type and the value)   
Examle: 1 !== '1', 0 !== false, 0 !== '',
!= not equal  
!== strict not equal  

you'd better always use triple equals, except for some good reasons   


## console.log()
console.log() like print()  
console the same as Math, is an object with properties and methods  

console.err()  
console.warn()  

## alert() 

print to the user not to the console  

## prompt()  
ask the user for input 
let userInput = prompt("please enter a number:")  
type of userInput -> string  

## parseInt()
parse the initial portion integer of a string to an int, like atoi  
If not convertable, return NaN  


## script  
<script src="app.js"></script>  
we usually put the script at the end of the body of the html  
because we want the html elements to be loaded into browser before js  

## conditional statement
Like java
if(){}  
else if(){}


## Truthness and falseness(Truthy or falsy) 
All JS values have an inherent truthyness or falseness about them:  
False values:  
false, 0, ""(empty string), null, undefined, NaN  
Every other thing is true   

Truthness and falseness are used in if, else if statement  


## Logic operator
AND &&  
OR ||  
NOT !  




















