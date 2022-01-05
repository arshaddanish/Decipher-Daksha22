import sys

x=sys.argv[1]

sum=0
for i in x:
    sum=sum+pow(int(i),len(x) )
print(sum)
