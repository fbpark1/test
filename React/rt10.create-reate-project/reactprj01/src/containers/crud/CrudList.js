import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';
import CrudListItem from './CrudListItem';

const StyledCrudList = styled.table`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  /* 이번엔 루트 태그가 table이므로 기본 .div에서 변경 -> 전체 태그를 감싸는 <table></table>삭제 */
`;

// const {...props} = props;
// 부모요소 CrudContainer에서 설정한 state: items[]받기
function CrudList({
  items,
  callbackDel,
  callbackUp,
  callbackDown,
  callbackSave,
}) {
  // useState 를 사용한 컴포넌트의 상태값 설정

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudList >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudList >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudList >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 콜백 메서드에서 변경하고자 하는 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  // 반복하기 위해 props로 받은 items=[]에 기반한 새로운 배열 arr 생성
  // (조건 + map으로 반복하여 배열 복사)
  // 오류 방지 위해 key 추가, <CrudListItem>에서 item 설정</CrudListItem>
  const arr =
    items &&
    items.length > 0 &&
    items.map((item, index) => {
      return (
        <CrudListItem
          key={item.id}
          item={item}
          callbackDel={callbackDel}
          callbackUP={callbackUp}
          callbackDown={callbackDown}
          callbackSave={callbackSave}
        ></CrudListItem>
      );
    });
  console.log(arr);

  return (
    <StyledCrudList>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>POWER</th>
          <th>CRUD</th>
        </tr>
      </thead>
      <tbody>{arr}</tbody>
    </StyledCrudList>
  );
}

// 부모요소로부터 state설정한걸 props로 받았으므로 아래 설정 추가
CrudList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  callbackDel: PropTypes.func.isRequired,
  callbackUp: PropTypes.func.isRequired,
  callbackDown: PropTypes.func.isRequired,
  callbackSave: PropTypes.func.isRequired,
};
CrudList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  items: [],
  callbackDel: () => {},
  callbackUp: () => {},
  callbackDown: () => {},
  callbackSave: () => {},
};

export default CrudList; // React.memo(CrudList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
