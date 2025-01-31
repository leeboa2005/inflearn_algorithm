// Title: 버블정렬
function solution(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], [arr[j + 1]]] = [arr[j + 1], [arr[j]]];
            }
        }
    }
    return answer;
}

let arr = [23, 5, 11, 7, 13, 15];
console.log(solution(arr));
