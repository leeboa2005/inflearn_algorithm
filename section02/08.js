// Title: 알파벳 숫자개수와 중복된 숫자 제거
function solution(s) {
    let answer = '';
    let count = {};

    for (let x of s) {
        if (count[x]) count[x] += 1;
        else count[x] = 1;
    }

    for (let c in count) {
        // console.log(count);
        answer += count[c] + c;
    }

    return answer;
}

let str = 'aaabbbbcc';
console.log(solution(str));
