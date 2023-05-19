/*
[가운데 글자 가져오기]
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
  const n = s.length;
  return n % 2 ? s[Math.floor(n / 2)] : s.slice(n / 2 - 1, n / 2 + 1);
}

console.log(solution("abcd"));
