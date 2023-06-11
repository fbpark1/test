/*

  스프레드 사용법을 학습한다.

  ES 5에서는
  arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array  메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

  ES2015 에서는
  rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

  Spread 연산자는 ... 이다.
    이터러블(iterable) 객체를 "개별" 요소로 분리
    이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
    iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/ // 등호 기준으로 쓰임 구별 필요: 레스트 연산자 = 스프레드 연산자

const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]);
console.log(...cities); // 위와 동일한 결과: 서울 부산 제주
debugger;

const newcities = [...cities];
console.log(...newcities); // 스프레드 연산자 목적: 기존 배열을 복제

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];
const countries1 = east.concat(west);
console.log(east); // 원본 데이터가 변경됨 (콘솔상 변경 안됨/옛날 문법이 아닌가?)
console.log(countries1);
debugger;

const countries2 = [...east, ...west];
console.log(countries2);

// 실제 사용되진 않는 패턴이지만.. 개념 이해를 위해서(rest=함수에서 사용/spread구분하기)
const lakes = ['경포호', '화진포', '송지호', '청초호'];
const [first, ...rest] = lakes; // 첫번째 배열에 처음 배열 넣기, 나머지 요소들을 배열로 받겠다
console.log(lakes);
debugger;

const car1 = {
  type: 't1',
  color: 's1',
  model: 2017,
};

const car2 = {
  type: 't2',
  color: 's2',
  model: 2019,
};

const { type } = car1;
console.log(type); //t1
// { type } = { ...car1, ...car2 } 1줄로 축약함

const func = function ({ type }) {
  console.log(type); //t2
  debugger;
};

func({ ...car1, ...car2 }); //분해할당 연산자를 함수에 사용

//문제: spread로 새로운 객체 만들기 실습(불변객체의 복제 후 할당)
const morning = {
  breakfast: '미역국',
  lunch: '삼치구이',
};

const dinner = '스테이크';

const meals = { ...morning, dinner };

console.log(meals); // breakfast: '미역국', lunch: '삼치구이', dinner: '스테이크'
//총 3개의 프로퍼티를 갖는 객체 meals 생성됨
debugger;

// props에 출력되는 값? = rest연산자 = 함수의 매개변수로 사용
// 화살표 함수는 과거 arguments.연산자로 사용 불가, function 함수에서만 가능.
// 그래서 rest 연산자를 대체하여 쓰는 것
function childComponent(...props) {
  //callee
  console.log(props);
}

const message = 'passed from Parent Component';
childComponent(...message); //caller
debugger; // ...props = ...message (등호 기준 위치에 따라 쓰임 구분 필요)
