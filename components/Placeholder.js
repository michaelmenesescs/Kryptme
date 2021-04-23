import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
align-items:center;
`;

const Name = styled.p`
display:flex;
flex-direction: row;
justify-content:flex-start;

`

const Placeholder = () => {
    return (
        <Container>
           <Name>
               Name
           </Name>
            <p>{"Symbol"}</p>
            <p>{"Price"}</p>
            <p>{"24hr %:"}</p>
            <p>{"Market Cap:"}</p>
        </Container>
    
    )
}

export default Placeholder
