function solution(my_string) {
    var answer = [];
    
    var tmpList = [];
    var tmpList2= [];
    tmpList = my_string.split("");
    //tmpList = tmpList.sort();
    //console.log(tmpList);
    let idx = 0;
    
    for (let i = 0 ; i <my_string.length;i++) {
        let str = '';
        str += my_string.slice(i);
        //console.log(str);
        tmpList2.push(str);
    }
    tmpList2 = tmpList2.sort();
    answer = tmpList2;
    return answer;
}