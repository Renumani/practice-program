p = ["+","-","*","/"];
print(type(p));
#insert used to add elements in required positionsand takes two arguments
p.insert(4,{4,"**","$","@","!","#","^","%",});
m = {'greetings':'welcome'};
#append adds the value to the last index.
p.append(m);
p.append("hi"'hello');
#extend it extends the list.
p.extend("renukamani");
for le in enumerate(p):
  print(le);
print(len(p));