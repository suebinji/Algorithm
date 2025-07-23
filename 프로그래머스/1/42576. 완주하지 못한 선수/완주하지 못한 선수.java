import java.util.*;
class Solution {
    	public String solution(String[] participant, String[] completion) {
		String answer = "";
		HashMap<String, Integer> map = new HashMap<>();
		for(String x : participant) {
			map.put(x,map.getOrDefault(x, 0)+1);
		}
		for(String key : completion) {
			map.put(key, map.get(key) - 1);
		}
		for(String name : map.keySet()) {
			if(map.get(name) > 0) {
				return name;
			}
		}
		return answer;
	}
}