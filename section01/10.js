// Title: 문자 찾기
function solution(s, t) {
    let answer = 0;

    for (let x of s) {
        if (x === t) answer++;
    }
    /* Solution2 
      let answer = s.split(t).length; ('R' 을 구분자로 나눈 문자수를 구하기때문에 -1을 해줘야함)
       return answer - 1;
   */

    return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
