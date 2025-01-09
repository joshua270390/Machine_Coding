import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Product = () => {

  const[products, setProducts] = useState([]);

  const fetchPoducts = async() => {
    const res = await fetch("https://dummyjson.com/products?limit=90")
    const data = await res.json();
    if(data && data.products){
      setProducts(data.products);
    }
  }

  useEffect(()=>{
    fetchPoducts();
  },[]);

  return (
    <div className='pdts-outer-wrapper-outer'>
    <h1>Products</h1>
    <div className='pdts-outer-wrapper'>
        {products?.slice(0, 6)?.map((pdt)=>
           <div className='pdts-outer' key={pdt.id}>
              <Link to={`/product-list/${pdt.id}`}>
              <div className='pdts-image'><img src={pdt.thumbnail} alt={pdt.title}/></div>
              <div className='pdts-name'>{pdt.title}</div>
              </Link>
           </div>
        )}
    </div>
    <div className='view-all-pdts-btn'><Link to="/product-list">View All Products</Link></div>
    </div>
  )
}

export default Product