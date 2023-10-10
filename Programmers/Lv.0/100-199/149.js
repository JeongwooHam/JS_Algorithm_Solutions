/*
길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
*/

const solution = (str1, str2) =>
  [...str1].map((el, i) => el + [...str2][i]).join("");

console.log(solution("aaaaa", "bbbbb"));

// str2는 굳이 배열로 만들 필요 없었다..!
