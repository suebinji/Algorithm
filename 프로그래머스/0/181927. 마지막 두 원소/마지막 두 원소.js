function solution(num_list) {
    var answer = [];
    let last_num = num_list.length;
    
    for (let i = 0 ; i < num_list.length ; i++) {
        answer.push(num_list[i]);
    }  
    
    if (num_list[last_num-1] > num_list[last_num-2]) {
            answer.push(num_list[last_num-1]-num_list[last_num-2]);
        } else if (num_list[last_num-1] <= num_list[last_num-2]){
            answer.push(num_list[last_num-1]*2);
        }  
    
    return answer;
}