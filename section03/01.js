// Title : 회문문자열
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();

    if (s.split('').reverse().join('') !== s) return 'NO';

    /* Soution02
    let answer = 'YES';

    s = s.toLowerCase();
    let len = s.length;

    for (let i = 0; i < Math.floor(len) / 2; i++) {
        if (s[i] !== s[len - i - 1]) return 'NO';
    } */

    /* Soution03
    let answer = 'YES';
    const n = s.length;
    let rvtext = '';

    for (let i = n - 1; i >= 0; i--) {
        rvtext += s[i];
    }

    if (rvtext.toLocaleLowerCase() !== s.toLocaleLowerCase()) {
        answer = 'NO';
    }
   */
    return answer;
}

let str = 'goooG';
console.log(solution(str));
