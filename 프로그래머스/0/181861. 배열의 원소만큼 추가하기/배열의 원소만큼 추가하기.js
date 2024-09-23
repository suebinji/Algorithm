function solution(arr) {
    var answer = [];
    
     for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            answer.push(arr[i]); // i 대신 arr[i]를 사용해야 함
        }
    }
    
    return answer;
}