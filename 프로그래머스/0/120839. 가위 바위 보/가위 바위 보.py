def solution(rsp):
    answer = ''
    tmpList = []
    
    if len(rsp) == 1:
        for i in rsp:
            if i == "2":
                answer = "0"
            elif i == "0":
                answer = "5"
            elif i == "5":
                answer = "2"
    else:
        for i in rsp:
            if i == "2":
                tmpList.append("0")
            elif i == "0":
                tmpList.append("5")
            elif i == "5":
                tmpList.append("2")
        answer = ''.join(tmpList)
    
    return answer