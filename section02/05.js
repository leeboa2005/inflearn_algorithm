// Title: 등수구하기
// 핵심 : 처음 answer을 Array.from({ length: n }, () => 1); 1로 초기화함
function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i] > arr[j]) answer[i]++;
        }
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
