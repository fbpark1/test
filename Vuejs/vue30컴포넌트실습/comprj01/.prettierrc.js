module.exports = {
  /* https://prettier.io/docs/en/options.html */
  printWidth: 80 /* 할 줄에 130컬럼까지 허용 */,
  tabWidth: 2 /* tab을 누르면 2칸 들여쓰기 */,
  singleQuote: true /*문자열 리터럴로 " 대신 ' 을 사용 */,
  semi: true /* 문장 마지막에 ; 추가설정 */,
  useTabs: false /* 탭 대신 spacebar 를 사용 설정 */,
  trailingComma: 'all' /*객체 생성시 자동으로 콤마 추가*/,
  proseWrap: 'always',
  bracketSpacing: true /*배열 생성시 []사이에 공간 만들기*/,
  jsxSingleQuote: false /*JSX 안에서는 " 을 사용 */,
  quoteProps: 'as-needed',
  endOfLine: 'crlf' /*OS마다 달라지는 입력 양식 통일 원할때*/,
};

/*351부터 프리티어 설정 검사기준 추가*/
/* es lint적용 안된 프로젝트의 경우 step 4-03추가 필요 */
