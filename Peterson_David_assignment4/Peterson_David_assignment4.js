// Peterson_David_assignment4
// SDI Project 4 1303
// David Peterson March 25, 2013
//

//sort an array by the value of the key

var sortByKey = function(recArray, recKey) {
  console.log(recArray);
  for (var i=0; i<recArray.length; i++) {
    if (recArray[i] > recArray[i+1]) {
        console.log(recArray[i] + " is greater than " + recArray[i+1]);
    } else {
        console.log(recArray[i] + " is less than " + recArray[i+1]);

    }
  }
  
    
};

var sendArray = [{a:2},{b:3},{a:1},{a:4},{a:3}]
var sendKey = "a";
console.log(sortByKey(sendArray, sendKey));

/*
Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects: �a� + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
This function also requires you to send two argument parameters. The first one
is an array of objects and the second one is a key. The function will then sort the
array of objects by the key you send. In this case, you might send an array of
objects [{a:2},{b:3}.{a:1},{a:4}] and the key �a� which will then be sorted by the
function using the key �a� and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].*/







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
� You must complete all twelve functions.
� You must submit your project on time.
� You must use comments within your code to document the sections that illustrate the
concept for which you lost points. You also need to indicate which project it was.
Below are more robust descriptions of what is needed or expected for each function.
Read them over carefully. If you still have questions, please feel free to email me.


STRING FUNCTIONS
String Functions









Array Functions








*/





/*
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

var phoneNumber = "132-313-4435";
console.log(validPhoneNumber(phoneNumber));




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




//check valid URL format - receives URL address - returns boolean
var validURL = function(receivedURL) {
//check for http:// or https://
if (receivedURL.substring(0,7) == "http://") {return true}
if (receivedURL.substring(0,8) == "https://") {return true};
return false;
};

var URL = "hdttps://dbpetedfulls@ail.com";
console.log(validURL(URL));


//Convert text into title
function makeTitle(recTitle) {
var sendStr = recTitle.charAt(0).toUpperCase();
var setUpper = false;
for(var i=1; i<recTitle.length; i++) {
    if (setUpper) {
        sendStr += recTitle.charAt(i).toUpperCase();
        setUpper = false;
        i++;
    };
    if (recTitle.charAt(i) == " ") {setUpper = true};
    sendStr += recTitle.charAt(i);

}
return sendStr;
}
console.log( makeTitle("john smith attorney at law") );


//Convert (A) changing old separator (B) to new separator (C)
function convertSeparator(recString, oldSeparator, newSeparator) {
    console.log(recString + " - " + oldSeparator + " - " + newSeparator);
var sendString = recString.charAt(0);
for(var i=1; i<recString.length; i++) {
    if (recString.charAt(i) == oldSeparator) {
        sendString += newSeparator;
        
    } else {
    sendString += recString.charAt(i);
    };
}
return sendString;
}
var string2Convert = ("john,smith,attorney,at,law")
var oldSeparator = ",";
var newSeparator = "/"; 
console.log(convertSeparator(string2Convert, oldSeparator, newSeparator));





//------------------------
//NUMBER
//------------------------


// conver number to 2 decimal places
var convert2Money = function(receivedNumber, receivedDecimal) {
return(receivedNumber.toFixed(receivedDecimal));
};

var num = 5.596789;
var dec = 3
console.log(convert2Money(num, dec));



// fuzzyMath funtion
// Receive three numeric inputs (a, b, c)
// Calculate if a is lower or high than b - result "high" or "low"
// Calculate if the number is low number is withint "c"% of high number
//                                  result is "inside" or "outside"
 
var fuzzyMatch = function(rANum, rBNum, rCNum) {
var highLow = "High";
var distance = "Inside";
var compareDistance = rBNum * (rCNum / 100)
// HIGH or LOW
if (rANum < rBNum) {
    highLow = "Low";
    var highCalc = rBNum;
} else {
    console.log(2);
    highLow = "High";
    var highCalc = rANum;
}
//INSIDE or OUTSIDE
if (rANum < compareDistance) {
    distance = "Inside";
} else {
    console.log(2);
    distance = "Outside";
}
    var returnArray = [highLow, distance];
    return returnArray;
};

var aNum = 50;
var bNum = 100;
var cNum = 60;
console.log(fuzzyMatch(aNum, bNum, cNum));


// Calculate the difference betweeen two dates, return hours or days based on format selection
var dateDifference = function(date1, date2, format) {
    var hours = 1000 * 60 * 60; // hours dividend
    var days = 1000 * 60 * 60 * 24; // days dividend
    console.log (hours + " - " + days);
    // Convert to milliseconds & Calc difference
    var dateMil1 = date1.getTime();
    var dateMil2 = date2.getTime();
    var difference = Math.abs(dateMil1 - dateMil2);
    if (format == "hours") {
        return (difference/hours);
    } else {
        return (difference/days);
    }
};

var a = new Date(2013, 3, 26, 12, 0, 0, 0);
var b = new Date(2013, 3, 25, 0, 0, 0, 0);   
console.log(dateDifference(a, b, "hours"));




// convert numeric string to numeric data type

var convertNum = function(numString) {
    var numNumber = 0
    numNumber = numString * 1;
    return numNumber
}
console.log(convertNum("42"));
if (convertNum("42") === 42) {
    console.log("Great!");
}


//find smallest value in an array that is greater than given number
var findSmallest = function(search, limit) {
    var lowest = 0
    for (var i=0; i < search.length; i++) {
        if (search[i] > limit) {
            console.log(lowest);
            if (lowest == 0) {
                lowest = search[i]; }
            if (search[i] < lowest) {
                lowest = search[i];
            }
        }
    }
};


var smallSearch = [1,4,7,9,10,14,13,15];
var smallLimit = 12
console.log(findSmallest(smallSearch, smallLimit))



// total value for array numerics (exclude character numbers)
var totalArray = function(receiveArray) {
    var returnTotal = 0;
    for (var i = 0; i < receiveArray.length; i++) {
        if (typeof receiveArray[i] == "number") {
            returnTotal += receiveArray[i];
        };
    };
    return returnTotal
}; 

var sendArray = [1, "pickles", 3, "onions", 5, "10", 6, "SDI"];
console.log("Answer is: " + (totalArray(sendArray)));
*/



