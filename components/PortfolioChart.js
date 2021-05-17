import React from 'react'
import styled from 'styled-components'
import {Line} from 'react-chartjs-2'
import { TableSortLabel } from '@material-ui/core';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left:5%;
    width: 50%;
    background: #FFFFFF;
    border: 2px solid #D5D7D7;
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

`;

const PortfolioBalance = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    font-size:20px;
    
`;

const Wrapper = styled.div`
    display:flex;
    padding:30px;
`;


const PortfolioChart = ({data, currentBalance}) => {


    let finalData = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: '#89CFF0',
            fill: true,
          }
        ]
      };

      let options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    
      let priceArr = []
      let dateArr = []

      data.map((transaction) => {
            dateArr.push(transaction.date)
            dateArr.sort((a,b) => {return new Date(a) - new Date(b)})
            //let newTransaction = transaction.amount * transaction.price
            priceArr.push(currentBalance)
          })
          


      finalData.labels = dateArr
      finalData.datasets[0].data = priceArr



    return (
        <Container>
           <PortfolioBalance>
               <p>Current Balance</p>
               <p>${currentBalance.toLocaleString()}</p>
           </PortfolioBalance>  
           <Wrapper>
            <Line data= {finalData} options = {options}/>
           </Wrapper>


        </Container>
        
    )
}

export default PortfolioChart
