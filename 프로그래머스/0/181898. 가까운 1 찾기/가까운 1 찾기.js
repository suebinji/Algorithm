function solution(arr, idx) {
    var answer = 0;
    
    for (let i = 0 ; i< arr.length; i++) {
        //console.log(arr[i]);
        //console.log(i);
        if (i >= idx) {
            console.log(i);
            if (arr[i]===1) {
                return answer = i;
            } else {
                answer = -1;
            }
        }
    }
    
    return answer;
}