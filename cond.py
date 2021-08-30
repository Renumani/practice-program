#if statement/if else/nested if
num =int(input());
if num%3==0 & num%5==0:
    print('multiple by 3&5');
elif num%3==0:
    print("multiple by 3");
elif num%5==0:
    print("multiple by 5");
else:
    print("enter a valid number");

#while loop
i=1;
while i<5:
    print(i);
    i+=1;
print('finished');

#for loop 
n = 4;
for i in range(0,n):
    print(i);
