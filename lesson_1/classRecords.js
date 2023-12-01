// Grading areas include exams and exercises, with the following weights:

// Grading Area	Weight
// Exam	         65%
// Exercises	   35%

// Each term has four exams, and several exercises. Every exam has a fixed maximum score of 100, 
// while exercises have varied maximum score values and counts. The total maximum point value for 
// all exercises in any term is always 100, regardless of how many exercises the students had to 
// complete. For example, a term may have five exercises with possible score maximums of [30, 20, 10, 20, 20] 
// while another term may have three exercises with possible score maximums of [20, 30, 50].

// To determine a student's grade, we first determine the student's average score from the four exams, 
// then sum all the exercise scores. We then apply the weights to compute the student's final percent grade. 
// Finally, we determine the letter equivalent grade from the student's percent grade we just computed.

// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F
// For example, let's assume a term with three exercises with maximum scores of [20, 30, 50]. 
// A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40] on her exercises. 
// To determine her final grade, we follow these steps:

// Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// Compute the student's total exercise score: 20 + 15 + 40 = 75
// Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
// Round the percent grade to the nearest integer: 81
// Lookup the letter grade in the table above: C
// Combine the percent grade and letter grade: "81 (C)"


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80], // 91.25
      exercises: [20, 15, 10, 19, 15], // 79
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// function generateClassRecordSummary(scores) {
//   // an array of score objects, with both exams and exercises
//   let scoreData = Object.keys(scores).map(student => scores[student].scores);

//   // transform the above score objects into an array of arrays for exam scores
//   let examData = scoreData.map(score => score.exams);

//   return {
//     studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
//     exams: getExamSummary(examData),
//   };
// }

// function getExamSummary(examData) {
//   let resultArray = []
//   let column = 0;
//   while (column < examData[0].length) {
//     let min = Infinity;
//     let max = -Infinity;
//     let sum = 0;
//     let row = 0;
//     while (row < examData.length) {
//       currentElement = examData[row][column]
//       if (currentElement > max) {
//         max = currentElement;
//       }
//       if (currentElement < min) {
//         min = currentElement;
//       }
//       sum += currentElement
//       row += 1;
//     }
//     resultArray.push({ average: (sum/5), minimum: min, maximum: max });
//     column += 1;
//   }
//   return resultArray;
// }


// function getStudentScore(scoreObj) {
//   // console.log(scoreObj);
//   let grade = Math.round(examAvg(scoreObj.exams) * .65 + exerciseAvg(scoreObj.exercises) * .35);
//   if (grade >= 93) {
//     return `${grade} (A)`;
//   } else if (grade >= 85) {
//     return `${grade} (B)`;
//   } else if (grade >= 77) {
//     return `${grade} (C)`;
//   } else if (grade >= 69) {
//     return `${grade} (D)`;
//   } else if (grade >= 60) {
//     return `${grade} (E)`;
//   } else {
//     return `${grade} (F)`;
//   }
// }

// function examAvg(examScores) {
//   return examScores.reduce((total, score) => total + score) / examScores.length;
// }

// function exerciseAvg(exerciseScores) {
//   return exerciseScores.reduce((total, score) => total + score);
// }

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

function generateClassRecordSummary(scores) {
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let lookupLetter = function (percentageGrade) {
    if (percentageGrade >= 93) {
      return 'A';
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return 'B';
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return 'C';
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return 'D';
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return 'E';
    } else {
      return 'F';
    }
  };

  let examsAvg = computeExamsAverage(scoreObj.exams);
  let exercisesSum = computeExercisesScore(scoreObj.exercises);
  let percentageGrade = Math.round(examsAvg * 0.65 + exercisesSum * 0.35);

  return String(percentageGrade) + ' (' + lookupLetter(percentageGrade) + ')';
}

function computeExamsAverage(exams) {
  return exams.reduce((total, score) => total + score) / exams.length;
}

function computeExercisesScore(exercises) {
  return exercises.reduce((total, score) => total + score);
}

function getExamSummary(examScoresPerStudent) {
  let scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(examScores => {
    return {
      average: parseFloat(getExamAverage(examScores)),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores),
    };
  });
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function getExamAverage(scores) {
  return (scores.reduce((total, score) => total + score) / scores.length)
            .toFixed(1);
}

function getExamMinimum(scores) {
  return scores.reduce((min, score) => (min <= score ? min : score));
}

function getExamMaximum(scores) {
  return scores.reduce((max, score) => (max >= score ? max : score));
}