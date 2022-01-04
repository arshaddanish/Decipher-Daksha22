import sys

x=sys.argv[1]
x=x.lower()
n=len(x)
sum=0
for j in range(n):
    if(j%2==0):
        sum=sum+(ord(x[j])-97)
    else:
        sum=sum-(ord(x[j])-97)
print(sum)
