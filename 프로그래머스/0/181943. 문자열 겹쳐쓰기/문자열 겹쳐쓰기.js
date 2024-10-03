function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    var strList =[];
    var strList2 = [];
    strList = my_string.split("");
    strList2 = overwrite_string.split("");
    for (let i = 0; i < strList2.length ; i++){
        strList[s] = strList2[i];
        s++;
    }
    answer = strList.join('');
    return answer;
}