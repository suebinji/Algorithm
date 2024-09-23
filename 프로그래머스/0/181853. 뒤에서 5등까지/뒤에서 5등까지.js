function solution(num_list) {
    var answer = [];

    num_list = num_list.sort((a, b) => a - b); 
    console.log(num_list);
    
    for (let i = 0 ; i < 5 ; i ++) {
        //console.log(num_list[i]);
        answer.push(num_list[i]);
    }
    return answer;
}