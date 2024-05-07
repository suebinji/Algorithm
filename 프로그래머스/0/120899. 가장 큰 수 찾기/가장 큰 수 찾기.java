class Solution {
    public int[] solution(int[] array) {
        int[] answer = new int[2];
        int max = array[0];
        int pos = 0;
        
        for(pos = 0 ; pos < array.length; pos++){
            if(array[pos] > max ){
                max = array[pos];
                answer[1] = pos;
            }
        }
        answer[0] = max;
        
        return answer;
    }
}