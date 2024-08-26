function solution(arr) {
    var answer = [];
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 50  && arr[i] % 2==0) {
            answer.push(arr[i]/2);
        } else if (arr[i] < 50 && arr[i] %2 !=0) {
            answer.push(arr[i]*2);
        } else {
            answer.push(arr[i]);
        }
     //var answer = arr.map(i => i >= 50 && i % 2 == 0 ? i / 2 : i * 2);
        //answer = (arr[i] >= 50) ? arr[i]%2 : arr[i]* 2;
    }
    
    return answer;
}