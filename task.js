/*Task 1*/

var subjects = [2, 10, 9, 6, 12, 3];
var Sum = 0;
for (var i in subjects) {
    Sum += subjects[i];
}
var numsCnt = subjects.length;

var average = Sum / numsCnt;
document.write('average is ' + average);
document.write("<br><br>")

/*Task 2*/

var x = 10;
var y = 20;
if (x > y) {
    document.write("x is greater than y");
    document.write("<br><br>")
} else {
    document.write(" x is less than y");
    document.write("<br><br>")
}

/*Task 3*/
var value = [];
for (var i = 0; i < 5; i++) {
    value[i] = prompt("Please enter number " + "" + (i));
}
var num = value.sort(function(a, b) { return a - b });
document.write(num);