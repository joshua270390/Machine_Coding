import React, {useCallback, useState} from 'react'

const SelectableGrid = ({rows=10, columns=10}) => {

  const [mouseDown, setMouseDown] = useState(false)
  const [selectedArea, setSelectedArea] = useState([])
 
  const handleMouseDown =(boxNum) => {
    setMouseDown(true)
    setSelectedArea([boxNum]) // starting point
  }
  const handleMouseEnter =useCallback((boxNum) => {
    if(mouseDown){
        const startBox = selectedArea[0]
        const endBox = boxNum
        
        // Coordinates row and col (x and y)
        const startRow = Math.floor((startBox - 1)/columns)
        const startCol = (startBox - 1) % columns
        const endRow = Math.floor((endBox - 1)/columns)
        const endCol = (endBox - 1) % columns
        
        //Identify the stating and ending index
        const minRow = Math.min(startRow, endRow)
        const maxRow = Math.max(startRow, endRow)
        const minCol = Math.min(startCol, endCol)
        const maxCol = Math.max(startCol, endCol)
        
        let selectedGrid = []
        for(let row = minRow; row<=maxRow; row++){
          for(let col = minCol; col<=maxCol; col++){
            selectedGrid.push(row * columns + col + 1 )
          }
        }
        console.log(selectedGrid)
        setSelectedArea(selectedGrid)
    }
  },[mouseDown])

  const handleMouseUp =() => {
    setMouseDown(false)
 }

  return (
    <div className='outer-selectable-grid' style={{"--rows":rows, "--columns": columns}}>
      <h1>Selectable Grid</h1>
      <div onMouseUp={handleMouseUp} className='grid' style={{"--rows":rows, "--columns": columns}}>
      {
       [...Array(rows*columns).keys()].map((_,i) => <div key={i} className={`grid-box ${selectedArea.includes(i+1)?"selected":""}`} onMouseDown={()=>handleMouseDown(i+1)} onMouseEnter={()=>handleMouseEnter(i+1)}>{i + 1}</div> )
      }
      </div>
    </div>
  )
}

export default SelectableGrid