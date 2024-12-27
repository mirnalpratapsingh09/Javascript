function sayHello(){
    console.log("Hello")
}
function sayHi(){
    console.log("Hi")
}
function sayBye(){
    console.log("Bye")
}

function sum(num1,num2,say){
    console.log(num1*num2);
    say();
}

sum(10,20,sayHello);
sum(10,20,sayHi);
sum(10,20,sayBye);
