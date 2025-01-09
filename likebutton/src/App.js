import { useEffect, useState } from 'react';
import './App.css';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {

  const[liked, setLiked] =useState(false)
  const[isFetching, setIsFetching] =useState(false)
  const[error, setError] =useState(null)

  const handleLikeUnLike = async() =>{
    setIsFetching(true)
    setError(null)
    try {
       const res = await fetch("https://www.greatfrontend.com/api/questions/like-button",{
       method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
      action: liked?"unlike":'like'
       })
      })
      // Ensure response is valid JSON and parse it
      const response = await res.json();
      // Check for success or error
      if (res.ok) {
        setLiked(!liked); // Toggle the liked state
      } else {
        setError(response?.message || "An error occurred");
      } 
    } finally{
      setIsFetching(false)
    }
    
  }

  return (
    <>
       <button disabled={isFetching} className={liked ? "button-type liked-btn" : "button-type"} onClick={handleLikeUnLike}>{isFetching ?<AiOutlineLoading3Quarters/>:<AiOutlineHeart/>} {liked? "Liked": "Like"} </button>
       {error && <div>{error}</div>}
    </>
  )
}

export default App;
