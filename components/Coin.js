import React from 'react'
import styled from 'styled-components'

const Coin_Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #d7d7d7;
`;

const CoinImg = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:10px;
    padding-left:20px;
    padding-right:50px;

`;

const Symbol = styled.div`
    text-transform: uppercase;
    display:flex;
    align-items:center;
    padding-left:100px;
`;

const CoinData = styled.div`
    display:flex;
    padding:50px;
    justify-content:space between;
    align-items:flex-end;
`;

const Point = styled.div`
    padding-left:20px;
    padding-right:20px
`;







function Coin({image, name, symbol, priceChange24hr, priceChange7d, price, market_cap, volume}) {
    return (
        <Coin_Container>
                <CoinImg>
                    <img src = {image} alt = "img" height = "25px" width = "25px"   />
                </CoinImg>
                     <h1>{name}</h1>
            <Symbol>
                <p>{symbol}</p>
            </Symbol>
            <CoinData>
                <Point>
                <p className = "coin-price">{price}</p>
                </Point>
                <Point>
                <p className = "coin-volume">{`${volume.toLocaleString()}`}</p>
                </Point>
                <Point>
                <p className = "coin-24hr">{` ${priceChange24hr}`}</p>
                </Point>
                <Point>
                <p className = "coin-market-cap">{` ${market_cap.toLocaleString()}`}</p>   
                </Point>
            </CoinData>
        </Coin_Container>
    )
}

export default Coin;