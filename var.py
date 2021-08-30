#through type function types of the varibles can be indentified.
a= 10;
print("Type of a:",type(a));
b=5.6;
print("\nType of b:",type(b));
c= 2+4j;
print("\nType of c:",type(c))
d ="hello world";
print("\nType of d:",type(d));
#use of index value to access the string.
print("\n\nfirst letter of string:",d[0]);
#negative values can be used to access the last values of the strings.
print("\n\nlast value of the string:",d[-1]);
#List are similar to arrays .it don't need to be the same type.
arithopt = ["addtraction","subtraction","multiplication","division","modulo"]
print("\n\n type of arithopt:",type(arithopt));
print(arithopt[0]);
print(arithopt[2]);
print(len(arithopt));
arithopt.append(["hello"]);
#tuples are immutable and with different datatypes.
num = (1,2,3,4,5,6,7,8,9,10);
print("Type of num:",type(num));
print("the length of the tuple:",len(num));
#boolen
print(type(True));
print(type(False));
#set -unordered list
set1 = set(["addtraction","subtraction","multiplication","division","modulo"]);
print(type(set1));
#dictionary
Dict = {1:'renu','name':'subi',3:'santhi',4:10}
print(Dict);
#accessing of dictionary
print(Dict[1]);
print(Dict['name']);
print(Dict.get(4));


 
