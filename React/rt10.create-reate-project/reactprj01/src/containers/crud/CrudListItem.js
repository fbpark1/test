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

const StyledCrudListItem = styled.tr`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  /* 루트 태그가 <tr></tr>이므로 설정 변경 + 해당 바깥태그 삭제 */
`;

// const {...props} = props;
// 부모요소 CrudList.js에서 const item ={} 요소 내려보낸것을 받음
function CrudListItem({
  item,
  callbackDel,
  callbackUp,
  callbackDown,
  callbackSave,
}) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isEditMode, setIsEditMode] = useState(false);
  //기본적으로 false조건으로 view모드 상태로 설정

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer(
    (oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }),
    { id: 0, name: '', age: 0 },
  ); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // input태그는 ref속성이 필요: 입력된 값을 자바스크립트로 가져오기 위해
  const refInputName = useRef();
  const refInputPower = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('CrudListItem >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('CrudListItem >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('CrudListItem >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handlerDel = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    //부모의 콜백 메서드 호출: CrudeContainer.callbackDel;
    callbackDel(item);
  };
  const handlerUp = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    //부모의 콜백 메서드 호출: CrudeContainer.callbackUp;
    callbackUp(item.id);
  };
  const handlerDown = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;

    //부모의 콜백 메서드 호출: CrudeContainer.callbackDown;
    callbackDown(item.id);
  };
  const handlerEdit = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
    // 모드 바꾸기: formView -> Edit
    setIsEditMode(!isEditMode);
  };

  const handlerSave = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);

    // 유효성 검사 + 부모 콜백 메서드 호출. CrudInput 참조하여 코드를 완성하시오

    // Name 입력 여부 유효성 검사
    const name = refInputName.current.value;
    if (!name || !name.trim()) {
      alert('이름을 입력하세요');

      //     포커스 주기
      refInputName.current.focus();

      //     이벤트 취소
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    // Power 입력 여부 유효성 검사
    const power = refInputPower.current.value;
    // !power <===> power !== null ||  power !== undefined ||  power !== 0
    if (power === null || power == undefined || power < 0 || !power.trim()) {
      alert('파워을 입력하세요');

      //     포커스 주기
      refInputPower.current.focus();

      //     이벤트 취소
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    // power 값을 숫자로 바꾸시오.(문자열를 숫자로)
    const newitem = {
      /* { id, name, power} */
      id: item.id,
      name: name,
      power: Number(power),
    };

    // 부모 콜백 메서드 호출. CrudContainer.callbackSave();
    callbackSave(newitem);

    // formEdit 를 formView 로 바꾸기. isEditMode = !isEditMode;
    setIsEditMode(!isEditMode);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  let strong = '';
  if (item.power >= 300) strong = 'strong';
  // 기본적으로 strong변수는 빈 문자열, 값이 300이상일때만 strong문자 반환
  //해당 문자가 클래스네임 속성이므로 300이상일때만 속성 적용됨

  const formView = (
    <StyledCrudListItem className={strong}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.power}</td>
      <td>
        <button type="button" onClick={handlerDel}>
          Del
        </button>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerEdit}>
          Edit
        </button>
      </td>
    </StyledCrudListItem>
  );
  const formEdit = (
    <StyledCrudListItem className={strong}>
      <td>{item.id}</td>
      <td>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          defaultValue={item.name}
          ref={refInputName}
        />
      </td>
      <td>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          defaultValue={item.power}
          ref={refInputPower}
        />
      </td>
      <td>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerSave}>
          Save
        </button>
      </td>
    </StyledCrudListItem>
  );

  if (isEditMode === false) {
    return formView;
  } else return formEdit;
}

// (...props) 자리에 부모요소에서 설정된 const item={}의 내용을 받음

CrudListItem.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired, :반드시 필요한 요소일때 .isRequired
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object.isRequired,
  callbackDel: PropTypes.func.isRequired,
  callbackUp: PropTypes.func.isRequired,
  callbackDown: PropTypes.func.isRequired,
};
CrudListItem.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackDel: () => {},
  callbackUp: () => {},
  callbackDown: () => {},
};

export default CrudListItem; // React.memo(CrudListItem); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
