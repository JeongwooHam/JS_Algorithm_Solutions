/*
[최댓값과 최솟값]
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
*/
function solution(s) {
  const result = s.split(" ").sort((a, b) => a - b);
  return result[0] + " " + result[result.length - 1];
}

// 문자열에도 Min과 Max를 쓸 수 있었다. split > 전개연산자 사용 > Min, Max 쓰면 끝!