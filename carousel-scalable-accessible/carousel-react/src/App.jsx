import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './Components/carousel'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function App() {

  const[loading, setLoading] = useState(false)
  const[images, setImages] = useState([])

  const fetchImages = async(imageLimit) => {
     setLoading(true)
     try{
        const response = await fetch(`https://dummyjson.com/products?limit=${imageLimit}`)
        const data = await response.json()
        setImages(data.products)
     } catch(err){
        console.log(err)
     } finally{
       setLoading(false)
     }
  }

  useEffect(()=>{
    fetchImages(8)
  },[])

  return (
    <div className='carousel-container'>
      <Carousel
       images={images}
       loading={loading}
       customPrevButton={(params)=><FaArrowCircleLeft onClick={params} className='btn prev-button'/>}
       customNextButton={(params)=><FaArrowCircleRight onClick={params} className='btn next-button'/>}
       imagePerSlide={2}
       onImageClick={(image, index)=>{}}
       imageLimit={5}
      />
    </div>
  )
}

export default App
