function solution(n) {
    var answer = [];
    
    answer.push(n);
    while (n > 1) {
        //
        if (n%2==0) {
        n = n/2;
        answer.push(n);
    } else if (n%2!=0) {
        n = (3 * n) + 1;
        answer.push(n);
    }
    //n -= 1;
    if (n==1) {
        break;
    }
    }
    
    return answer;
}