// Title: LRU
function solution(size, arr) {
    // let answer = Array.from({ length: size }, () => 0);
    let answer = [];
    arr.forEach((x) => {
        let pos = -1;
        for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
        if (pos === -1) {
            // for (let i = size - 1; i >= 1; i--) {
            //     answer[i] = answer[i - 1];
            // }
            answer.unshift(x);
            if (answer.length > size) answer.pop();
        } else {
            // for (let i = pos; i >= 1; i--) {
            //     answer[i] = answer[i - 1];
            // }
            answer.splice(pos, 1);
            answer.unshift(x);
        }
        answer[0] = x;
    });

    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
