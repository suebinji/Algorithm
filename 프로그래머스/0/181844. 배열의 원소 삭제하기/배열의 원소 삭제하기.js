function solution(arr, delete_list) {
    var answer = [];
    
    //answer.push(arr.filter(x => !delete_list.includes(x)));
    arr = arr.filter(x => !delete_list.includes(x));
    //console.log(arr);
    for (let a of arr) {
        answer.push(a);
    }
    
    return answer;
}