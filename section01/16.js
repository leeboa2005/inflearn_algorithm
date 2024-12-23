// Title: 중복문자제거(indexOf)
// 핵심 :  indexOf는 중복되면 처음있던 위치를 알려줌
function solution(s) {
    let answer = '';
    let pos = s.indexOf('k');

    for (let i = 0; i < s.length; i++) {
        // console.log(s[i], i, s.indexOf(s[i]));
        if (i === s.indexOf(s[i])) answer += s[i];
        /* 특정 문자 찾기 
        while (pos !== -1) {
            answer++;
            pos = s.indexOf('k', pos + 1);
        }
        */
    }
    return answer;
}
console.log(solution('ksekkset'));
