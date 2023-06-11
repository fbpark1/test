"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.c = exports.a = void 0;
/*

  export ������ �Լ��� ������ �� ����Ѵ�.
  export ���Ͽ��� ���� �� ��� �����ϴ�.

  exprot default ������ �Լ��� ������ �� ����Ѵ�.
  export default �� ���Ͽ��� �� ���� ��� �����ϴ�.
*/

var a = 1;
exports.a = a;
var b = 2;
var c = 3;

// 변수나 함수를 내보낼 때 사용
// 파일에서 여러번 사용 가능 = 블록이 있는 상태니까 있는 상태로 받음
exports.c = c;
// import {a, c}
// 변수나 함수를 내보낼 때 사용
// 파일에서 한번만 사용 가능= 디폴트는 블록이 없는 상태로 받음
var _default = b; // imnport b
exports["default"] = _default;