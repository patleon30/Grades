var grades = ["A", "B", "C", "D", "F"];
var score = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
 
var A = 0; 
var B = 0;
var C= 0;
var D = 0;
var F = 0;

for (var i = 0; i< score.length; i++){
	if (score[i] >= 91 && score[i]<=100) {
		console.log (score[i])
		A++; 
		console.log (`There are ${A} A's`)
	
	}
}
for (var i = 0; i< score.length; i++){
	if (score[i] >= 81 && score[i]<=90) {
		console.log (score[i])
		B++; 
		console.log (`There are ${B} B's`)
	}
}
for (var i = 0; i< score.length; i++){
	if (score[i] >= 71 && score[i]<=80) {
		console.log (score[i])
		C++; 
		console.log (`There are ${C} C's`)

	}
}

for (var i = 0; i< score.length; i++){
	if (score[i] >= 0 && score[i]<=60) {
		console.log (score[i])
		F++; 
		console.log (`There are ${F} F's`)
	}
}

for (var i = 0; i< score.length; i++){
	if (score[i] >= 61 && score[i]<=70) {
		console.log (score[i])
		D++; 
		console.log (`There are ${D} D's`)
	}
}
 


// How many of each grades??)
var loopGrades = grades.length;

// What is the lowest grades?
var currentGrades = "";

// What is the highest grades?
var currentGrades = "";

// Get a reference to the appropriate DOM element for grades
var gradesElement = document.getElementById("grades");

// Get a reference to the appropriate DOM element for score
var scoreElement =document.getElementById("score");

// Start looping
for (var loopTracker= 0; loopTracker < loopGrades; loopTracker += 1) {
  
  // Add the grade into the correct <div>
  	currentGrades = grades[loopTracker];
  // console.log (currentGrades)
  	gradesElement.innerHTML += `<div>${grades}</div> `;
  
  // Add the score into the correct <div>
  	currentScore = score[loopTracker];
  // console.log (currentScore)
	score.innerHTML += `<div>${score[i]}</div> `;
}




