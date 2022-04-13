import { createGlobalStyle } from "styled-components";
import gold from '../img/gold.jpg'
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Anek Tamil', sans-serif;
    font-size: 18px;
    background:url(${gold}); 
    background-size: cover;
    @media screen and (max-width: 1200px){
        font-size: 16px;
    }
  
}
`
export default GlobalStyle;