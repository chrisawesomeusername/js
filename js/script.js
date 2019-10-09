console.log('linked js file. console.log is a built in function');

document.write('text from document.write function. this is a built in function from the javascript libarary');



document.getElementById('heading').innerHTML+='</br>I HAVE OVERIDDEN THE HTML!!!';
//not a secured way


document.getElementById('heading').innerText+='AAAAAAAAAA';
//secured but reduced performance


document.getElementById('heading').textContent+='HERE IS SOME MORE';
//secured and increased performance



//data types
//data is raw values, facts and figures.
//after processing, data will be called as information
//numeric type eg +1, -3, 4.8
//string type (non numeric charecters)
//boolean or logical type( when there is only two types of data options, off/on, true/false, yes/no)

//david-23
//daniel-15
//sheila-10

//values to be stored in a variable should be declared

var name = 'daniel';//var is a keyword used to declare a variable
//a vavriable name is used to store a value/data
//always end every statement with a semicolon;
//camelcase is prefered in javascript
var myName = 'chris';
var yourName = 'beula';
var myAge = 26;//numeric values do not reqire quotation marks
var yourAge = 16;

var a = 3;
var b = 12;

var c = a + b;

console.log(c)//produces the value of c that is calculated
console.log('c')//produces the letter c as it is treated as a stringvalue

console.log(myName + ' ' + yourName);
var x = '650';
var y = '50';

var z = x + y;
console.log(z);

//operators
//mathematical / arithmetic operators - + * /
//realational operators < (less that) > (greater than)
//<(less than or equal) >= (greater than or equal to )
//== (equal)




var myExpression = a + 25 - 3 * 2; //follows BEDMAS!!!!
console.log(myExpression);






var ageResult = myAge > yourAge;
console.log(ageResult);



var licenseAge =30;
var myEligibillity = myAge >= licenseAge;
console.log(myEligibillity) ;



if (myAge >= licenseAge) {
  alert ('you are allowed to drive!')
}
else {
  alert ('no can do buddy')
}
