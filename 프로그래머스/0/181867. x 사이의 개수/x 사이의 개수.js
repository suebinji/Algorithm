function solution(myString) {
    var answer = [];
    var tmpList = [];
    tmpList = myString.split("x");
    
    for (let str of tmpList) {
        answer.push(str.length);
        //console.log(str.length);
    }
    
    return answer;
}