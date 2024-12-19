// Title: A를 #으로
function solution(s) {
    let answer = '';

    for (let x of str) {
        if (x === 'A') answer += '#';
        else answer += x;
    }

    /* Solution2
    let answer = s
    answer = answer.replace(/A/g, '#'); */

    /* Solution3
    let answer = '';

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            answer += '#';
        } else {
            answer += str[i];
        }
    } */

    return answer;
}

let str = 'BANANA';
console.log(solution(str));
