def solution(my_string):
    answer = 0
    tmpList = []
    for i in my_string:
        if i in ("1","2","3","4","5","6","7","8","9"):
            tmpList.append(int(i))
    
    for i in tmpList:
        answer += i
    
    return answer