import {createGlobalStyle, DefaultTheme} from 'styled-components/macro';
import reset from 'styled-reset';

/**
 * 글로벌 스타일을 생성합니다.
 * @see https://styled-components.com/docs/api
 */
export default createGlobalStyle<{theme: DefaultTheme}>`
    @font-face {
        font-family: 'BMJUA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff')
        format('woff');
        font-weight: normal;
        font-style: normal; 
    }
    ${reset};
    * {
        box-sizing: border-box;
    }
    body {
        font-family :'BMJUA', -apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        background-color:${props => props.theme.colorWhite};
        color:${props => props.theme.colorMiddleGray};
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        color: ${props => props.theme.colorMiddleGray};
        text-decoration:none;
        cursor: pointer;
    }
    a:focus {
        outline: 0;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
    input:focus::placeholder {
        color: transparent;
    }
    input:focus{
        outline: none;
    }
    input {
        font-family :'BMJUA', -apple-system, system-ui, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
`;
