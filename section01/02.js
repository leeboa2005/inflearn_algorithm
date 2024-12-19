// Title: 삼각형 판별하기
// 핵심: 가장 긴 막대기 < 나머지 2개의 막대기 합 -> 삼각형을 만들 수 있음
function solution(a, b, c) {
    let answer = 'YES',
        max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;

    if (sum - max <= max) answer = 'NO';
    return answer;
}

console.log(solution(13, 33, 17));
