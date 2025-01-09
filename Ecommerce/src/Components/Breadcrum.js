import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Breadcrum = () => {
 
  const pathname = useLocation()
  const exactpathname = pathname.pathname.split('/').filter(x=>x)
  console.log(exactpathname)

  let breadcrum = "" 
 
  return (
    <div className='breadcrum-stripe'>
        {exactpathname.length > 0 && <Link to='/'>Home</Link> }
        {
        exactpathname?.map((path, index) => {
          breadcrum += `/${path}`;
          
          let isLastLink = index === exactpathname.length-1

          return isLastLink ? <span key={index}> / {path}</span> : <span key={index}> / <Link to={breadcrum}>{path}</Link></span>
        })
       }
    </div>
  )

}

export default Breadcrum