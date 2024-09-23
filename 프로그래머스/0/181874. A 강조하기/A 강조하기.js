function solution(myString) {
    var answer = '';
    
    for (let str of myString) {
        str = str.toLowerCase();
        str = str.replace("a","A");
        
        answer += str;
    }
    //answer = myString;
    return answer;
}