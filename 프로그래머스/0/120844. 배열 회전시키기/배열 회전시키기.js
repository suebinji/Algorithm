function solution(numbers, direction) {
    var answer = [];
    
    if (direction == 'right') {
        let num = 0;
        let len1 = 0;
        let len2 = numbers.length - 1;
        num = numbers.pop();
        answer.push(num);
        
        while(len1<len2) {
            answer.push(numbers[len1]);
            len1 ++;
        }
    } else {
        let num = 0;
        let len1 = 0;
        let len2 = numbers.length - 1;
        num  = numbers.shift();
        //answer.push(num);
        
        while(len1<len2) {
            answer.push(numbers[len1]);
            len1 ++;
        }
        answer.push(num);
        
    }
    
    return answer;
}