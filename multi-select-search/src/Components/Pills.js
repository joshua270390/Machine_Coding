import React from 'react'

const Pills = ({firstName, lastName, image, onClick}) => {
  return (
        <span className='pills-desgn'><img src={image} alt={firstName} /><label>{firstName} {lastName}</label><span onClick={onClick}>&times;</span></span>
  )
}

export default Pills