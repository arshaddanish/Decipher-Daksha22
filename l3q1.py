import sys

x=sys.argv[1]

n=len(x)
s=n%26
result=''
for i in x:
    asc=ord(i)
    if(asc<91):
        if(asc+s>90):
            result=result+chr(65+(asc+s)%91)
        else:
            result=result+chr(asc+s)
    else:
        if(asc+s>122):
            result=result+chr(97+(asc+s)%123)
        else:
            result=result+chr(asc+s)
print(result)

