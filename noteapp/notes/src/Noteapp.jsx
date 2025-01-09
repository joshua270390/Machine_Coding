import React, {useState, useEffect} from 'react'
import Notes from './Notes'
import {v4 as uuid} from 'uuid'
import SingleNote from './SingleNote';

const Noteapp = () => {
 
const [inputText, setInputText] = useState("")
const [notes, setNotes] = useState([])
const [edit, setEdit] = useState(null)

const editHandler =(id, text) =>{
  setEdit(id)
  setInputText(text)
}

const deleteHandler =(id) =>{
  const deletenote = notes.filter((dn) => dn.id !== id)
  setNotes(deletenote);
}


const saveHandler = () => {
  const date = new Date();
  if(edit) {
    setNotes (notes.map((note) => (
    note.id === edit ?
    {...note, text: inputText}
    : note
    )))
    } else{
      setNotes([...notes, {id: uuid(), text: inputText, date: date.toLocaleDateString()}])
    }
    setInputText("")
    setEdit(null)
}

useEffect(() => {
    var notesave = JSON.parse(localStorage.getItem("Note"));
    if(notesave){
      setNotes(notesave)
    }
},[]);

useEffect(() => {
  console.log(notes, "hi")
  if(notes.length>0){
    localStorage.setItem("Note", JSON.stringify(notes));
  }
},[notes]);

  return (
    <div className='notes'>
      {
        notes.map((note)=>
        edit == note.id ?

        <Notes
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
        />
       
      :

      <SingleNote key={note.id} id={note.id} text={note.text} date={note.date} editHandler={editHandler} deleteHandler={deleteHandler}/>
          
        )
      }
      {
        edit === null ?
        <Notes
      inputText={inputText}
      setInputText={setInputText}
      saveHandler={saveHandler}
      />
      :
      <></>
      }
    </div>
  )
}

export default Noteapp
