import sys

n_list = []

for i in range(1,10):
    N = int(sys.stdin.readline())
    n_list.append(N)
    
M = max(n_list)
print(M)
print(n_list.index(M)+1)