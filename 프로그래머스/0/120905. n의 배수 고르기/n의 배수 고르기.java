class Solution {
    public int[] solution(int n, int[] numlist) {
        //int[] answer = {};
        int a = 0;

        for(int i = 0 ; i < numlist.length; i ++){
            if (numlist[i] % n  == 0) {
                a++;
            }
        }
        int b = 0;
        int[] answer = new int[a];
        for(int i = 0 ; i < numlist.length; i ++){
            if (numlist[i] % n  == 0) {
                answer[b] = numlist[i];
                b++;
            }
        }
        return answer;
    }
}