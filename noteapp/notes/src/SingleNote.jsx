import React from 'react'

const SingleNote = ({id,text, date, editHandler, deleteHandler}) => {
  return (
    <div className='note'>
    <div className='clip-text'>{text}</div>
    <div className='note_footer'>
    <div className='date-block'>{date}</div>
    <div className='button-block'>
    <button className='note_save' onClick={() => editHandler(id, text)}>Edit</button>
    <button className='note_save' onClick={() => deleteHandler(id)}>Delete</button>
    </div>
    </div>
    </div>
  )
}

export default SingleNote
