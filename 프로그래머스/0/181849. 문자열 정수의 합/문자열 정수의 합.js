function solution(num_str) {
    var answer = 0;
    
    var tmpList = [];
    tmpList = num_str.split("");
    
    for (let i = 0 ; i < tmpList.length ; i++) {
        answer += Number(tmpList[i]);
    }
    
    return answer;
}