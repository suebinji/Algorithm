class Solution {
    public int solution(int n) {
        int answer = 0;
        String three = transform(n);
        return transToTen(three, 0);
    }

    private String transform(int n){
        if (n < 3) return String.valueOf(n);

        return transform(n / 3) + String.valueOf(n % 3);
    }

    private int transToTen(String str, int level){
        if (level == str.length()) return 0;

        return (str.charAt(level) - '0') * (int) Math.pow(3, level) + transToTen(str, level + 1);
    }

}