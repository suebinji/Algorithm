function solution(n) {
    var answer = 0;
    let tmpList = [];
    var tmp;
    tmp = String(n);
    tmpList = tmp.split('');
    for(let i = 0 ; i < tmpList.length ; i++) {
        //if (tmpList[i] != '0') {
            answer += tmpList[i]-'0';
        //}
    }
    
    
    return answer;
}