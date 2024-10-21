function solution(my_string, m, c) {
    var answer = '';
    var tmpList = [];
    for(let i=c-1 ; i < my_string.length ; i += m) {
        if (m !== c) {
            
            tmpList.push(my_string.charAt(i));
            answer = tmpList.join('');
        } else {
            tmpList.push(my_string.charAt(i));
            answer = tmpList.join('');
        }
         
    }
    
    return answer;
}