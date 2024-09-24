function solution(message) {
    var answer = 0;
    var tmpList = [];
    //var num = 0;
    tmpList = message.split("");
    
    for (let str of tmpList) {
        if (str.length ==0) {
            tmpList.shift();
        } 
    }
    answer = tmpList.length*2;
    return answer;
}