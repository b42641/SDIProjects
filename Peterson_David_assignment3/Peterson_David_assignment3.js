//  Peterson_David_assignment3.js
// David Peterson 2013/3/19
// SID 1303 assignment 3


var peak = {
    peakName: "Marcy",
    peakHeight: 5344,
    peakTrail: true,
    peakTrailhead: ["St. Johns", "Upper Works", "Elk Lake"],
    hikeTo: function(trailHead) {},
    chooseTrailhead: function () {
        console.log("The following are trailheads to the peak: ")
        for (var i = 0; i < peak.peakTrailhead.length; i++) {
            var potentialTrails = peak.peakTrailhead[i];
            console.log(potentialTrails);
        } //for
    } //chooseTrailhead
}; //var

// List trailhead options by displaying each potential trailhead
peak.chooseTrailhead ();











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