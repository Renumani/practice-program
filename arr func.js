var alphabet = new Array('a','b','c','d','e','f','g');
console.log(alphabet);
// shift()- remove first element;
alphabet.shift();
console.log("array after shift func:"+ alphabet);
//unshift()-add values in the start of the array
alphabet.unshift('k','l');
console.log("array after unshift func:"+ alphabet);
//pop()-removes the value from the end of an array
alphabet.pop();
console.log("after pop func:"+ alphabet);
//push()-adds value to the end of an array
alphabet.push('h','i');
console.log("after push func:"+ alphabet);
//splice()-used to add or remove items from the array
//for one argument -all the element afterthe provided starting index are removed from 
//the array
alphabet.splice(2);
console.log("after splice func:"+ alphabet);
//second argument for no.of .items to be removed
alphabet.splice(2,1);
console.log("after splice with two argument:"+alphabet);
//for adding values in the array
alphabet.splice(2,2,'hello world');
console.log("after removing and adding:"+alphabet);
//slice() -  it returns the selected items
//it returns the full copy of the arrayfor without arguments
alphabet.slice();
console.log("after slice:"+alphabet);
// starting index and ending index value to remove
alphabet.slice(2,4);
console.log("after slice with index:"+ alphabet);
// negative values for removing from the end
alphabet.slice(-3,2);
console.log("after negative values:"+ alphabet);




