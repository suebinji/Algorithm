function solution(a, b, c) {
    var answer = 0;
    
    if (a!= b && b != c && a != c) {
        answer = a+b+c;
    }  else if (a === b && a !=c ) {
        answer =  (a + b + c) * (a**2 + b**2 + c**2 );
    }  else if (b === c && b != a) {
        answer =  (a + b + c) * (a**2 + b**2 + c**2 );
    }  else if (a === c && b != a) {
        answer =  (a + b + c) * (a**2 + b**2 + c**2 );
    } else if (a === b &&  b === c && a === c){
        answer = (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 );
    } 
    return answer;
}