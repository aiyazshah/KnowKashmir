import React, { useState } from 'react';
import styled from 'styled-components';


export default function Toggle(props) {
    let [toggleState, setToggleState] = useState(false)
    return (
        <T>
            <div onClick={() => setToggleState(!toggleState)}>{props.children[0]}</div>
            {toggleState ? props.children[1] : null}
            {props.children[2]}
        </T>
    )
}
const T = styled.div`
margin-top: 2rem;
hr{
    margin-top: 2rem;
}
`

