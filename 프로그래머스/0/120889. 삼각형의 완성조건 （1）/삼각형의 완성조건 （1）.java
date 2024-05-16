//import java.util.*;
class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        int max = sides[0];
        int min = sides[0];
        int mid = sides[0];
        for(int i = 0 ; i< sides.length; i++) {
            if (max < sides[i]){
                max = sides[i];
            }
            else if (min > sides[i]){
                min = sides[i];
            } 
            else {
                mid = sides[i];
            }
        }
        
        if (max >= (mid + min)) {
            answer = 2;
        } else {
            answer = 1;
        }
        
        
        return answer;
    }
}