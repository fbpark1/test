/*

  export ������ �Լ��� ������ �� ����Ѵ�.
  export ���Ͽ��� ���� �� ��� �����ϴ�.

  exprot default ������ �Լ��� ������ �� ����Ѵ�.
  export default �� ���Ͽ��� �� ���� ��� �����ϴ�.
*/

const a = 1;
const b = 2;
const c = 3;

// 변수나 함수를 내보낼 때 사용
// 파일에서 여러번 사용 가능 = 블록이 있는 상태니까 있는 상태로 받음
export { a, c }; // import {a, c}

// 변수나 함수를 내보낼 때 사용
// 파일에서 한번만 사용 가능= 디폴트는 블록이 없는 상태로 받음
export default b; // imnport b
