function solution(myString, pat) {
    var answer = 0;
    var tmpList = [];
    var tmpStr = '';
    tmpList = myString.split("");
    for (let str of tmpList){
        if (str ==="A") {
            tmpStr += "B";
        } else {
            tmpStr += "A";
        }
    }
    if (tmpStr.indexOf(pat) != -1) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}