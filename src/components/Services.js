import React from 'react';
import styled from "styled-components";
import Toggle from './Toggle';

export default function Services() {
    function handleClick(e) {
        console.log(e.view)
    }
    return (
        <Servicesstyle id='services'>
            <h1>Our Services</h1>

            <Toggle className="toggler">
                <h3>Travel Agents</h3>
                <p>we makes arrangements of tickets for travel by air, rail, ship, passport, visa, etc. We also arrange accommodation, tours, entertainment and other tourism related services.</p>
                <hr />
            </Toggle>
            <Toggle className="toggler">
                <h3>Inbound tour</h3>
                <p>We make arrangements for transport, accommodation, sight seeing, entertainment and other tourism related services for foreign tourists</p>
                <hr />
            </Toggle>
            <Toggle className="toggler">
                <h3>Tourist Transport </h3>
                <p> We provides tourist transport like cars, coaches, boats etc. to tourists for transfers, sight seeing and journeys to tourist places etc</p>
                <hr />
            </Toggle>
            <Toggle>
                <h3>Adventure Tour</h3>
                <p> We are engaged in activities related to Adventure Tourism in India namely, water sports, aero sports, mountaineering, trekking and safari of various kinds, etc. In addition we also make arrangements for transport, accommodation, etc.</p>
                <hr />
            </Toggle>

        </Servicesstyle>
    )
}

const Servicesstyle = styled.div`
margin-left: 1rem;  
margin-top: 2rem;
h1{
    text-align: center;
}
h3{
    cursor: pointer;
}
p{
    width: 80%;
}
hr{
    width: 70%;
}

`
