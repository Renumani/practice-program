
alert("arithmetic operators");
alert("enter 1 for addition","enter 2 for subtraction","enter 3 for multiplication");
alert("enter 4 for exponent","enter 5 for division");
var choice = parseInt(prompt("enter your choice"));
let a = parseInt(prompt("enter your first number:"));
let b = parseInt(prompt("enter your second number:"));
switch(choice<=5)
{
    case 1:
        var c=a+b;
        console.log("the sum of"+a+"and"+b+"is:"+c);
        break;
    case 2:
        c=a-b;
        console.log("the subtraction of"+a+"and"+b+"is:"+c);
        break;
    case 3:
        c=a*b;
        console.log("the product of"+a+"and"+b+"is:"+c) ;
        break;
    case 4:
        c=a**b;
        console.log("the exponantial of"+a+"and"+b+"is:"+c) ;
        break; 
    case 5:
        c=a/b;
        console.log("the division of"+a+"and"+b+"is:"+c) ;
        break; 
    default:
        console.log("enter the valid number");
        break;     
}
