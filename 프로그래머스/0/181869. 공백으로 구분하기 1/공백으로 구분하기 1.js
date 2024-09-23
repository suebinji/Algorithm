function solution(my_string) {
    var answer = [];
    var tmp = [];
    my_string = my_string.trim();
    tmp = my_string.split(" ");
    
    for (let str of tmp) {
        if (str.length > 0) {
            answer.push(str);
        }
    }
    
    return answer;
}