import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {useState} from 'react'
import {useForm} from 'react-hook-form'

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
    padding: 25px;
`;
const SendTransaction = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    width:40%;
    border:1px solid #d7d7d8;
    padding:25px;
    border-radius: 20px;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);
`

const DataInput = styled.input`
    display:flex;
    width: 75%;
    padding:10px;
    justify-content:center;
    align-items:center;
    align-self:center;
`;

const DataLabel = styled.label`
    font-size: 12pt;
    display:flex;
    width: 75%;
    padding:10px;
    justify-content:center;
    align-items:center;
    align-self:center;
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


    //Transaction Logic and State
    const {register, handleSubmit} = useForm()
    const [transaction, setTransaction] = useState([])

    const makeTransaction = (data) => {
        setTransaction([...transaction, newtransaction])
        alert(data)
    }


    return (
        <>
            <Navbar />
            <Container>
                <Button onClick = {MetaMaskClientCheck} variant = "contained" color = "primary"> {buttonLabel} </Button>
                <AccountInfo>
                    <p>Your ethereum address is:</p>
                    {accounts}

                </AccountInfo>
                <SendTransaction onSubmit = {handleSubmit(makeTransaction)}>
                    <DataLabel>Enter the Ethereum Destination Address</DataLabel>
                    <DataInput type = "text" placeholder = "Address: 0x123102018284918248" {...register('address', {required:true})}></DataInput>
                    <DataLabel>Enter Amount to Send</DataLabel>
                    <DataInput type = "text" placeholder = "Amount: 0.528"  {...register('amount', {required:true})}></DataInput>
                    <Button type = "submit" variant = "contained" color = "primary">Send tokens</Button>
                </SendTransaction>
                
            </Container>
        </>
    )
}

export default index
