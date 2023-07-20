import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea, select {
  margin: 0;
  padding: 0;
  border: 0;
}

* {
  box-sizing: border-box ;
}

html {
  font-family: 'Pretendard';
  font-size: 62.5%; // REM계산을 쉽게 하기 위해 기본 폰트 10px로 설정
}

body {
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  font-size: 1.6rem; // 기본 사이즈 16px 설정
  margin: 0 auto;
}

a {
  text-decoration: none;
  color:inherit;
	cursor: pointer;
}

button {
  font: inherit;
  cursor: pointer;
  border: none;
}
`;

export default GlobalStyle;
