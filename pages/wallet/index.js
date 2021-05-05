import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import redirect from 'nextjs-redirect'
import {useState} from 'react'

//Styled Components
const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;
const AccountInfo = styled.div`
    display:flex;
    flex-direction: column;
`;

const index = () => {
    
    // Metamask setup and functions
    const [buttonLabel, setbuttonLabel] = useState("Connect Metamask Wallet");

    const [accounts, setAccounts] = useState()

    const isMetaMaskInstalled = () => {
        const {ethereum} = window;
        return Boolean(ethereum && ethereum.isMetaMask)
    }
    const MetaMaskClientCheck = () => {
        if (!isMetaMaskInstalled()){
            alert("Metamask is not installed!")
        }
        else {
            onClickConnection()
            setbuttonLabel("Success!")
        }
    }

    const onClickConnection = async () => {
        try {
            let accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setAccounts(accounts)

        } catch (error){
            alert("Error while opening MetaMask")
            console.error(error)
        }
    }


    return (
        <>
            <Navbar />
            <Container>
                <Button onClick = {MetaMaskClientCheck} color = "primary"> {buttonLabel} </Button>
                <AccountInfo>
                    <p>Your ethereum address is:</p>
                    {accounts}
                </AccountInfo>
                
            </Container>
        </>
    )
}

export default index
