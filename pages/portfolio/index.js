import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import PortfolioItem from '../../components/PortfolioItem'

const PortfolioValue = styled.div`
    display: flex;
    flex-direction: row;
    padding: 50px;
    border: 1px solid #d7d7d7
`;

const PortfolioItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    border: 1px solid #d7d7d7
`;




const index = ({data}) => {

    
    const [totalValue, setTotalValue] = useState("0.00") //Total Balance
    const [items, setItems] = useState([]); //

    const [transSymb, setTransSymb] = useState();
    const [transAmount, setTransAmount] = useState();

    const handleSymbol = e => {
        setTransSymb(e.target.value);
    };
    const handleAmount = e => {
        setTransAmount(e.target.value);
    };

    


    return (
        <>
            <Navbar />
            <PortfolioValue>
                Current Balance: {totalValue}
            </PortfolioValue>
            <PortfolioItems>
            {
                items.map(items => {
                    <PortfolioItem />
                })
            }
            </PortfolioItems>
            Add a coin/token to your portfolio
            <form>
               <input placeholder = "Enter coin ticker, for example, BTC, ETH, XMR, ADA, etc" onChange = "">
               </input>
               <input placeholder = "Enter amount of coins bought">
               </input>
            </form>


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