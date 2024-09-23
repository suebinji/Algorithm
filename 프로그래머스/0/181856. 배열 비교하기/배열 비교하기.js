function solution(arr1, arr2) {
    var answer = 0;
    
    arr1.length > arr2.length ? answer = 1 : answer = -1;
    
    if (arr1.length == arr2.length) {
        let num1 = 0;
        let num2 = 0;
        for (let n of arr1) {
            num1 += n;
        }
        for (let n of arr2) {
            num2 += n;
        }
        num1 > num2 ? answer = 1: answer = -1;
        if (num1==num2) answer = 0;
    }
    return answer;
}