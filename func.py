def sum(x,y):
    z=x+y;
    return 
x=int(input('enter the 1st number:');
y=int(input('enter the 2nd number:');
print('the sum of two number is:'+str(sum(x,y)));

 #factorial
 def factorial(num):
    answer=1;
    if(num==0 or num==1):
      return 1;
    else: 
     for i in range(1,num):
       answer=answer*num;
       num=num-1;
    return answer;
num = int(input('enter the number:'));
print('the factorial of '+str(num)+ ' is:'+str(factorial(num)));
