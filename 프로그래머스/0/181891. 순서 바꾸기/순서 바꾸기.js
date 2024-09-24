function solution(num_list, n) {
    var answer = [];
    var j = 0;
    for (let i = 0 ; i < num_list.length ; i++) {
        if (i >= n) {
            answer.push(num_list[i]);
        } else {
            answer.shift(num_list[i]);
        }
    }
    console.log(answer.length);
    console.log(num_list.length);
    while(answer.length < num_list.length) {
        answer.push(num_list[j]);
            j++;
    }
    
    return answer;
}