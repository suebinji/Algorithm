function solution(num_list) {
    var answer = 0;
    //var cnt = 0;
    
    for (let i = 0 ; i < num_list.length ; i++) {
        while(num_list[i] !== 1) {
            if (num_list[i] % 2 == 0 ) {
                answer++;
                num_list[i] = num_list[i]/2; 
        } else {
                answer++;
                num_list[i] = (num_list[i] -1) / 2;  
        }
        }
        
    }
    return answer;
}