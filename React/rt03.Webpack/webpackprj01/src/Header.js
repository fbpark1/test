import React from 'react';

//const StyledHeader = styled.div`
/*컴포넌트로 css파일 분리하기 위해 사용*/
/*&로 자기 자신을 나타내고 삼항연산자, &&, ||문을 쓸 수 있다 */
/* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
/* 스타일 상속: 참고링크*/
//`;

// const {...props} = props;
function Header() {
  return (
    <div w3-include-header="header.html">
      <header data-role="header">
        <h1>Header.html</h1>
      </header>
    </div>
  );
}

Header.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
Header.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default Header; // React.memo(Header); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
