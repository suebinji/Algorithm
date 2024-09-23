function solution(myString, pat) {
    var answer = 0;
    
    pat = pat.toLowerCase();
    myString = myString.toLowerCase();
    if (myString.indexOf(pat) != -1) {
        answer = 1;
    }
    
    return answer;
}