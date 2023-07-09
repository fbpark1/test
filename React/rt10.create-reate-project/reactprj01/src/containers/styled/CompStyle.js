import React, { useState, useEffect, useRef, useCallback, useMemo, useReducer, Fragment, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { BrowserRouter, Routes, Route, NavLink, useParams, useLocation, useHistory, useNavigate } from 'react-router-dom';


//스타일 설정을 위한 단독 컴포넌트
const StyledCompStyle = styled.div`
  .App {
    display: inline-block;
    background-color: gray;
    border: 10px solid black;
    height: 63px;
    width: 300px;
  }
`;


const StyledCircle = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  /* css코드 그대로 복사하여 작성 가능 = 자동으로 적용됨, 5-3설정대로 변경 */
  .App{
    width: 5rem;
    height: 5rem;
    background: black;
    border-radius: 50%;
    margin: auto;
  }
`;// 스타일 컴포넌트 끝

// const {...props} = props;
function CompStyle({
  ...props
}) {

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCompStyle>
      <h2>styled-components 로 만든</h2>
      <div className="App">styled-components 스타일로 만든</div>

      <hr></hr>
      <StyledCircle></StyledCircle>
    </StyledCompStyle>
  );
}

export default CompStyle; // React.memo(CompStyle); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정