function solution(myString) {
    var answer = '';
    
    //console.log('l'.charCodeAt());
    
    for (let str of myString) {
        if (str.charCodeAt() < 108) {
            answer += str.replace(str,'l');
        } else {
            answer += str;
        }
    }
    
    return answer;
}