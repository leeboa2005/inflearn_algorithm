// Title: 연필개수
// 핵심 : Math 객체의 메소드 사용 하여 문제 풀기
function solution(n) {
    let answer = Math.ceil(n / 12);
    return answer;
}

console.log(solution(178));

/*  Math 객체의 주요 메소드
절대값
Math.abs(x); x의 절대값

반올림, 올림, 내림
Math.round(x); x를 반올림
Math.ceil(x); x보다 크거나 같은 최소 정수
Math.floor(x); x보다 작거나 같은 최대 정수

제곱 및 제곱근
Math.pow(base, exponent); base의 exponent 제곱
Math.sqrt(x);  x의 제곱근

로그
Math.log(x); x의 자연 로그
Math.log10(x);  x의 10을 밑으로 하는 로그

삼각 함수
Math.sin(x); x의 사인
Math.cos(x); x의 코사인
Math.tan(x); x의 탄젠트

난수 생성
Math.random(); 0 이상 1 미만의 난수

최대값 및 최소값
Math.max(...values); 주어진 값들 중 최대값
Math.min(...values); 주어진 값들 중 최소값

상수
Math.PI; 원주율 π
Math.E; 자연상수 e
*/
