import sys

x=sys.argv[1]
n=len(x)
result=''
if(n%2==0):
    for i in range(0,n,2):
        result=result+format(ord(x[i]),"x")
else:
    for i in range(1,n,2):
        result=result+format(ord(x[i]),"x")
print(result)
