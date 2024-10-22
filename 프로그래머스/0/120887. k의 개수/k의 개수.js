function solution(i, j, k) {
    var answer = 0;
    
    for (let num = i; num <= j; num++) {
        let digits = num.toString();
        for (let digit of digits) {
            if (digit == k.toString()) {
                answer++;
            }
        }
    }

    return answer;
    
}