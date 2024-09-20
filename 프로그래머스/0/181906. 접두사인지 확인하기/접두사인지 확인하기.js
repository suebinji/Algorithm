function solution(my_string, is_prefix) {
    var answer = 0;
    
    for (let i = 0 ; i < is_prefix.length;i++) {
        if(my_string[i] == is_prefix[i]) {
            
            if (is_prefix.length > my_string.length) {
                answer = 0;
            } else {
                answer = 1;
            }
        } else {
           return 0;
        }
    }
    
    return answer;
}