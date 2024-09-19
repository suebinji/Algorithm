import sys

N,X = map(int,sys.stdin.readline().split())

A = list(map(int, sys.stdin.readline().split()))
#v = int(sys.stdin.readline())

for i in A:
    if i < X:
        #print(i)
        count = A.count(X)

        print(i)