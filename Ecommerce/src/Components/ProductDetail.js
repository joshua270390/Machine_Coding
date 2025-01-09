import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const ProductDetail = () => {
  
  const[product, setProduct] = useState(null);
  const {id} = useParams();

  const fetchPoduct = async() => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    setProduct(data);
  }

  useEffect(()=>{
    fetchPoduct();
  },[]);

  console.log("product", product)

  return (
    <div className='pdts-outer-wrapper-outer'>
       {
       product ? (
           <div className='pdts-detail-inner'>
              <div className='pdt-image'><img src={product.images[0]} alt={product.title}/></div>
              <div className='pdt-detail-right'>
              <h1 className='pdts-name'>{product.title}</h1>
              <div className='flex-stock-cat'><strong>Category:</strong>{product.category}</div>
              <p>{product.description}</p>
              <div className='flex-stock-cat'><strong>Stock:</strong>{product.stock}</div>
              <div className='flex-stock-cat'><strong>Rating: 
              <div className='rating-star'>
                {[...Array(5)].map((_,i)=>{
                  let number = i + 0.5
                  return (
                  <span key={i}>
                    {product.rating >= i + 1 ? <FaStar/> : product.rating >= number ? <FaStarHalfAlt/> : <AiOutlineStar className='icon-last'/>}
                  </span>
                  )
                }
                
              )}
              </div>
              </strong>{product.rating}/5</div>
              </div>
           </div>
        ) : <>Loading...</>
        } 
    </div>
  )
}

export default ProductDetail