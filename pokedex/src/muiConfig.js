import { injectGlobal } from 'styled-components';
const GlobalStyle = injectGlobal`
* {
    padding: 0;
    margin: 0;
}
html {
    height: 100%;
}
`
export default GlobalStyle;