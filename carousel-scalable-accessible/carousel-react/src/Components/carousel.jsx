import React, {useState, useRef, useEffect} from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

const Carousel = ({
    images, 
    loading = false, 
    customPrevButton, 
    customNextButton, 
    imagePerSlide = 1, 
    imageLimit = images.length,
    onImageClick =()=>{}
}) => {

  const[currentIndex, setCurrentIndex] = useState(0)
  const[imgWidth, setImgWidth] = useState(0)
  const imageRef = useRef(null)

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);
  
  const prevCarousel = () =>{
    setCurrentIndex((PrevIndex) => PrevIndex === 0 ? imageLimit - imagePerSlide : PrevIndex - 1)
  }

  const nextCarousel = () =>{
    setCurrentIndex((PrevIndex) => PrevIndex === imageLimit - imagePerSlide ? 0 : PrevIndex + 1)
  }

  return (
    loading ? 
    <div>Loading...</div>
    :
    <div className='carousel' style={{width: imagePerSlide * imgWidth}}>
        <div className='image-container' style={{transform: `translateX(-${currentIndex * imgWidth}px)`}}>
            {images.slice(0, imageLimit > images.length ? images.length : imageLimit).map((item, index)=>{
            return (
            <img 
            onLoad={()=>setImgWidth(imageRef?.current?.offsetWidth)}
            ref={imageRef} 
            key={item.id} 
            src={item.images[0]} 
            alt={item.title}
            onClick={()=>onImageClick(item,index)}
            className='image'
            />
            )
            }
            )}
        </div>
      {customPrevButton instanceof Function ? customPrevButton((prevCarousel)) :<FaArrowCircleLeft onClick={prevCarousel} className='btn prev-button'/>}
      {customNextButton instanceof Function ? customNextButton((nextCarousel)) :<FaArrowCircleRight onClick={nextCarousel} className='btn next-button'/>}        
    </div>
  )
}

export default Carousel
