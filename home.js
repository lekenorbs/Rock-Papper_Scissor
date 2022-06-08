// JavaScript source code
/*console.log("hello");
console.log("hello");
console.log("what is it");
alert("Yooo");
var b = "Madara Uchiha";
console.log(b);
var numb = 45;
console.log(numb);
var age = prompt("Enter your age please");
document.getElementById("Text").innerHTML = age;

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
num1 = num1 + 2;
console.log(num1);
console.log(num2);
console.log(num1 / num2);


function fun() {
    alert("Hey this is a function");
}
fun();
*/

function greetings(yourname) {
    var result = "Hello " + yourname; // String Concatenation. 
    console.log(result);
}

//var name = prompt("What is your name ?");
//greetings(name);

// Function argument.
function sumTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
//sumTwoNumbers(10, 35);

let fruits = 'Banana, Oranges, Pinnaples, Oranges, Grapes, Mangoes';
//console.log(fruits.split(','));

let student = {
    firstName : "Peter",
    secondName : "Toss",
    age : 25,
    gender : "male",
    studentInfo: function () {
        return this.age + '\n' + this.secondName + '\n' + this.gender;
    }
};

console.log(student.firstName);
console.log(student.age);
student.firstName = "Madara";
console.log(student.firstName);
console.log(student.studentInfo());