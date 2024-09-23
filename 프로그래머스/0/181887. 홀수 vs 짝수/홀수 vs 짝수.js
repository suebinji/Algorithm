function solution(num_list) {
    var answer = 0;
    let result = 0;
    let result2 = 0;
    for (let i = 0 ; i < num_list.length;i++) {
        
        if (i%2==0) {
            result += num_list[i];
        } else {
            result2 += num_list[i];
        }
    
    }
    
    if(result == result2) {
        answer = result;
    }
    else if (result>result2) {
        answer = result;
    } else if (result <= result2) {
        answer = result2;
    }
    
    return answer;
}