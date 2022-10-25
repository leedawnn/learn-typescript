// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

var seho: Person = { // 타입 별칭과 인터페이스는 선언한 타입 위에 커서를 올렸을 때 모양에 차이가 있다.
  name: '세호',
  age: 30,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean; }
function getTodo(todo: Todo) {
  
}

/* 타입 별칭의 특징 
 *
 * 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.
 */

// type vs interface

// 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 여부이다. 인터페이스는 확장 가능, 타입 별칭은 확장 불가능.
// 따라서, 가능한 interface로 선언해서 사용하는 것을 추천한다.(TS 공식문서) => 좋은 소프트웨어는 언제나 확장이 용이해야한다!


