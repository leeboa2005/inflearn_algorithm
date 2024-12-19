// Title: 10부제

function solution(day, arr) {
    let answer = 0;

    for (let x of arr) {
        if (x % 10 == day) answer++;
    }

    return answer;

    // Solution2
    /* for (i = 0; i < arr.length; i++) {
        if (day === Number(String(arr[i])[1])) answer += 1;
    }
    return answer; */
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
