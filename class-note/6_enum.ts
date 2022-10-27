enum Shoes { // enum을 사용할 때 값을 지정하지 않으면 자동으로 숫자형 이넘으로 취급한다. (변수가 늘어날 때마다 1씩 증가되어 할당됨)
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제 => 드롭다운 등의 목록에서 enum을 사용하는 것이 에러처리에 좋음!
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }

  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes); // enum에서 제공하는 데이터만 파라미터로 넣을 수 있음!

askQuestion('Yes');
askQuestion('예스');
askQuestion('y');
