// Title: 중복단어제거
function solution(s) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (i == s.indexOf(s[i])) answer = s.filter();
    }

    return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
