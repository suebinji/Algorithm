function solution(binomial) {
    var answer = 0;
    var strList = [];
    
    if (binomial.indexOf('+') != -1 ||
        binomial.indexOf('-') != -1 ||
        binomial.indexOf('*') != -1) {
        strList = binomial.split(" ");
        console.log(strList);
    }
    for (let str of strList) {
        if (str === '+') {
            answer = Number(strList[0]) + Number(strList[2]);
        } else if (str === '-') {
            answer = Number(strList[0]) - Number(strList[2]);
        } else if (str === '*') {
            answer = Number(strList[0]) * Number(strList[2]);
        }
    }
    
    return answer;
}