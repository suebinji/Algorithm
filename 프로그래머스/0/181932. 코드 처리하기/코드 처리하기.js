function solution(code) {
    var answer = '';
    var mode = 0;
    for (let i = 0 ; i < code.length ; i++) {
        if (mode === 0) {
            if (code.charAt(i) !== '1' && i % 2 === 0) {
                answer += code.charAt(i);
            } else if (code.charAt(i) === '1') {
                mode = 1;
            }
        } else if (mode === 1) {
            if (code.charAt(i) !== '1' && i % 2 !== 0) {
                answer += code.charAt(i);
            } else if (code.charAt(i) === '1') {
                mode = 0;
            }
        }
        
    }
    if (answer === '') {
        answer = "EMPTY";
    }
    return answer;
}