function solution(myStr) {
    var answer = [];
    answer = myStr.split(/[abc]/).filter(segment => segment !== "");
    
    return answer.length > 0 ? answer : ["EMPTY"];
}