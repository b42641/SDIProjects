// Peterson_David_assignment4
// SDI Project 4 1303
// David Peterson March 25, 2013
//
 
 create / add second part of calculation
 
var fuzzyMatch = function(rANum, rBNum, rCNum) {
var highLow = "High";
var distance = "Inside";
if (rANum < rBNum) {
    highLow = "Low";
    var highCalc = rBNum;
    
} else {
    console.log(2);
    highLow = "High";
    var highCalc = rANum;
    
}

    var returnArray = [highLow, distance];
    return returnArray;
};

var aNum = 50;
var bNum = 100;
var cNum = 40;
console.log(fuzzyMatch(aNum, bNum, cNum));



/*
Fuzzy-match a number: is the number above or below a number within a certain
percent?
This function confuses students the most, so please ask if you have questions.
You will send three numbers as parameters for the function. You will then
compare the first number to the second number to see if the first number is
greater than or less than the second number, and then you will use the third
number to see if the first number is within that percentage of the second number.
So, if you were to send (5, 10, 50), the function would first determine if 5 is
greater than or less than 10. It would then determine if 5 is within 50% of 10. The
function should then return the results.
Activity: Project 4 - 2


Find the number of hours or days difference between two dates.
This function requires you to send three parameters. The first two will be dates
that you want to compare, and the third will be a string to determine if the
function returns hours or days. The function will then perform the math
necessary to find the difference between the two dates and return the choice of
hours or days.


Given a string version of a number, such as “42”, return the value as an actual Number
data type, such as 42.
As you have learned, there is a difference between a number as a string data
type and a number as a Number data type. For this task, you will simply need to
send a string into the function and return it as a Number. If you want to get
creative, you also can add a conditional to determine if the string sent into the
function is a number before you do the conversion.








//String
/*var myString = "SomeText";
var myString.length = 9
myString.substring(0, 4) = Some
myString.charAt(3) = e
myString.indexOf("e") = 3
myString.lastIndexOf(e) = 6
*/

//Math
/*

Extra credit/Make-up Option:
Make-up points are available on this project. The eligibility guidelines are as follows:
• You must complete all twelve functions.
• You must submit your project on time.
• You must use comments within your code to document the sections that illustrate the
concept for which you lost points. You also need to indicate which project it was.
Below are more robust descriptions of what is needed or expected for each function.
Read them over carefully. If you still have questions, please feel free to email me.


STRING FUNCTIONS
String Functions


/*Title-case a string (split into words, then uppercase the first letter of each word).
This problem involves sending a string into the function, changing the first letter
of each word to uppercase while making sure the rest of the word is lowercase,
and then returning the string from the function so it can be output.*/

//Convert text into title
/*var makeTitle = function(receivedText) {
    var returnText = "";
    for (var i=0; i<receivedText.length; i++)    
        if(receivedText[i] == " ") {
            returnText.pop.(receivedText[i])
        }
        returnText.pop(receivedText[i].toUpperCase());
        receivedText[2] = "P";
        console.log("2nd - " + receivedText);

//        if(var==0) (receivedText[0].toUpperCase)
    
//    if (receivedText.charAt(i)=" ") {receivedText.charAt(i}
};

var sendText = "this text will become upper-case.";
console.log(makeTitle(sendText));*/
 



/*

Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the first separator changed to the second: “a,b,c” +
“,” + “/” --> “a/b/c”.
For this problem, you will need to send three arguments into your function. The
first is the string with items separated by a separator (such as a comma). The
second is the separator that is being replaced. The third parameter is the
separator you are going to use in place of the original. Thus, if you send the
parameters (“a,b,c”, “,”, “/”), the function should return the string as “a/b/c”.






Array Functions


Find the smallest value in an array than is greater than a given number.
You will need to send two items into the function. The first is an array of numbers
and the second will be a number you’ll compare to numbers within the array. You
will then return the number in the array that is the next highest number to the one
you’re using in the comparison. So, if you send the array [1,4,7,9,10,14,15] and
the number 12 into the function, it should return 14 as the next highest number.



Find the total value of just the numbers in an array, even if some of the items are not
numbers.
This one can be tricky if your array includes a string that is a number. You will
send an array into the function and have it add together the numbers in the array.
For example, if you send the array [1, “pickles”, 3, “onions”, 5, “10”, 6, “SDI”], the
function should return 15. Therefore, it should be able to recognize “10” as a
string and ignore it from the total.




Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
This function also requires you to send two argument parameters. The first one
is an array of objects and the second one is a key. The function will then sort the
array of objects by the key you send. In this case, you might send an array of
objects [{a:2},{b:3}.{a:1},{a:4}] and the key “a” which will then be sorted by the
function using the key “a” and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].

*/






//------------------------
//STRINGS
//------------------------




//check for valid phone number -receives phone number - returns boolean
var validPhoneNumber = function(receivedPhoneNumber) {
    // length must be 12
    if (receivedPhoneNumber.length != 12) {return false};
    // numbers and dashes in right places
    if (isNaN(receivedPhoneNumber.charAt(0))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(1))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(2))) {return false};
    if (receivedPhoneNumber.charAt(3) != "-") {return false};
    if (isNaN(receivedPhoneNumber.charAt(4))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(5))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(6))) {return false};
    if (receivedPhoneNumber.charAt(7) != "-") {return false};
    if (isNaN(receivedPhoneNumber.charAt(8))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(9))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(10))) {return false};
    if (isNaN(receivedPhoneNumber.charAt(11))) {return false};
// Valid Phone Number
    return true
};

/*console.log()
var phoneNumber = "132-313-4435";
console.log(validPhoneNumber(phoneNumber));
*/


/*
//check for valid email address - receives email address - returns boolean
var validEmailAddress = function(receivedEmailAddress) {
    // "." must be 4 the char from the end
    if (receivedEmailAddress.charAt(receivedEmailAddress.length-4) != ".") {return false};
    
    // only one @
    var atCount=0;
    for (var i=0; i<receivedEmailAddress.length; i++){
        if (receivedEmailAddress.charAt(i) == "@") {atCount += 1};
        if (atCount > 1) {return false};    
    }
    
    // "@" myst be between 1st and (length-4)
    for (var i=1; i < (receivedEmailAddress.length - 5); i++) {
        if (receivedEmailAddress.charAt(i) == "@") {
            return true
        }
    };
    return false;
};

var email = "dbpetedfulls@ail.com";
console.log(validEmailAddress(email));
*/


/*
//check valid URL format - receives URL address - returns boolean
var validURL = function(receivedURL) {
//check for http:// or https://
if (receivedURL.substring(0,7) == "http://") {return true}
if (receivedURL.substring(0,8) == "https://") {return true};
return false;
};

var URL = "hdttps://dbpetedfulls@ail.com";
console.log(validURL(URL));
*/


//------------------------
//NUMBER
//------------------------

/*
// conver number to 2 decimal places
var convert2Money = function(receivedNumber, receivedDecimal) {
return(receivedNumber.toFixed(receivedDecimal));
};

var num = 5.596789;
var dec = 3
console.log(convert2Money(num, dec));
*/

