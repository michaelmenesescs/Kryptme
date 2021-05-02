import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import PortfolioItem from '../../components/PortfolioItem'
import PortfolioChart from '../../components/PortfolioChart'


const TranscationInfo = styled.div`
    display:flex;
    flex-direction:column;
    height: 400px;
    justify-content:space-evenly;
    align-items:center;
    width:1000px;
    margin-left:5%;
    margin-right:5%;
    background: #FFFFFF;
    border: 2px solid #D5D7D7;
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px; 
`;

const Portfolio = styled.div`
    display:flex;
    flex-direction:row;
`;

const PortfolioItems = styled.div`
    display:flex;
    height: 400px;
    justify-content:center;
    margin-left:5%;
    margin-top:5%;
    margin-right:5%;
    background: #FFFFFF;
    border: 2px solid #D5D7D7;
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
`;

const CoinOption = styled.option`
    width:150px;

`;

const DataInput = styled.input`
    width:150px;
`;

const SubmitButton = styled.button`
    width: 150px;

`;

const index = ({data}) => {

    
    const [currentBalance, setcurrentBalance] = useState("0.00") //CurrentPortfolio Balance

    const [pastData, setpastData] = useState([]) //For chart

    const [transcations, setTranscations] = useState([]) //For portfolio items


    const handleSymbol = e => {
        setTransSymb(e.target.value);
    };
    const handleAmount = e => {
        setTransAmount(e.target.value);
    };


    


    return (
        <>
            <Navbar />
            <Portfolio>
                <PortfolioChart data = {data} currentBalance = {currentBalance}>
                </PortfolioChart>
                <TranscationInfo>
                    <p>Enter a trade</p>
                    {
                        <select>
                            {
                                data.map((coin, idx) => {
                                    return (
                                        <CoinOption key = {idx} value = {coin.symbol}>
                                            {`${coin.id}/${coin.symbol}`}
                                        </CoinOption>
                                    )
                                })
                            }

                        </select>
                    }
                    <DataInput placeholder = "Enter number of coins"></DataInput>
                    <DataInput placeholder = "Enter price bought"></DataInput>
                    <DataInput placeholder = "Enter date of trade"></DataInput>
                    <SubmitButton>Submit Transcation</SubmitButton>
                   
                    
                </TranscationInfo>
            </Portfolio>
            <PortfolioItems>

            </PortfolioItems>
            


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