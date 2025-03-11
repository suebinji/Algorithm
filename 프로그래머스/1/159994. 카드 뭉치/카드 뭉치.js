function solution(cards1, cards2, goal) {
    var answerList = [];
    let idx1 = 0, idx2 = 0;  // cards1과 cards2의 인덱스

    for (let i = 0; i < goal.length; i++) {
        if (idx1 < cards1.length && goal[i] === cards1[idx1]) {
            answerList.push(cards1[idx1]);
            idx1++;  // cards1에서 사용한 카드의 인덱스 증가
        } else if (idx2 < cards2.length && goal[i] === cards2[idx2]) {
            answerList.push(cards2[idx2]);
            idx2++;  // cards2에서 사용한 카드의 인덱스 증가
        } else {
            return "No";  // goal을 만들 수 없는 경우
        }
    }

    return "Yes";  // goal을 완성할 수 있으면 "Yes" 반환
}