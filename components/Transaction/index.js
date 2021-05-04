import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px;
    border-bottom: 1px solid #e6e7e7;
    width:100%;
`;

const index = ({coin, amount, date, price}) => {
    return (
        <Container>
            <p>{coin}</p>
            <p>{amount}</p>
            <p>{date}</p>
            <p>{price}</p>
        </Container>
    )
}

export default index
