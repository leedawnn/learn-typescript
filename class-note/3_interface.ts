// 인터페이스란 '상호간의 약속'
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}

const capt = {
  name: '캡틴'
}

// getUser(capt); 객체에 name 밖에 없어서 에러가 뜸

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c']
// arr[0] = 10; 

// 딕셔너리 패턴
interface StringRegexDictinary {
  [key: string]: RegExp;
}

var obj: StringRegexDictinary = {
  // sth: /abc/,
  // cssFile: 'css' value가 정규 표현식이 아니라서 에러
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value) {
  // obj 객체의 key값만 모아서 돌리면 value가 자동으로 stirng으로 타입 추론이 됨
}) 

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string; // 상속을 받으면 중복된 프로퍼티는 정의해주지 않아도 됨!
}

var captain: Developer = {
  language: 'ts',
  age: 100,
  name: '캡틴'
}
