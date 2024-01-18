
// Declare a JavaScript variable named 'studentScore' with a numerical value representing a student's exam score.
// Write a JavaScript code snippet that determines the grade of the student based on the given score. Use the following grading scale:
// - A: 90-100
// - B: 80-89
// - C: 70-79
// - D: 60-69
// - F: 0-59
// Output the corresponding grade to the console.
// Ensure your code includes comments to explain each step.
// Example:
// If 'studentScore' is set to 85, the code should output "B".




///////////////////////////////////
alert("Adulthood na scam");
prompt("Are you enjoying this");
function studentScore(grade) {
    return 100 - grade;
}
var studentScore1 = studentScore(60);
var studentScore2 = studentScore(70);
var studentScore3 = studentScore(80);
var studentScore4 = studentScore(90);
console.log(studentScore1, studentScore2, studentScore3, studentScore4)


var studentScore = function(grade, fitrstName) {
    switch (grade) {
        case '75 percent':
            return fitrstName + 'got';
        case '83 percent':
            return fitrstName + 'got';
        case '91 percent':
            return fitrstName + 'got';
        default:
            return fitrstName + 'scored something else';
    }
}
console.log(studentScore('75', 'studentScore1'))
console.log(studentScore('83', 'studentScore2'))
console.log(studentScore('91', 'studentScore3'))

var studentScore = 75;
if (studentScore >= 90) {
  console.log('A');
} else if (studentScore >= 80) {
  console.log('B');
} else if (studentScore >= 70) {
  console.log('C');
} else if (studentScore >= 60) {
  console.log('D');
} else if (studentScore >= 50) {
  console.log('E');
};
  


function studentScore ( studentScore2, studentScore3, studentScore4, studentScore5, studentScore6) {

if (studentScore2 >= 90) {
    console.log('A');
} else if (studentScore3 >= 80) { 
    console.log('B');
} else if (studentScore4 >= 70){
    console.log('C');
} else if (studentScore5 >= 60) {
    console.log('D');
} else if (studentScore6 >= 50) {
    console.log('F');
}};

function gradeCalculator(studentScore) {
  let grade;
    if (studentScore >= 90 && studentScore <= 100) {
      console.log( grade = 'A')
    } else if (studentScore >= 80 && studentScore < 90) { 
      console.log( grade = 'B')
    } else if (studentScore >= 70 && studentScore < 80) {
      console.log( grade = 'C')
    } else if (studentScore >= 60 && studentScore < 70) {
      console.log( grade = 'D')
    } else {
      console.log( grade = 'E')
    }
    console.log(grade);
  };
  gradeCalculator(85);


function reverseString(str) {
  let arr = str.split("");
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr.join("")
}
console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));








