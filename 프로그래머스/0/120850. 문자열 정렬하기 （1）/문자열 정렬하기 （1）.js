function solution(my_string) {
    var answer = [];
    
    for (let str of my_string) {
        //console.log(str);
        if (Number(str)) {
            answer.push(Number(str));
        } 
        
    }
    if (my_string.indexOf('0') != -1) {
            //console.log(my_string.indexOf('0'));
            answer.push(0);
            //return;
        }
    answer = answer.sort((a, b) => a - b);
    
    return answer;
}