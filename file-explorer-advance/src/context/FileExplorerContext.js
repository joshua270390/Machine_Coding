import { createContext, useState } from "react";
import data from '../data/FileExplorerData'

export const FileExplorerContext = createContext()

export default function FileExplorerContextWrapper ({children}) {
    const [nodes,setNodes] = useState(data)

    const addNode = (parentId, value) => {
          const newId = Date.now()
          const newData = {id: newId, name: value, parentId: parentId}
          //type to identify folder or file
          const typeIdentify = value.split('.');
          if(typeIdentify.length > 1){
            newData.type = "file"
          } else {
            newData.type = "folder"
            newData.children = []
          }

          const updateNodes = {...nodes, [newId]:newData}
          updateNodes[parentId].children.unshift(newId)
          setNodes(updateNodes)
    }

    const editNode = (id, value) => {
        const updateNodes = {...nodes}
        updateNodes[id].name = value
        setNodes(updateNodes)
     }

    const deleteNode = (id) =>{
         const updateNodes = {...nodes}
         const parentId = updateNodes[id].parentId
          if(parentId){
             updateNodes[parentId].children = updateNodes[parentId].children.filter((childId)=>childId!==id)
          } 
          const queueId = [id]
          while(queueId.length>0){
             const currentId = queueId.shift();
             if(nodes[currentId].children) queueId.push(...nodes[currentId].children)
             delete updateNodes[currentId]
          }
          setNodes(updateNodes)
    }
    return (
        <FileExplorerContext.Provider value={{nodes, deleteNode, addNode, editNode}}>
            {children}
        </FileExplorerContext.Provider>
    )
}