//  Peterson_David_assignment3.js
// David Peterson 2013/3/19
// SID 1303 assignment 3

var peakChosen // index number of peak chosen to climb
var peak = {
    peakName: "Marcy",
    peakHeight: 5344,
    peakTrail: false,
    peakTrailhead: ["St. Johns", "Upper Works", "Elk Lake"],
    peakTrailLength: [10, 9, 16],
    hikeTo: function(trailHead) {},
    
    chooseTrailhead: function () {
        console.log("The following are trailheads to the peak: ")
        for (var i = 0; i < peak.peakTrailhead.length; i++) {
            var potentialTrails = peak.peakTrailhead[i];
            console.log(potentialTrails);
        } //for
    }, //chooseTrailhead
    
    desiredTrailhead: function(trailChoice) {
        trailChoice -= 1;
        console.log("Since you desire to begin at " + peak.peakTrailhead[trailChoice] + ". The length is " + peak.peakTrailLength[trailChoice] + " miles.");
    
    } // desiredTrailhead   
}; //var

// Boolean return of trail or not
var trail2Summit = function(peakChosen) {
return json2.highPeaks2[peakChosen].peakTrail;
};




//while hiking take a 10 minute break every 60 minutes of hiking
console.log("Take a 10 minute hike every hour.");
var jerky=50;
var hikeMessage = function(minutesToHike) {console.log("Keep hiking, " + minutesToHike + " minutes until break.");}
var breakMessage = function(minutesToBreak) {console.log("Keep hiking, " + minutesToBreak + " until break.");}

// Eat Half the Remaining Jerky
var eatHalfTheJerky = function(jerkyRemaining) {
    var jerkyToEat = Math.floor(jerkyRemaining / 2);
    for (var i=jerkyToEat; i>0; i--) {
        console.log(i + " pieces of jerky left to eat on this break");
    }
    console.log ("Stop eating the jerky!");
    jerkyRemaining -= jerkyToEat;
    return jerkyRemaining;
};
// Various 
var hikeLength = [6, 5, 4];
var jerkyTaken = [50, 30, 20];
var timeHiking = [120, 90, 60];
var timeBreak = [15, 10, 5]

//THE TRIP
// Keep time of the hour
var hikingTrip = function(hoursOfHiking) {
    var timeCount = 60; //hike for 60 minutes
    var breakCount = 10; //break for 10 minutes
    for (var i = hoursOfHiking; i>0; i--) {
        //hike for 60 minutes
        while (timeCount > 10) {
            timeCount -= 10;
            hikeMessage (timeCount);
        }// while timeCount
        
        console.log("Time to take a break.");
        //eat half the jerky
        jerky = eatHalfTheJerky(jerky);
    
        while (breakCount > 0) {
            breakCount -= 5;
            console.log("Relax, there are " + breakCount + " minutes of break time left.");
        }//while breakCount
    
        console.log("Time to get moving.")
        timeCount = 60;
        breakCount = 10;
        hikeMessage (timeCount);

    } //for hours of hiking
    console.log("We are there!");
} // hikingTrip



// Begin Adventure

// Choose Peak
console.log("Which peak do you want to climb?");
for (var i=0; i < json2.highPeaks2.length; i++) {
    console.log("[" + (i+1) + "] " + json2.highPeaks2[i].peakName + " Height: " + json2.highPeaks2[i].peakHeight + " feet - Difficulty: " + json2.highPeaks2[i].peakDifficulty + " - View Rating:" + json2.highPeaks2[i].peakView);
}

//Marcy Chosen
console.log("The first peak is chosen.");
var userChoice = 1; // represent user choosing first peak
peakChosen = userChoice - 1; // set the index number

//Does the peak have a trail? If it is a trailless peak, we need map and gps //Boolean
if (trail2Summit (peakChosen)) {
    console.log("The trail up the summit is well marked. Enjoy your hike.");
} else {
    console.log("Since the summit is not marked by a trail, bring a map and gps.");
}

// List trailhead options by displaying each potential trailhead
peak.chooseTrailhead ();

// Return the desired trail (third)
peak.desiredTrailhead (3);

// make the trip
console.log("Begin Trip");
hikingTrip (hikeLength[2]);






//for (var key in highPeaks2) {
//    var peakName = highPeaks2[key];
//    console.log(key);
//    console.log(peakName);
//    console.log(highPeaks2.peakHeight[key]);
//}



console.log("finished");