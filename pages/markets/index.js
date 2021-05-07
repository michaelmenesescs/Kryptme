import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Coin from '../../components/Coin/index'
import {useState} from 'react'
import Placeholder from '../../components/Placeholder'


//Component Styling
const PriceChangeUp = styled.div`
    position: absolute;
    width: 110px;
    height: 30px;
    left: 13px;
    top: 13px;
    background: #0ECB38;
    border: 1px solid rgba(251, 238, 238, 0.21);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;
const PriceChangeDown = styled.div`
    display: flex;
    width: 110px;
    height: 30px;
    left: 13px;
    top: 13px;
    background: #0ECB38;
    border: 1px solid rgba(251, 238, 238, 0.21);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

const CoinContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const Search = styled.form`
    display:flex;
    justify-content:center; 
`;

const SearchBar = styled.input`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    padding:15px;
`;

const index = ({data}) => {
    
    const [search, setSearch] = useState('');
    
    const handleSearch = e => {
        setSearch(e.target.value);
    };
    
    const filteredCoins = data.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
    
    return (
        <>
            <Navbar />
            <Search>
            <SearchBar  className = "coin-search" type = "text" placeholder = "Search for a token" onChange={handleSearch}>     
            </SearchBar>
            </Search>
            <CoinContainer>
            <Placeholder>
            </Placeholder>
                {
                    filteredCoins.map(coin => {
                        return (
                          <Coin 
                          key = {coin.id}
                          image = {coin.image}
                          name = {coin.name} 
                          price = {coin.current_price}
                          market_cap = {coin.market_cap}
                          volume = {coin.total_volume}
                          symbol = {coin.symbol}
                          priceChange24hr = {coin.price_change_percentage_24h}
                          />
                          );
                      })
                   
                }
                
            </CoinContainer>
            

        </>
    )
}

export default index


export async function getStaticProps(){
    //Call API for data to set into state
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20volume_desc%2C%20id_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C%2024h%2C%207d'"
    const res = await fetch(`${url}`)
    const data = await res.json()
    
    return {
        props: {
            data,
        },
    }

}

