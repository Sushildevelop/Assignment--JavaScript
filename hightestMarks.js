const marks = [80, 75, 90, 99, 98]

let highMarks = 0;

for (let i = 0; i < marks.length; i++) {
    highMarks = marks[i] > highMarks ? marks[i] : highMarks;
}
// for (let i = 0; i < marks.length; i++) {
//     if (highMarks < marks[i]) {
//         highMarks = marks[i]
//     }

// }
console.log(highMarks);