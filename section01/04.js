// Title: 1부터 N까지의 합
function solution(n) {
    let answer = 0;
    console.log(n);

    for (i = 0; i <= n; i++) {
        answer += i;
    }

    return answer;
}

console.log(solution(6));
