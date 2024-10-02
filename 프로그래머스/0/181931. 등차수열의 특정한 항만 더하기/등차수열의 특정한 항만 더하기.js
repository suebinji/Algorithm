function solution(a, d, included) {
    var answer = 0;
    
    var tmpList = [];
    for (let i = 0 ; i < included.length ; i++) {
        if (included[i]===true){
            tmpList.push(a);
        }
        a += d;
    }
    for (let num of tmpList) {
        answer += Number(num);
    }
    console.log(tmpList);
    //answer = tmpList.join('')
    return answer;
}