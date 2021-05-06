
//Import dependencies
import React from 'react'
import {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Transaction from '../../components/Transaction/index'
import PortfolioChart from '../../components/PortfolioChart'
import {useForm} from "react-hook-form"

//Styling for Components

const TransactionPlaceholder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self:center;
    width:100%;
    padding:15px;
    border-bottom: 1px solid #d6d7d7;
`;

const Portfolio = styled.div`
    display:flex;
    flex-direction:row;
`;


const PortfolioItems = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;

    width: 92.5%;
    margin-left:5%;
    margin-top:5%;
    background: #FFFFFF;
    border: 2px solid #D5D7D7;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    padding: 10px;
`;

const CoinOption = styled.option`
    width:150px;
`;

const DataInput = styled.input`
    width:150px;
    padding:10px;
`;

const SubmitButton = styled.button`
    display:flex;
    width: 150px;
    align-items:center;
    margin: 20px;
    padding: 15px;
    justify-content:center;
    background-color:#0016D9;
    color:white;
    border-radius: 30px;

`;

const TranscationForm = styled.form`
    display:flex;
    flex-direction:column;
    font-size:12pt;
    padding: 50px;
    justify-content:space-between;
    align-items:center;
    margin-left:5%;
    margin-right:5%;
    background: #FFFFFF;
    border: 2px solid #D5D7D7;
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px; 
 `;

const CoinSelect = styled.select`
    padding: 20px;
    width: 150px;
    border-radius: 15px;
`;

const DataLabel = styled.label`
    display:flex;
    width: 150px;
    margin: 10px;
`;

//Our API data is fetched before rendering and passed as a prop to the main funciton
const index = ({data}) => {

    //Make hooks for managing our form data using React's State feature
    const {register, handleSubmit} = useForm();
    const [currentBalance, setcurrentBalance] = useState(0.00) //Current Portfolio Balance
    const [pastData, setpastData] = useState([]) //For charts
    const [transactions, setTransactions] = useState([]) //To keep track of transcations


    //On form submit we get the form state and push it onto the transcations state, we then get the value of the transcation and add it to the current balance
    const onSubmit = (data) => submitTransaction(data);
    const submitTransaction = (newTranscation) => {
        setTransactions([...transactions, newTranscation])
        let newTranscationValue = newTranscation.price * newTranscation.amount
        setcurrentBalance(currentBalance + newTranscationValue)   
    }


    return (
        <>
            <Navbar />
            <Portfolio>
                <PortfolioChart data = {data} currentBalance = {currentBalance.toLocaleString()}>
                </PortfolioChart>
                <TranscationForm noValidate onSubmit = {handleSubmit(onSubmit)}>
                        <p>Enter a trade</p>
                        <DataLabel>Select a currency</DataLabel>
                        {
                                <CoinSelect {...register('coin', {required: true})} >

                                {
                                    data.map((coin, idx) => {
                                        return (
                                            <CoinOption key = {idx} value = {coin.symbol} >
                                                {`${coin.id}/${coin.symbol}`}
                                            </CoinOption>
                                        )
                                    })
                                }
                                </CoinSelect>
                        }
                        <DataLabel>Enter the number of coins you bought</DataLabel>
                        <DataInput type = "number" placeholder = "Enter number of coins" {...register('amount', {required: true})}></DataInput>
                        <DataLabel>Enter the price the coin was at</DataLabel>
                        <DataInput type = "number" placeholder = "Enter price bought" {...register('price', {required: true})} ></DataInput>
                        <DataLabel>Enter the date of the trade in MMDDYYYY format</DataLabel>
                        <DataInput type = "number" placeholder = "Enter date of trade" {...register('date', {required: true})} ></DataInput>
                
                        <SubmitButton type = "submit" > Submit Transaction</SubmitButton>
                    
                </TranscationForm>        
            </Portfolio>
            <PortfolioItems>
                <TransactionPlaceholder>
                    <p>Coin</p>
                    <p>Amount Purchased</p>
                    <p>Date of Trade</p>
                    <p>Price at Purchase</p>
                </TransactionPlaceholder>
                {
                    transactions.map(transaction => {
                        return (
                           <Transaction 
                            coin = {transaction.coin.toUppercase()}
                            price = {transaction.price}
                            amount = {transaction.amount}
                            date = {transaction.date}
                            key = {transaction.id}
                            />
                            )
                    })
                }
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