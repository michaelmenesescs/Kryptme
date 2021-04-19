import React from 'react'
import styled from 'styled-components'

const Coin_Container = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    
`;

const CoinImg = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    

`;

const Symbol = styled.div`
    text-transform: uppercase;
`;

const CoinData = styled.div`
    display:flex;
`;






function Coin({image, name, symbol, priceChange24hr, priceChange7d, price, market_cap, volume}) {
    return (
        <Coin_Container>
                <CoinImg>
                    <img src = {image} alt = "img" height = "40px" width = "40px"  />
                     <h1>{name}</h1>
                </CoinImg>
            <Symbol>
                <p>{symbol}</p>
            </Symbol>
            <CoinData>
                <p className = "coin-price">{price}</p>
                <p className = "coin-volume">{`Volume: ${volume.toLocaleString()}`}</p>
                <p className = "coin-24hr">{`24hr: ${priceChange24hr}`}</p>
                <p className = "coin-7d">{`7d: ${priceChange7d}`}</p>
                <p className = "coin-market-cap">{`Market Cap: ${market_cap.toLocaleString()}`}</p>   
            </CoinData>
        </Coin_Container>
    )
}

export default Coin;