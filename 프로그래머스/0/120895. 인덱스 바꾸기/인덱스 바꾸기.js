function solution(my_string, num1, num2) {
    var answer = '';
    var arr = my_string.split('');
    var temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    answer = arr.join('');
    return answer;
}