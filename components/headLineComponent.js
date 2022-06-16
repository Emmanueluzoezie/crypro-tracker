import { CryptoState } from "../context/cryptoContext"
import { useContext, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Avatar } from '@mui/material'
import NumberFormat from 'react-number-format';



const HeadLineComponent = ({name, rank, image, price, percent, coinSymbol}) => {
  const { symbol } = useContext(CryptoState)

   const percents = Number(percent).toFixed(2)
   let prices = Number(price).toFixed(2)

  function getStatusText(change) {
    if (change < 0) {
      return "RED"
    } else if (change > 0) {
      return "green"
    }
    return "green"
  }


  return (
    <div className="flex items-center space-x-6 px-4 border-r-4 cool-text whitespace-nowrap dark:border-gray-700 dark:text-gray-300 dark:bg-gray-900">
        <div className="flex items-center">
        <Avatar src={image} className="w-5 h-5" alt={name} />
        <div className="ml-2">
            <h3 className="text-xs font-bold">{name}</h3>
            <div className="flex items-center space-x-3 font-semibold">
                <span className="text-[10px]">{rank}</span>
                <span className="text-[10px] uppercase">{coinSymbol}</span>
            </div>
        </div>
        </div>
        <div className="flex flex-col items-center" >
        <NumberFormat className="font-semibold text-[10px]" value={prices} displayType={'text'} thousandSeparator={true} prefix={`${symbol}`} />
        <div className="flex items-center font-bold text-[10px]" style={{ color: getStatusText(percents) }}>
            {percents < 0 ? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}
            <h1>{percents}</h1>
        </div>
        </div>
    </div>
  )
}

export default HeadLineComponent
