function solution(num_list) {
    var answer = 0;
    var tmpList = [];
    var tmpList2 = [];
    
    for(let i = 0 ; i < num_list.length ; i++) {
        if (num_list[i] % 2!=0) {
            //answer += num_list.map(Number);
            
            tmpList.push(num_list[i]);
        } else {
            tmpList2.push(num_list[i]);
        }
    }
    let result1 = Number(tmpList.join('')); 
    let result2 = Number(tmpList2.join('')); 
    console.log(result1+result2);
    answer = result1+result2;
    
    return answer;
}