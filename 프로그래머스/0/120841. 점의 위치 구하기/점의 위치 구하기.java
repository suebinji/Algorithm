class Solution {
    public int solution(int[] dot) {
        int answer = 0;
        //int num0 = 0;
        //int num1 = 1;
        
        if(dot[0] > 0 && dot[1] > 0){
            answer = 1;
        } else if (dot[0] > 0 && dot[1] < 0) {
            answer = 4;
        } else if (dot[0] < 0 && dot[1] > 0) {
            answer = 2;
        } else{
            answer = 3;
        }
        
        return answer;
    }
}