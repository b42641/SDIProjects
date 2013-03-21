//  Peterson_David_assignment3.js
// David Peterson 2013/3/19
// SID 1303 assignment 3


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

// List trailhead options by displaying each potential trailhead
peak.chooseTrailhead ();

// Return the desired trail (third)
peak.desiredTrailhead (3);

// If it is a trailless peak, we need map and gps
if (peak.peakTrail) {
    console.log("The trail up the summit is well marked. Enjoy your hike.");
} else {
    console.log("Since the summit is not marked by a trail, bring a map and gps.");
}

//while hiking take a 10 minute break every 60 minutes of hiking
console.log("Take a 10 minute hike every hour.");
var jerky=50;
var hikeMessage = function(minutesToHike) {console.log("Keep hiking, " + minutesToHike + " until break.");}
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

//THE TRIP
// Keep time of the hour
var timeCount = 60; //hike for 60 minutes
var breakCount = 10; //break for 10 minutes
for (var hoursOfHiking = 6; hoursOfHiking>0; hoursOfHiking--) {
    //hike for 60 minutes
    while (timeCount > 10) {
        timeCount -= 10;
        hikeMessage (timeCount);
    }// while timeCount
    
    console.log("Time to take a break.");
    jerky = eatHalfTheJerky(jerky);
    while (breakCount > 0) {
        breakCount -= 2;
        console.log("Relax, there are " + breakCount + " minutes of break time left.");

        
    }//while breakCount
    
    console.log("Time to get moving.")
    timeCount = 60;
    breakCount = 10;
    hikeMessage (timeCount);

} //for hours of hiking
console.log("We are there!");








// Climb the Highest Peaks in the Adirondacks

for (var key in json.highPeaks) {
    var peakName = json.highPeaks[key];
    console.log(key);
    console.log(peakName);
}




/*    "46Peaks": [
        {
        "name" : "Marcy",
        "peakHeight": 5344,
        "peakDifficulty": 9,
        "peakView": 10,
        "peakDistance": 14.8,
        "peakTrail": true 
        }, */
console.log("finished");