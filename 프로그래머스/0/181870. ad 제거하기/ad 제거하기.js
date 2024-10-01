function solution(strArr) {
    var answer = [];
    
    for (let str of strArr){
        if (str.indexOf('ad') == -1) {
            answer.push(str);
        }
    }
    
    return answer;
}