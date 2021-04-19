import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { useState } from 'react'
import Coin from '../../components/Coin'



//Component Styling
const Container = styled.div`
    display:flex;
    flex-direction: column;
`;




const index = ({data}) => {

    return (
        <>
            <Navbar />
            <Container>
                {
                    data.map(coin => {
                        return (
                          <Coin 
                          image = {coin.image}
                          name = {coin.name} 
                          price = {coin.current_price}
                          market_cap = {coin.market_cap}
                          volume = {coin.total_volume}
                          symbol = {coin.symbol}
                          priceChange = {coin.price_change_percentage_24h}
                          />
                          );
                      })
                   
                }
                
            </Container>
            

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



