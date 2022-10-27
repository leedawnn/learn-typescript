// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(true);

// 타입의 장점을 살리면서 위의 문제를 해결해 나갈 수 있는 타입에 대해 알아보자.

// union type : 하나 이상의 타입을 쓸 수 있도록 하는 타입!

function logMessage(value: string | number) {
  // 이런 걸 타입 가드라고 함! => 유니온 타입의 인자를 처리할 때 정확히 어떤 타입인지 검사해야 할 경우가 있는데 이것은 타입 가드라고 한다.
  if (typeof value === 'number') {
    value.toLocaleString(); // 타입이 number라면 이 시점에서 number로 추론이 되면서, number method를 사용할 수 있게된다! => union type의 장점
  }
  if (typeof value === 'string') {
    value.toString(); // 이 시점에는 value가 string 타입!
  }
  throw new TypeError('value must be string or number!'); // 이런 식으로 에러를 날릴 수 있다.
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Student {
  name: string;
  age: number;
}

// union type
// function askSomeone(someone: Developer | Student) {
// someone.name; // 우리는 유니온 타입을 아래와 같이 가지고 있는 프로퍼티를 전부 사용할 수 있다고 생각할 것이다. 그러나, 공통된 프로퍼티만 꺼내서 사용할 수 있음!(or 개념이 아니라 and 개념인듯)
// someone.age;
// someone.skill;
// }

// intersection type
// and 개념으로 Developer와 Student가 가지고 있는 모든 프로퍼티를 사용할 수 있음!
function askSomeone(someone: Developer & Student) {
  // someone.name;
  // someone.age;
  // someone.skill;
}

var seho: string | number | boolean;
var capt: string & number & boolean;

// union type vs intersection type
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

askSomeone({ name: '디벨로퍼', skill: '웹 개발' }); // intersection이기 때문에 age 프로퍼티도 필요해
askSomeone({ name: '캡틴', age: 100 }); // intersection이라서 skill도 필요해

/* => 실무에서는 union type을 훨씬 많이 사용함!
 *    intersection type은 반드시 모든 프로퍼티를 써줘야하기 때문에,,,?
 */
