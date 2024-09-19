import sys
#import math

N = int(sys.stdin.readline())

N = list(map(int, sys.stdin.readline().split()))

A, B = max(N) , min(N)
#print(max)
#B  = min(N)

#result = ''.join(A).strip()
print(B, A)