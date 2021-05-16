import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 70px;
    height: 72px;
    left: 0px;
    top: 0px;
`;

const Routes = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px;

        position: static;
        width: 250px;
        height: 29px;
        left: 717px;
        top: 21.5px;
`;


const Logo = styled.div` color: #0016D9`;

const Navbar = () => {
    return (
           <NavContainer>
                <Logo>
                    <Link href = "/">
                    Kryptme
                    </Link>
                </Logo>
                <Routes>
                    <Link href="/markets">
                        Markets
                    </Link>
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                    <Link href="/wallet">
                        Wallet
                    </Link>
                </Routes>    
           </NavContainer>
            
    
    )
}

export default Navbar
