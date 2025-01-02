// Title: 자리수의 합
// 각각의 수를 탐색하면서 더했을때 최대값을 찾아야함
function solution(n, arr) {
    let answer,
        max = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum = x
            .toString()
            .split('')
            .reduce((a, b) => a + Number(b), 0);

        /* Solution2
        let sum = 0,
            tmp = x;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }*/

        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) answer = x;
        }
    }

    /* Solution3
        for (let i = 0; i < arr.length; i++) {
        let strNum = String(arr[i]);
        let cntSum = 0;

        for (let j = 0; j < strNum.length; j++) {
            cntSum += Number(strNum[j]);
        }

        if (cntSum > max) {
            max = cntSum;
            answer = arr[i];
        } else if (cntSum === max) {
            answer = Math.max(answer, arr[i]);
        }
    }*/

    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
