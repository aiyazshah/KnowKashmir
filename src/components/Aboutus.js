import React from 'react'
import styled from 'styled-components'
import fire from '../img/fire.jpg'
import girl from '../img/girl.jpg'
import snow from '../img/snow.jpg'

export default function Aboutus() {
    return (
        <Sec id="home">
            <Content>
                <div>
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus optio velit, ad asperiores est odit doloribus, voluptates tempore debitis magnam necessitatibus? Voluptas, laborum!</p>
                </div>
                <Divimg>
                    <img src={fire} alt="fire" />
                </Divimg>
            </Content>
            <Contentrev>
                <div>
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus optio velit, ad asperiores est odit doloribus, voluptates tempore debitis magnam necessitatibus? Voluptas, laborum!</p>
                </div>
                <Divimgrev>
                    <img src={girl} alt="girl" />
                </Divimgrev>
            </Contentrev>
            <Content>
                <div>
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus optio velit, ad asperiores est odit doloribus, voluptates tempore debitis magnam necessitatibus? Voluptas, laborum!</p>
                </div>
                <Divimg>
                    <img src={snow} alt="sonow" />
                </Divimg>
            </Content>
        </Sec>
    )
}

const Sec = styled.section`
color:white;
margin-top:2rem;
`
const Content = styled.div`
display:flex;
align-items: center;
p{
    margin-left: 1rem;
    width:80%;
}
h3{
    margin-left:1rem;

  
}
img{
    width:60%;
    border-radius:8px;
   }

`
const Contentrev = styled(Content)`
flex-direction:row-reverse;
`
const Divimg = styled.div`
display:flex;
`
const Divimgrev = styled(Divimg)`
justify-content:end;
`