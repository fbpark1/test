"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _console, _console2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

var cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]);
(_console = console).log.apply(_console, cities); // 위와 동일한 결과: 서울 부산 제주
debugger;
var newcities = [].concat(cities);
(_console2 = console).log.apply(_console2, _toConsumableArray(newcities)); // 스프레드 연산자 목적: 기존 배열을 복제

var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G'];
var countries1 = east.concat(west);
console.log(east); // 원본 데이터가 변경됨 (콘솔상 변경 안됨/옛날 문법이 아닌가?)
console.log(countries1);
debugger;
var countries2 = [].concat(east, west);
console.log(countries2);

// 실제 사용되진 않는 패턴이지만.. 개념 이해를 위해서(rest=함수에서 사용/spread구분하기)
var lakes = ['경포호', '화진포', '송지호', '청초호'];
var first = lakes[0],
  rest = lakes.slice(1); // 첫번째 배열에 처음 배열 넣기, 나머지 요소들을 배열로 받겠다
console.log(lakes);
debugger;
var car1 = {
  type: 't1',
  color: 's1',
  model: 2017
};
var car2 = {
  type: 't2',
  color: 's2',
  model: 2019
};
var type = car1.type;
console.log(type); //t1
// { type } = { ...car1, ...car2 } 1줄로 축약함

var func = function func(_ref) {
  var type = _ref.type;
  console.log(type); //t2
  debugger;
};
func(_objectSpread(_objectSpread({}, car1), car2)); //분해할당 연산자를 함수에 사용

//문제: spread로 새로운 객체 만들기 실습(불변객체의 복제 후 할당)
var morning = {
  breakfast: '미역국',
  lunch: '삼치구이'
};
var dinner = '스테이크';
var meals = _objectSpread(_objectSpread({}, morning), {}, {
  dinner: dinner
});
console.log(meals); // breakfast: '미역국', lunch: '삼치구이', dinner: '스테이크'
//총 3개의 프로퍼티를 갖는 객체 meals 생성됨
debugger;

// props에 출력되는 값? = rest연산자 = 함수의 매개변수로 사용
// 화살표 함수는 과거 arguments.연산자로 사용 불가, function 함수에서만 가능.
// 그래서 rest 연산자를 대체하여 쓰는 것
function childComponent() {
  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }
  //callee
  console.log(props);
}
var message = 'passed from Parent Component';
childComponent.apply(void 0, _toConsumableArray(message)); //caller
debugger; // ...props = ...message (등호 기준 위치에 따라 쓰임 구분 필요)