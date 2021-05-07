import React from 'react'
import styled from 'styled-components'

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




const PriceChange = (priceChange) => {
    {
        if (priceChange < 0) {
            return (

                <PriceChangeDown>
                    {priceChange}
                </PriceChangeDown>
            )

        }
        else {
            return (

                <PriceChangeUp>
                    {priceChange}
                </PriceChangeUp>
            )

        }
    }

}


export default PriceChange
