import React, {useState} from 'react'

const Notes = ({inputText,setInputText,saveHandler}) => {
  
    var maxchar = 100
    var charcount = maxchar - inputText.length
    const [empty, setEmpty] = useState("")

  return (
        <div className= 'note'>
        <textarea
        cols={10}
        rows={5}
        placeholder='Type...'
        value={inputText}
        onChange={(e)=> setInputText(e.target.value)}
        maxLength={100}
        >
        </textarea>
        <div className='note_footer'>
        <span className='label'>{charcount} Left</span>
        <button className='note_save' onClick={saveHandler}>Save</button>
        </div>
        </div>
  )
}

export default Notes
