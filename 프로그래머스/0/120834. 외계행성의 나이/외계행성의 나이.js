function solution(age) {
    var answer = '';
    var tmpList = [];
    
    tmpList = String(age).split("");
    
    for (let num of tmpList) {
        if (Number(num) === 0) {
            answer += 'a';
        } else if (Number(num) === 1) {
            answer += 'b';
        } else if (Number(num) === 2) {
            answer += 'c';
        } else if (Number(num) === 3) {
            answer += 'd';
        } else if (Number(num) === 4) {
            answer += 'e';
        } else if (Number(num) === 5) {
            answer += 'f';
        } else if (Number(num) === 6) {
            answer += 'g';
        } else if (Number(num) === 7) {
            answer += 'h';
        } else if (Number(num) === 8) {
            answer += 'i';
        } else {
            answer += 'j';
        }
    }
    
    return answer;
}