function solution(s) {
    let answer = 0;

    for (let x of s) {
        if (x === x.toUpperCase()) answer++;
    }

    /* Solution2 
      for (x of s) {
        if (x >= 'A' && x <= 'Z') answer++;
    }

      /* Solution3 (아스키 코드)
      for (x of s) {
      let num = x.charCodeAt();
        if ( 65 >= num && num <= 90){
       answer++;
       } 
      }

   */

    return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
