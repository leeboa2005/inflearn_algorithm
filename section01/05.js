// Title: 최솟값 구하기
function solution(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        else answer = min;
    }
    console.log(arr[i]);
    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
