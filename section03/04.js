// Title : 가장 짧은 문자거리
// 핵심 :  p 라는 변수에 1000은 임의로 설정한 큰 값으로 초기화 하기 (초기 거리 값 설정을 위함)
// 핵심 : 왼쪽에서 오른쪽으로 특정문자와의 거리를 구하기
// 핵심 : 오른쪽에서 왼쪽도 동일하게 구한다음 더 짧은거리를 answer에 push 한다.
function solution(s, t) {
    let answer = [];
    let p = 1000;
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }

    p = 1000;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            p = 0;
        } else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
