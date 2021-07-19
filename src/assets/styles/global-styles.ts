import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
    font-family: -apple-system,Helvetica,Arial,'Apple SD Gothic Neo','Nanum Gothic','Malgun Gothic' sans-serif;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding:0; 
  }
`;

export default GlobalStyle;