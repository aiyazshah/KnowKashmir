import React from 'react'
import styled from "styled-components";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdOutlineFeedback, MdOutlineBusinessCenter } from 'react-icons/md'
export default function Contactus() {
    return (
        <ContactusStyle id='contactus'>
            <h1>Discover the answers you are looking for</h1>
            <Grid>
                <Card>
                    <h3>Help & support</h3>
                    <AiOutlineQuestionCircle size={70} />
                    <p>Get help with your bookings</p>
                </Card>
                <Card>
                    <h3>Feedback</h3>
                    <MdOutlineFeedback size={70} />
                    <p>We love feedback. Good or Bad!</p>
                </Card>
                <Card>
                    <h3>Your Business</h3>
                    <MdOutlineBusinessCenter size={70} />

                    <p>Do you have business that you'd like to list with us?</p>
                </Card>
            </Grid>
        </ContactusStyle>
    )
}
const ContactusStyle = styled.div`
h1{
    text-align: center;
}
margin-top: 12rem;
height: 90vh;
`
const Grid = styled.div`
padding: 3rem;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
grid-row-gap: 3rem;
grid-column-gap: 5rem;
`
const Card = styled.div`
cursor: pointer;
text-align: center;
`

