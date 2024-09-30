function solution(myString) {
    var answer = [];
    var tmpList = [];
    tmpList = myString.split("x");
    
    tmpList = tmpList.sort();
    
    for (let str of tmpList) {
        if (str.length > 0) {
            answer.push(str);
        }
    }
    
    return answer;
}