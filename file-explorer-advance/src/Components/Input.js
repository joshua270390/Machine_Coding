import React, { useState } from 'react'

const Input = ({name="", handleCloseInput, submit, id}) => {
  const [value, setValue] = useState(name)

  return (
    <div className='sub-folder-or-file-input'>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
        <span onClick={()=>{submit(id,value);handleCloseInput()}}>✅</span>
        <span onClick={handleCloseInput}>❌</span>
    </div>
  )
}

export default Input