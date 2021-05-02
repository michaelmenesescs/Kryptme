import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    width: 500px;
    height: 400px;
    justify-content:center;
    margin-left:5%;

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



const PortfolioChart = ({data, currentBalance}) => {
    return (
        <Container>
           <PortfolioBalance>
               <p>Current Balance</p>
               <p>{currentBalance}</p>
           </PortfolioBalance>
        {
            /*
            Add Graph Here
            */

        }

        </Container>
        
    )
}

export default PortfolioChart
