import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import { HiStar } from "react-icons/hi";

const Dropdown = ({CURR_KEY, currency, setCurrency, handlefavourite, favourites}) => {

  const isFavourite =(curr)=> favourites.includes(curr) 
  return (
    <div className='mt-1 relative'>
    <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='p-2 rounded-md focus:outline-none w-full border border-gray-400'>
    
    {favourites?.map((curr)=> (
      <option className='bg-gray-200' value={curr} key={curr}>{curr}</option>
  ))}
  <hr/>
    
    {CURR_KEY.filter((cr)=>!favourites.includes(cr)).map((curr)=> (
        <option value={curr} key={curr}>{curr}</option>
    ))}
    </select>
    <button className='absolute flex items-center text-sm right-5 top-2.5' onClick={() => handlefavourite(currency)}>{isFavourite(currency)?<HiStar/>:<FaRegStar/>}</button>
    </div>
  )
}

export default Dropdown