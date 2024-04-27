def solution(my_string):
    answer = ''
    tmpList=[]
    for i in my_string:
        if i in ("a","e","i","o","u"):
            continue
        else:
            tmpList.append(i)
    answer = ''.join(tmpList)
    
    return answer