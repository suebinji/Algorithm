function solution(my_string) {
    var answer = '';
    var tmpList = [];
    tmpList = my_string.split("");
    const uniqueArr = [...new Set(tmpList)];
    answer = uniqueArr.join('');
    
    return answer;
}