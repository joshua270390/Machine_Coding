import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import loader from '../loader.gif'

const Product = () => {

  const[products, setProducts] = useState([]);
  const[page, setPage] = useState(1);
  const[loading, setLoading] = useState(false);

  const fetchPoducts = async() => {
    setLoading(true)
    try{
      const res = await fetch(`https://dummyjson.com/products?limit=${page * 9}`)
      const data = await res.json();
        setProducts(data);
        console.log(data)
        setPage(page + 1)
    } catch (err) {
      console.log(err)
    } finally {
       setLoading(false)
    }
  }

  // Throttling

  const myThrottle = (cb, t) => {
     let last = 0;
     return (...args) => {
       let now = new Date().getTime()
       if(now - last < t) return;
       last = now;
       return cb(...args);
     }
  }

  const handleScroll = myThrottle(() => {
        if (window.innerHeight + document.documentElement.scrollTop + 500 > document.documentElement.offsetHeight && !loading && products.limit < products.total){
           fetchPoducts()
        }
  },500)

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)

    return ()=>  window.removeEventListener("scroll", handleScroll)
  },[handleScroll])

  useEffect(()=>{
    fetchPoducts();
  },[]);

  return (
    <div className='pdts-outer-wrapper-outer'>
    <h1>Products - Infinite Scrolling</h1>
    <div className='pdts-outer-wrapper'>
        {products.products?.map((pdt)=>
           <div className='pdts-outer' key={pdt.id}>
              <Link to={`/product-list/${pdt.id}`}>
              <div className='pdts-image'><img src={pdt.thumbnail} alt={pdt.title}/></div>
              <div className='pdts-name'>{pdt.title}</div>
              </Link>
           </div>
        )}
    </div>
    {loading && <p style={{textAlign: "center"}}><img src={loader} alt="loader" width="50" height="50"/></p>}
    </div>
  )
}

export default Product