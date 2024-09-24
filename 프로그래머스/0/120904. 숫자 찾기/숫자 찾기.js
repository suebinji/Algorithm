function solution(num, k) {
    var answer = 0;
    var str = "";
    str = String(num);
    for (let i = 0 ; i < str.length ; i++) {
        //console.log(Number(str[i]));
        if (Number(str[i]) == k) {
            return answer = (i+1);
        } else {
            answer = -1;
        }
    }
    
    
    return answer;
}