function solution(num_list, n) {
    var answer = [];
    let idx = 0;
    for (let num of num_list) {
        
        if(idx < n) {
            answer.push(num);
            idx ++;
        }
    }
    return answer;
}