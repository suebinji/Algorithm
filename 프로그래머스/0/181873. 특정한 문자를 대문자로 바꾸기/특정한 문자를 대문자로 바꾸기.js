function solution(my_string, alp) {
    var answer = '';
    var tmpList = [];
    if (my_string.includes(alp)) {
        //console.log('??');
        //var tmpList = [];
        tmpList = my_string.split("");
        for (let i = 0 ; i < tmpList.length ; i++) {
            if (tmpList[i]==alp) {
                //console.log('???');
                tmpList[i] = tmpList[i].toUpperCase();
            }
        }
        answer += tmpList.join('');
    } else {
        answer += my_string;
    }
    
    return answer;
}