// Title: 가운데 문자 출력
function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2);

    if (s.length % 2 === 0) answer = s[mid - 1] + s[mid];
    else answer = s[mid];

    //  Solution2
    // if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    // else answer = s.substring(mid - 1, mid + 1);

    /*  Solution3
    if (s.length % 2 === 1) answer = s.substr(mid, 1);
    else answer = s.substr(mid - 1, 2);
    */

    return answer;
}
console.log(solution('study'));
