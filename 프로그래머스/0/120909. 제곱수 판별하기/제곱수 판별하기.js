function solution(n) {
    var answer = 0;
    
    answer = Math.sqrt(n);
    
    answer % 1 === 0 ? answer = 1 : answer = 2;
    
    return answer;
}