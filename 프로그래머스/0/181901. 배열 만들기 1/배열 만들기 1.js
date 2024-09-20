function solution(n, k) {
    var answer = [];
    var fnunm = 0;
    fnunm = k;
    while(n>=k) {
        
        answer.push(k);
        k += fnunm;
    }
    
    return answer;
}