import sys
aa = int(sys.stdin.readline().strip())
bb = int(sys.stdin.readline().strip())

b1 = bb % 10
b2 = (bb // 10) % 10
b3 = (bb // 100) % 10
r1 = aa*b1
r2 = aa*b2
r3 = aa*b3

r22 = str(r2)+'0'
r33 = str(r3)+'00'
print(r1)
print(r2)
print(r3)
print(r1 + int(r22) + int(r33))