function solution(my_string, target) {
    var answer = 0;
    
    if (my_string.indexOf(target) != -1) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}