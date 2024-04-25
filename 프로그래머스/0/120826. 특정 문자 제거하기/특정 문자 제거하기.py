def solution(my_string, letter):
    answer = ''
    tmpList = []
    for i in my_string:
        if i == letter:
            continue
        else:
            tmpList.append(i)
    
    answer = ''.join(tmpList)
    
    return answer