module.exports = {
  /* https://prettier.io/docs/en/options.html */
  printWidth: 80 /* 한 줄에 80컬럼까지 허용 */,
  tabWidth: 2 /* tab을 누르면 2칸 들여쓰기 */,
  singleQuote: true /*문자열 리터럴로 " 대신 ' 을 사용 */,
  semi: true /* 문장 마지막에 ; 추가 */,
  useTabs: false /* 탭 대신 공백을 사용 */,
  trailingComma: 'all',
  proseWrap: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false /* JSX 안에서는 " 을 사용 */,
  quoteProps: 'as-needed',
  endOfLine: 'crlf',
};

// 4-3설정 따라 직접 추가
// * 설정 파일이 .rc(ex.바벨)가 아니라 .js일때는 앞에 module.exports = {} 가 필요함
// .js로 만들면 주석 작성이 가능
