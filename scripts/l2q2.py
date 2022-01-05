import sys

x=sys.argv[1]
koi=x[0]
n=x.count(koi)
res=x.replace(koi,'',n-1)
print(res)
