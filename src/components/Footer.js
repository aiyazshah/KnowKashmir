import React from 'react';
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterStyle>&#169;2022 Kashmir. All rights reserved</FooterStyle>
    )
}
const FooterStyle = styled.div`
background: rgba(25,25,25,.7);
border: 3px solid gold;
text-align: center;
`
