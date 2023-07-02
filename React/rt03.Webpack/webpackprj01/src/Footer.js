import React from 'react';

// const {...props} = props;
function Footer() {
  return (
    <div w3-include-footer="footer.html">
      <footer data-role="footer">
        <h1>Footer.html</h1>
      </footer>
    </div>
  );
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer; // React.memo(Header); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
