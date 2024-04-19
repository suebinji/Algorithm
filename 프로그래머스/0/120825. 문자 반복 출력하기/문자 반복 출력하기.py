def solution(my_string, n):
    answer = ''
    tmpList =[]
    
    for i in list(my_string):
        tmpList.append(i*n)
    
    answer = ''.join(tmpList)
    
    return answer