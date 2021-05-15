import React from 'react'
import Navbar from '../../components/Navbar'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'


const Chart = ({ coin, historical }) => {
  
  let finalData = {
    labels: [],
    datasets: [
      {
        label: coin.name,
        data: [],
        backgroundColor: '#89CFF0',
        fill: true,
      }
    ]
  };

  let options = {
    

  }

  let priceArr = []
  let dateArr = []
 

  historical.prices.map((price) => {
    //console.log(price[1])
    //
    let date = new Date(price[0])
    dateArr.push(date.toDateString())

    //Push Price
    priceArr.push(price[1])
  })

 

  finalData.labels = dateArr
  finalData.datasets[0].data = priceArr


  return (
    <div id='container'>
      <Navbar />
      <Line data={finalData} options={options}/>
       

    </div>
  )
}

export default Chart


export async function getServerSideProps(context) {
  const { id } = context.query;

  //For current data
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  console.log()

  //for historical data
  let unixMonth = "2592000"
  let curr = new Date().getTime()
  let now = Math.floor(curr/1000)
  let lastMonth = now - unixMonth

  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${lastMonth}&to=${now}`
  const histres = await fetch(`${url}`);
  const histdata = await histres.json();


  return {
    props: {
      coin: data,
      historical: histdata
    }
  };

}