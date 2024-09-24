function solution(order) {
    var answer = 0;
    var str = String(order);
    var tmpList = [];
    tmpList = str.split("");
    for (let num of tmpList) {
        if (num == 3 || num == 6 || num == 9) {
            answer += 1;
        }
    }
    
    return answer;
}