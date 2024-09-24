function solution(n) {
    var answer = []; // 빈 배열로 초기화
    
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                row.push(1); // 대각선 부분에는 1
            } else {
                row.push(0); // 나머지 부분에는 0
            }
        }
        answer.push(row);
    }
    
    return answer;
}
