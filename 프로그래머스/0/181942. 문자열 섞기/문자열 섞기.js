function solution(str1, str2) {
    var answer = '';
    var strList1 = [];
    var strList2 = [];
    var tmpList =[];
    strList1 = str1.split("");
    strList2 = str2.split("");
    
    for (let i = 0 ; i < strList1.length ;i++) {
       // for (let j = 0 ; j < strList2.length ; j++) {
            tmpList.push(strList1[i]);
            tmpList.push(strList2[i]);
            //console.log(strList1[i]);
            //console.log(strList2[i]);
        //}
    }
    answer = tmpList.join('');
    return answer;
}