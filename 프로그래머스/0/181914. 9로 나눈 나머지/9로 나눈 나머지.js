function solution(number) {
    var answer = 0;
    
    var strList = [];
    strList=''+number;
    
    for (let str of strList){
        answer +=Number(str);
        answer = answer % 9;
    }
    return answer;
}