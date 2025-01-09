import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { AiOutlineSwap } from "react-icons/ai";

const CurrencyConverter = () => {

  const[amount, setAmount] = useState(1)
  const[currencies, setCurrencies] = useState([])
  const[fromCurrency, setFromCurrency] = useState("INR")
  const[toCurrency, setToCurrency] = useState("USD")
  const[convert, setConvert] = useState(null)
  const[converting, setConverting] = useState(false)
  const[favourites, setFavourites] =useState(["INR", "EUR"])
  
  const API_ENDPOINT = "https://api.frankfurter.dev/v1/" 
  const CURR_KEY = Object.keys(currencies)
//   const Currency_Converter = `${API_ENDPOINT}latest?amount=2&base=USD&symbols=INR`

  const fetchCurrencies = async() => {
    try {
        const res = await fetch(`${API_ENDPOINT}currencies`)
        const data = await res.json();
        setCurrencies(data)
        
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    fetchCurrencies();
  },[])

  // console.log(CURR_KEY); 

  const handlefavourite = (currency) => {
    let updatedfavourites = [...favourites]

    if(updatedfavourites.includes(currency)){
      updatedfavourites = updatedfavourites.filter((c)=> c !== currencies)
    } else {
      updatedfavourites.push(currency)
    }

    setFavourites(updatedfavourites)
    localStorage.setItem("favourites", JSON.stringify(updatedfavourites))

    // JSON.parse(localStorage.getItem("favourites"))
  }

  const convertCurrency = async () => {
    setConverting(true)
    try{
      const res = await fetch(`${API_ENDPOINT}latest?${amount}=2&base=${fromCurrency}&symbols=${toCurrency}`);
      const data = await res.json();
      const convertedAmount = (amount * data.rates[toCurrency]).toFixed(2);
      setConvert(`${convertedAmount} ${toCurrency}`);

    } catch(err){
      console.log(err)
    } finally {
      setConverting(false)
    }
    
  }

  const handleSwapping = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-5 rounded-lg bg-white shadow-md">
        <h2 className='mb-5 font-semibold text-gray-700 text-3xl'>Currency Converter</h2>
        <div className='mt-4 flex justify-between gap-5'>
           <div className='w-1/2'>
            <label className='block mb-2 text-sm text-gray-600 font-medium'>From:</label>
            <Dropdown 
            favourites={favourites}
            CURR_KEY={CURR_KEY}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            handlefavourite={handlefavourite}
            />
           </div>
           <button onClick={handleSwapping} className='h-8 p-2 relative top-3 rounded-full bg-cyan-100'><AiOutlineSwap/></button>
           <div className='w-1/2'>
            <label className='block mb-2 text-sm text-gray-600 font-medium'>To:</label>
            <Dropdown 
            favourites={favourites}
            CURR_KEY={CURR_KEY}
            currency={toCurrency}
            setCurrency={setToCurrency}
            handlefavourite={handlefavourite}
            />
           </div>
        </div>
        <div className='mt-4'>
            <label className='block mb-2 text-sm text-gray-600 font-medium'>Amount:</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='p-2 rounded-md focus:outline-none w-full border border-gray-400'/>
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={convertCurrency} className={`px-5 py-2 ☐ bg-indigo-600 text-white rounded-md hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${converting ? 'animate-pulse' : ""}`}>
            Convert</button>
        </div>
        {convert &&<div className="mt-4 text-1g font-medium text-right text-green-600">Converted Amount: {convert}</div>}
    </div>
  )
}

export default CurrencyConverter