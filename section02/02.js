// Title: 보이는 학생
// 핵심: answer 설정할때  첫 번째 학생은 무조건 보이는 학생으로 카운트
function solution(arr) {
    let answer = 1;
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }

    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
