// Title: 멘토링
function solution(test) {
    let answer = 0,
        tmp = [];
    let m = test.length; // 테스트 횟수
    let n = test[0].length; // 학생 수

    for (let i = 1; i <= n; i++) {
        // 멘토 후보
        for (let j = 1; j <= n; j++) {
            // 멘티 후보
            let cnt = 0; // i가 j보다 등수가 높은 테스트 수 초기화
            // 각 테스트에서 등수 비교 시작
            for (let k = 0; k < m; k++) {
                // i와 j의 등수
                let pi = 0,
                    pj = 0;
                for (let s = 0; s < n; s++) {
                    // 등수 확인
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++; // i가 j보다 등수가 높으면 카운트
            }

            if (cnt === m) {
                // 모든 테스트에서 i가 j보다 높을 때
                tmp.push([i, j]);
                answer++; // 카운트 증가
            }
        }
    }

    console.log(tmp);
    return answer; // 가능한 쌍의 총 개수 반환
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
