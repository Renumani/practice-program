{// single line arrow function
let hours = (x)=>{
    return x*60;}
let years = (y)=>{
    return y*365;
}
console.log(hours(8));
console.log(years(22));

//multi line a}rrow function
let add = (z)=>{
    let y = [z*(z+1)]/2;
	return y;
    document.write(y);
}  
console.log(add(5));
	
//Ternary operator
let t = parseInt(prompt("enter the value to bechecked"));
let div = t % 3==0?  'Divisibleby3':'Not divisibleby3';
console.log(div);
