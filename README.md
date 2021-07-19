<h1>Wanted clone Web 😎 😎</h1>

<center>
<div>
 <img src="https://user-images.githubusercontent.com/61695175/126105378-d3adda43-4d36-4005-ad5a-10e36ccd17b9.png" width="500" height="auto">
</div>
</center>

## Getting Started with Create React App
npx create-react-app 리액트 앱 생성

### 프로젝트 시작하기
### `npm start`

### ✔ Prerequisites
LINK [프리온보딩코스 과제](https://www.notion.so/9e8ff10dd1614112a81797219b7e6742)

### ✔ Deploy
Netlify 무료배포 사이트를 아용하였습니다.
> https://frosty-austin-47d306.netlify.app


### ✔ Installing
```javascript
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    // 아이콘과 Badge 사용
    "react-icons": "^4.2.0",
    "@material-ui/core": "^4.12.1",
    "react-scripts": "4.0.3",
     //css in js 로 styled-components 사용
    "styled-components": "^5.3.0",
    "styled-normalize": "^8.0.7",
    "web-vitals": "^1.1.2"
    // 타입스크립트
    "@types/react": "^17.0.14",
    "@types/react-dom": "^17.0.9",
    "@types/styled-components": "^5.1.11",
    "typescript": "^4.3.5"
```
### ✔ bugs
>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid


`<a>` 태그 사용 시 href 속성의 유효한 값이 필요하다는 의미로 이를 해결 하기 위한 방법으로 아래와같이 href='#!'를 넣어준다.

```
<a href='#!'> 
```

> 글자수 제한너비 이상으로 길어질 경우 아래 CSS 코드로 간단하게 처리 할 수 있다. (초과되는 글자는 ... 으로 처리)
```
 width: 16.666%;
 text-overflow: ellipsis;
```
