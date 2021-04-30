import React from 'react'
import styled from 'styled-components'

const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #e6e6e8;
    width: 1000px;
    padding: 0rem 2rem;
    
`;

const CoinImg = styled.div`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`;

const Symbol = styled.div`
    text-transform: uppercase;
    width:100px;
`;

const CoinData = styled.div`
    display: flex;
    text-align: right;
    justify-content: space-between;
    width: 100%;
    
`;
const CoinName = styled.h1`
    font-size: 16px;
    width:150px;
`;

const Data = styled.p`
    width:110px;

`;

function Coin({image, name, symbol, priceChange24hr, price, market_cap, volume}) {
    return (
        <CoinRow>
                <CoinImg>
                    <img src = {image} alt = "img" height = "25px" width = "25px"   />
                </CoinImg>
                     <CoinName>
                         {name}
                     </CoinName>
            <Symbol>
                <p>{symbol}</p>
            </Symbol>
            <CoinData>   
                <Data>${price.toLocaleString()}</Data>
                <Data>${volume.toLocaleString()}</Data>
                <Data>{priceChange24hr}%</Data>
                <Data>{market_cap.toLocaleString()}</Data>
            </CoinData>
        </CoinRow>
    )
}

export default Coin;