class Solution {
    public int solution(String[] s1, String[] s2) {
        int answer = 0;
        
        for (String str : s1) {
            for(String ss : s2) {
                if (str.equals(ss)) {
                    answer += 1;
                }
            }
        }
        
        return answer;
    }
}