// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// 위의 코드를 제네릭 타입으로 바꿔보자. (제네릭: 함수를 호출할 때 사용할 타입을 넘겨줘서 파라미터로 들어오게 되어 자동으로 타입 추론이 됨)
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText('10'); // logText<"10">(text: "10"): "10"
// logText('hi'); // logText<"hi">(text: "hi"): "hi"

// logText<string>('하이');

// 단순히 여러 타입을 받기 위해 중복적인 함수를 생성하는 것은 좋지 않다(유지보수 측면).
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// const a = logText('a'); // string 'a'를 넣었는데도 불구하고 a의 타입은 string | number이 뜨게 됨,,
// a.split(''); // 타입 추론이 정확히 string이 되어야 문자열 메서드를 사용할 수 있다. => 유니온 타입의 단점!

// logNumber(10);

// 유니온 타입의 단점을 해결하면서 제네릭의 장점을 알아보쟈
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc'); // 이 변수는 string으로 타입 추론이 됨!
str.split(''); // 문자열 메서드도 잘 사용할 수 있음.

const login = logText<boolean>(true); // boolean으로 타입 추론이 됨

// 인터페이스에 제네릭을 선언하는 법
// interface Dropdown {
//   value: string;
//   selected: booelan;
// }

// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string | number> = { value: 10, selected: false }; // oh.,...,

// 제네릭의 타입 제한(반환값 타입 지정은 생략해줘도 되지만,, 최대한 타입 지정하는 것이 좋긴함)
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength(10); // 숫자에는 length 메서드 없으니까 당연히 안됨
logTextLength({ lengt: 10 }); // 이 객체에 length가 정의되지 않아서 에러가 뜸.

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem에 있는 key 중 하나가 제네릭이 될 것이다(이렇게 해서 제네릭이 되는 타입의 개수를 줄임)
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption('name');
