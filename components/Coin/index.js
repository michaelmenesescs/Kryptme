import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'


const PriceChangeUp = styled.div`
    display:flex;
    width: 100px;
    height: 40px;
    background: #0ECB38;
    color: white;
    justify-content:center;
    align-items:center; 
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;
const PriceChangeDown = styled.div`
    display: flex;
    width: 100px;
    height: 40px;
    color: white;
    align-items:center;
    justify-content:center;
    background:  #CB0E0E;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;
const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-bottom: 2px solid #e6e6e8;
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

function Coin({ image, name, symbol, priceChange24hr, price, market_cap, volume }) {
    return (
        <Link href='/markets/[id]' as={`/markets/${name.toLowerCase()}`}>
            <a>

                <CoinRow>
                    <CoinImg>
                        <img src={image} alt="img" height="25px" width="25px" />
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
                        {priceChange24hr < 0 ? (
                            <PriceChangeDown>{priceChange24hr.toFixed(2)}%</PriceChangeDown>
                        ) : (
                            <PriceChangeUp>{priceChange24hr.toFixed(2)}%</PriceChangeUp>
                        )
                        }
                        <Data>{market_cap.toLocaleString()}</Data>
                    </CoinData>
                </CoinRow>
            </a>
        </Link>
    )
}

export default Coin;