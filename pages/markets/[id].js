import React from 'react'
import Navbar from '../../components/Navbar'




const Chart = ({coin}) => {
    return (
        <div id = 'container'>
            <Navbar />
            {coin.name}
        </div>
    )
}

export default Chart


export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  
}