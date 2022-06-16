import useSWR from "swr";
import axios from 'axios'
import { CryptoState } from "../context/cryptoContext"
import { useContext, useState } from "react";
import HeadLineComponent from "./headLineComponent";


const HeadLine = () => {
  const { currency} = useContext(CryptoState)

  const address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=15page=1&sparkline=false`;


  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error } = useSWR(address, fetcher)
  if (error) <p>Loading failed...</p>;

  return (
    <div className="flex pr-3 bg-green-100 items-center border-b-4 border-white dark:border-gray-700 hide dark:bg-gray-900">
      <div className="bg-green-100 z-10 px-4 py-1 text-[13px] whitespace-nowrap font-bold dark:border-gray-700 dark:text-gray-300 dark:bg-gray-900">
        <h2>Today cryptocurrencies</h2>
        <h2>Crypto price update</h2>
      </div>
       <div className="flex">
       {data && data?.map((crypto) => {
          return (
            <HeadLineComponent data={data} 
                key={crypto.id}
                name={crypto.name}
                rank={crypto.market_cap_rank}
                image={crypto.image}
                price={crypto.current_price}
                percent={crypto.market_cap_change_percentage_24h}
                coinSymbol={crypto.symbol}
                
            />
          )
            })} 
       </div>
    </div>
  )
}

export default HeadLine
