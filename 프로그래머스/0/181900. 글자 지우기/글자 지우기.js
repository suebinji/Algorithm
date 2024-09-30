function solution(my_string, indices) {
    var answer = '';
    var tmpList = [];
    tmpList = my_string.split("");
    for (let i = 0 ; i < indices.length ;i++){
        tmpList[indices[i]] = ''; 
    }
    answer = tmpList.join('');
    return answer;
}