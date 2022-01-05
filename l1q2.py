import sys

x=sys.argv[1]
sum=0
i=0
j=len(x)-1
while(i<j):
  sum=sum+int(x[i])*int(x[j])
  i=i+1
  j=j-1
if(i==j):
  sum=sum+int(x[i])
print(sum)
