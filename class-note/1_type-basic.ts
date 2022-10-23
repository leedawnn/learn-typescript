// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1, 2, 3]; // 이렇게 더 쉽게 선언할 수도 있음

// TS 튜플 => js에는 튜플이 없음. 특정 인덱스에 타입을 지정할 수 있다면 튜플임!
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: 'capt',
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: 'thor',
  age: 1000,
};

// TS 진위값
let show: boolean = true;
