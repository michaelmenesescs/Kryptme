import React from 'react'
import styled from 'styled-components'
import getStaticProps from '../pages/markets/index'

const Container = styled.div`
    display:flex;
    flex-direction:row;
`;

const PortfolioItem = (name, symbol, price, amount) => {
    return (
        <Container>
            {name}
            {price}

        </Container>
    )
}

export default PortfolioItem
