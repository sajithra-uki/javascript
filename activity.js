var name1="jone";
var name2="jack";
var name3="sparrow";
var name4="doe";
var name5="bala";

function printname(){
    console.log("Hello"+name1);
    console.log("hello"+name2);
}

printname();
printname();

var a=10;
var b=20;

function sum(){
    console.log(a+b);
}

sum();

function morningGreeting(){
    console.log("good morning");
}
function eveningGreeting(){
    console.log("good evening");
}
function greetings(){
    morningGreeting();
    eveningGreeting();
}

morningGreeting();
greetings();

//pasing values to the function via parameters
//print the greetings with the name of the person given via parameter

function greetingsHello(name,town,age){
    console.log("Hello " + name);
    console.log("welcome to " + town);
    console.log("age is " + age);
}
greetingsHello("sajithra","srilanka",24)