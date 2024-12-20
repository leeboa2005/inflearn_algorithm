// Title: 대문자 변환
function solution(s) {
    let answer = '';

    for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x.toLowerCase();
    }

    return answer;
}

let str = 'StuDY';
console.log(solution(str));
