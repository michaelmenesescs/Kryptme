import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 80px;
    width: 1000px;
    border-bottom: 1px solid #e6e6e8;
    padding-top:5px;
`;

const Name = styled.p`
    display:flex;
    width:100px;
    margin-left:75px;
`;

const Price = styled.p`
    display:flex;
    width:100px;
    margin-right:200px;
`;
const Volume = styled.p`
    display:flex;
    width:100px;
    margin-left:-275px;

`;
const MarketCap = styled.p`
    width:100px;
    display:flex;
`;

const DailyPercentages = styled.p`
    display:flex;
`;


const Placeholder = () => {
    return (
        <Container>
            <Name>Name</Name>
            <Price>Price</Price>
            <Volume>Volume</Volume>
            <DailyPercentages>24hr %</DailyPercentages>
            <MarketCap>Market Cap</MarketCap>
        </Container>
    
    )
}

export default Placeholder
