// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   // a, b가 둘 다 숫자이기 때문에 반환값도 number로 타입 추론이 됨
//   return a + b;
// }

// sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식 결론
function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20, 30, 40); // 함수에서 정의하지 않은 불필요한 파라미터를 넣거나 부족할 때, 타입스크립트는 엄격하게 체크를 해줌

// 함수의 옵셔널 파라미터 - 필요에 따라서 없어도 되고 있어도 된다고 지정
function log(a: string, b?: string) {
  // ...
}

log('hello world');
log('hello ts', 'abc');
