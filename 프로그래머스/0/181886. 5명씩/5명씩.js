function solution(names) {
    var answer = [];
    var idx = 0;
    for (let name of names) {
        if (idx%5==0) {
            answer.push(name);
        }
        idx = idx +1;
    }
    
    return answer;
}