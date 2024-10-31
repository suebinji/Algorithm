function solution(intStrs, k, s, l) {
    var answer = [];

    for(let i = 0 ; i < intStrs.length ; i++) {
        let substring = intStrs[i].substring(s, s + l);
        
        // 부분 문자열을 정수로 변환
        let num = parseInt(substring);
        
        // 변환한 정수가 k보다 크면 answer 배열에 추가
        if (num > k) {
            answer.push(num);
        }
    }
    
    return answer;
}