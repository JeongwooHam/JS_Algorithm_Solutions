/*
[안전지대]
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 
안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/

// @ notes
/*
[어떻게 풀 수 있을까?]
입출력 예 1
0 0 0 0 0 | 0
0 0 0 0 0 | 1
0 0 0 0 0 | 2
0 0 1 0 0 | 3
0 0 0 0 0 | 4
---------
0 1 2 3 4

- 지뢰 지역: (3, 2)
- 위험 지역: (2, 1), (2, 2), (2, 3), (3, 1), (3, 3), (4, 1), (4, 2), (4, 3)

입출력 예 2
0 0 0 0 0 | 0
0 0 0 0 0 | 1
0 0 0 0 0 | 2
0 0 1 1 0 | 3
0 0 0 0 0 | 4
---------
0 1 2 3 4

- 지뢰 지역: (3, 2), (3, 3)
- 위험 지역: (2, 1), (2, 2), (2, 3), (2, 4), (3, 1), (3, 4), (4, 1), (4, 2), (4, 3), (4, 4)

- 1이 있는 행(가로)의 양 옆 0은 위험 지대이다.
> (지뢰지역[0], 지뢰지역[1] - 1), (지뢰지역[0], 지뢰지역[1] + 1)
- 1이 있는 열(세로)의 위 아래 0은 위험 지대이다.
> (지뢰지역[0] - 1, 지뢰지역[1]), (지뢰지역[0] + 1, 지뢰지역[1])
- 1이 있는 곳으로부터 대각선에 위치한 네 개의 0은 위험 지대이다.
> (지뢰지역[0] - 1, 지뢰지역[1] - 1), (지뢰지역[0] - 1, 지뢰지역[1] + 1), 
  (지뢰지역[0] + 1, 지뢰지역[1] - 1), (지뢰지역[0] + 1, 지뢰지역[1] + 1),  

- 위의 조건에 해당하는 지역들을 배열에 모두 담은 뒤 중복 제거하기
- 전체 지역의 개수에서 중복 제거한 set.size 빼주기
*/

function solution(board) {
  // 전체 지역의 개수
  const length = board.length;
  const wholeLength = Math.pow(length, 2);

  // 지뢰가 있는 지역의 좌표 구하기
  const bomb = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (!!board[i][j]) bomb.push([i, j]);
    }
  }

  // 위험 지역의 좌표 구하기
  const dangerousZone = [];
  const dangerousDirection = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, -1],
    [1, 1],
  ];

  for (const [x, y] of bomb) {
    for (const [row, col] of dangerousDirection) {
      if (
        x + row < length &&
        y + col < length &&
        x + row >= 0 &&
        y + col >= 0
      ) {
        dangerousZone.push([x + row, y + col]);
      }
    }
  }

  // 중복 제거
  const result = bomb.concat(dangerousZone).filter((coordinate, i, arr) => {
    const [x, y] = coordinate;
    return (
      i ===
      arr.findIndex((coordinate) => coordinate[0] === x && coordinate[1] === y)
    );
  }).length;

  return wholeLength - result > 0 ? wholeLength - result : 0;
}

// console.log(
//   solution([
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0],
//   ])
// );

// console.log(
//   solution([
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//   ])
// );

// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//   ])
// );

console.log(
  solution([
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
/*
[실패한 테스트 케이스] : 1, 5, 7번
반례 1
0 0 1
0 0 0
0 0 0
*/