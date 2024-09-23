function solution(num_list) {
    var answer = [];

    num_list = num_list.sort((a, b) => a - b); 
    console.log(num_list);
    
    for (let i = 5 ; i < num_list.length ; i ++) {
        //console.log(num_list[i]);
        answer.push(num_list[i]);
    }
    return answer;
}