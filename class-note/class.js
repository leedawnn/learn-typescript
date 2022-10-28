// 함수를 쓰던 클래스를 쓰던 동작은 똑같다.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var capt = new Person('캡틴', 100);

// class Person {
//   // 초기화 메서드
//   constructor(name, age) {
//     console.log('생성되었습니다.');
//     this.name = name;
//     this.age = age;
//   }
// }

var seho = new Person('세호', 30); // 생성되었습니다
console.log(seho);

/* 클래스를 쓰는 이유?
 *
 * 자바나 C++같은 클래스 기반의 언어를 사용하던 개발자들이 사용하기 편하도록 만들어졌음.
 */

var user = { name: 'capt', age: 100 };
// var admin = { name: 'capt', age: 100, role: 'admin' };

// 자바스크립트에서 지향하는 프로토타입을 이용한 상속
var admin = {};
admin.__proto__ = user; // 프로토타입 상위에 user 객체를 주겠다.(상속 받겠다라는 뜻)
admin.name;
admin.age;
admin.role = 'admin';

console.log(admin);
