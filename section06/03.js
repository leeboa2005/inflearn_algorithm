function solution(board, moves) {
    let answer = 0; // 점수를 저장할 변수
    let stack = []; // 인형을 쌓을 스택

    // moves 배열을 순회
    moves.forEach((pos) => {
        // 각 열에 대해 인형을 찾기 위해 반복
        for (let i = 0; i < board.length; i++) {
            // 현재 열에서 인형이 있는지 확인
            if (board[i][pos - 1] !== 0) {
                // 인형을 tmp 변수에 저장
                let tmp = board[i][pos - 1];
                // 보드에서 해당 인형을 제거
                board[i][pos - 1] = 0;

                // 스택의 마지막 인형과 현재 인형이 같은지 확인
                if (tmp === stack[stack.length - 1]) {
                    // 같다면 스택에서 제거하고 점수 2점 추가
                    stack.pop();
                    answer += 2;
                } else {
                    // 다르다면 스택에 추가
                    stack.push(tmp);
                }
                // 인형을 찾았으므로 반복 종료
                break;
            }
        }
    });

    return answer;
}
