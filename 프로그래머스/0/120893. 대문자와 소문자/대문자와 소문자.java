import java.util.*;

class Solution {
    public String solution(String my_string) {
        String answer = "";
        
        for(int i = 0 ; i<my_string.length();i++){
            if(Character.isUpperCase(my_string.charAt(i))){
                //System.out.println(Character.isUpperCase(my_string.charAt(i)));
                char c;
                c = Character.toLowerCase(my_string.charAt(i));
                answer += Character.toString(c);
            } else {
                char c;
                c = Character.toUpperCase(my_string.charAt(i));
                answer += Character.toString(c);
            }
        }
        //System.out.println(answer);
        return answer;
    }
}