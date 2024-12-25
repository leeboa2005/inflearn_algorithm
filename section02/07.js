// title: 봉우리
// 핵심 : dx, dy로 방향 설정
function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0]; // 행의 변화량 (위, 오른쪽, 아래, 왼쪽)
    let dy = [0, 1, 0, -1]; // 열의 변화량 (위, 오른쪽, 아래, 왼쪽)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                // 이웃한 칸(nx, ny)이 배열 범위 안에 있고, 현재 칸보다 값이 크거나 같으면
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
                    flag = 0; // 봉우리가 될 수 없음
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));
