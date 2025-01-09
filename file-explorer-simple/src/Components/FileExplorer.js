import React from 'react'
import { useState } from 'react';

const FileExplorer = ({dataFolder}) => {

  const[show, setShow] = useState(false)

  const handleOpenClose = () => {
    setShow(!show)
  }

  return (
    <div className='file-folder-structure'>
       <span style={{cursor: dataFolder.type === "folder" ? "pointer":""}} onClick={handleOpenClose}>{dataFolder.type === "folder" ? (show ? "📂":"📁") : "📑"}{dataFolder.name}</span>
       {show &&
        <>
         {dataFolder.children?.map((child,index)=> <FileExplorer dataFolder={child} key={index}/>)}
        </>
       }
    </div>
  )
}

export default FileExplorer