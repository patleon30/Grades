// var grades = ["A", "B", "C", "D", "F"];
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 100];
var a = 0, b = 0, c = 0, d = 0, f = 0;

for (var i = 0; i < scores.length; i++) {
	if (scores[i] > 90){
		a++; 
	
	}else if (scores[i] >= 80 && scores[i] < 90) {
		b++ 
	}else if (scores[i] >= 70 && scores[i] < 80) {
		c++ 
	}else if (scores[i] >= 60 && scores[i] < 70) {
		d++ 
	}else {
		f++
}
}
	console.log ("a",a);
	console.log ("b", b);
	console.log ("c", c);
	console.log ( "d", d);
	console.log ("f", f);

scores.sort (function (a,b) {
	return a - b;
});

console.log ("sort", scores.sort (function(a,b) {
	return a - b;
}));
	

console.log ("lowest score", scores [0]);
console.log ("highest score", scores[scores.length - 1]);


// var A = 0; 
// var B = 0;
// var C= 0;
// var D = 0;
// var F = 0;

// for (var i = 0; i< score.length; i++){
// 	if (score[i] >= 91 && score[i]<=100) {
// 		console.log (score[i])
// 		A++; 
// 		console.log (`There are ${A} A's`)
	
// 	}
// }
// for (var i = 0; i< score.length; i++){
// 	if (score[i] >= 81 && score[i]<=90) {
// 		console.log (score[i])
// 		B++; 
// 		console.log (`There are ${B} B's`)
// 	}
// }
// for (var i = 0; i< score.length; i++){
// 	if (score[i] >= 71 && score[i]<=80) {
// 		console.log (score[i])
// 		C++; 
// 		console.log (`There are ${C} C's`)

// 	}
// }

// for (var i = 0; i< score.length; i++){
// 	if (score[i] >= 0 && score[i]<=60) {
// 		console.log (score[i])
// 		F++; 
// 		console.log (`There are ${F} F's`)
// 	}
// }

// for (var i = 0; i< score.length; i++){
// 	if (score[i] >= 61 && score[i]<=70) {
// 		console.log (score[i])
// 		D++; 
// 		console.log (`There are ${D} D's`)
// 	}
// }
 


// // How many of each grades??)
// var loopGrades = grades.length;

// // What is the lowest grades?
// var currentGrades = "";

// // What is the highest grades?
// var currentGrades = "";

// // Get a reference to the appropriate DOM element for grades
// var gradesElement = document.getElementById("grades");

// // Get a reference to the appropriate DOM element for score
// var scoreElement =document.getElementById("score");

// // Start looping
// for (var loopTracker= 0; loopTracker < loopGrades; loopTracker += 1) {
  
//   // Add the grade into the correct <div>
//   	currentGrades = grades[loopTracker];
//   // console.log (currentGrades)
//   	gradesElement.innerHTML += `<div>${grades}</div> `;
  
//   // Add the score into the correct <div>
//   	currentScore = score[loopTracker];
//   // console.log (currentScore)
// 	score.innerHTML += `<div>${score[i]}</div> `;
// }




