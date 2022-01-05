import sys

x=sys.argv[1]

new_x=int(x)+int(x[::-1])
print(new_x)
