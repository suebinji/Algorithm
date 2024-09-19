function solution(s) {
    var answer = 0;

    var arr = ['zero',	'one',	'two',	'three',	'four',	'five',	'six',	'seven',	'eight',	'nine']
    
    arr.forEach((i,idx)=>s=s.replaceAll(i,idx))
    answer = Number(s);
    
    return answer;
}