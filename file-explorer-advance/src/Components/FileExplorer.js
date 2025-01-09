import React, { useContext, useState } from 'react'
import { FileExplorerContext } from '../context/FileExplorerContext'
import Input from './Input'

export default function FileExplorer({ id=1 }) {

  const[show, setShow] = useState(false)
  const[inputShow, setInputShow] = useState(false)
  const[inputEditShow, setInputEditShow] = useState(false)
  const {nodes, deleteNode, addNode, editNode} = useContext(FileExplorerContext)

  const handleOpenClose = () => {
    setShow(!show)
  }

  return (
    <div className='file-folder-structure'>
      <span className='file-folder-structure-inner'>
       <span style={{cursor: nodes[id].type === "folder" ? "pointer":""}} >{nodes[id].type === "folder" ? (show ? "📂":"📁") : "📑"}</span>
       {inputEditShow ? <Input name={nodes[id].name} id={id} handleCloseInput={()=>setInputEditShow(false)} submit={editNode}/> :
       <>
       <span onClick={handleOpenClose}>{nodes[id].name}</span>
       <span className='crud-tools'>
       {nodes[id].type === "folder" && <span onClick={()=> setInputShow(true)}>➕</span>}
       <span onClick={()=>setInputEditShow(true)}>📝</span>
       <span onClick={()=>deleteNode(id)}>❌</span>
       </span>
       </>
       }
       </span>
       <>
       {inputShow ? <Input id={id} submit={addNode} handleCloseInput={()=> setInputShow(false)}/> : <></>}
       </>
       {show &&
        <>
         {nodes[id].children?.map((child,index)=> <FileExplorer id={child} key={index}/>)}
        </>
       }
    </div>
  )
}
