// Title: 교육과정설계
function solution(need, plan) {
    let answer = 'YES';
    let queue = need.split('');

    for (let x of plan) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) return 'NO';
        }
    }
    if (queue.length > 0) return 'NO';
    return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
