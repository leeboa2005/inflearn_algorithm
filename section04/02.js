// Title: 뒤집은 소수
// 스트링 변환후 쪼개서 뒤집고 다시 붙이고 -> number로 변경 ( 0 삭제됨 ) -> isPrime 함수로 소수 판별

function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function solution(arr) {
    let answer = [];

    for (let x of arr) {
        let res = Number(x.toString().split('').reverse().join(''));
        if (isPrime(res)) answer.push(res);
    }

    /* Soution02
    for (x of arr) {
        let res = 0;

        while (x) {
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x / 10);
        }

        if (isPrime(res)) answer.push(res);
    } */

    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
