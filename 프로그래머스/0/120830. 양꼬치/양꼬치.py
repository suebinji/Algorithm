import math
def solution(n, k):
    answer = 0
    
    if n >= 10:
        answer = (12000*n) + (2000 * k)- (2000 * (math.floor((n/10))))
    else:
        answer = (12000*n) + (2000*k)
    return answer