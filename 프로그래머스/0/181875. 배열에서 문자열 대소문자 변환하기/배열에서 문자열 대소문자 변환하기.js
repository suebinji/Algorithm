function solution(strArr) {
    var answer = [];
    var idx = 0;
    
    for (let str of strArr) {
        if (idx % 2 != 0) {
            str = str.toUpperCase();
            answer.push(str);
        } else {
            str = str.toLowerCase();
            answer.push(str);
        }
        idx = idx + 1;
    }
    //answer = strArr;
    return answer;
}