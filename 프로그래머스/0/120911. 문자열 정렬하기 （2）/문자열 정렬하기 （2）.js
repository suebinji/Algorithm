function solution(my_string) {
    var answer = '';
    
    my_string =my_string.toLowerCase();
    var tmpList  = [] ;
    tmpList = my_string.split("");
    tmpList = tmpList.sort();
    answer = tmpList.join('');
    
    return answer;
}