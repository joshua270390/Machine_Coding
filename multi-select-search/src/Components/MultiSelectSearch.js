import React, {useEffect, useState, useRef} from 'react'
import Pills from './Pills'

const MultiSelectSearch = () => {
  const[search, setSearch] = useState("")
  const[userSuggestion, setUserSuggestion] = useState([])
  const[selectedUser, setSelectedUser] = useState([])
  const[selectedUserSet, setSelectedUserSet] = useState(new Set())

  const inputRef = useRef();

  const fetchUsers = async()=> {
    if(search.trim()===""){
        setUserSuggestion([])
        return
    }
     await fetch(`https://dummyjson.com/users/search?q=${search}`)
     .then((res)=>res.json())
     .then((data)=> setUserSuggestion(data.users))
     .catch((err)=>console.log(err))
  }
//   
  useEffect(()=>{
    fetchUsers();
    inputRef.current.focus();
  },[search])
    // https://dummyjson.com/users

  const handleSlectedUser = (user) => {
    setSelectedUser([...selectedUser, user])
    setSelectedUserSet(new Set([...selectedUserSet, user.email]))
    setSearch("")
    setUserSuggestion([])
    inputRef.current.focus();
  }

  console.log(selectedUser)

  const handleSelectedUserRemover = (selected) => {
     const updatedSlectedUser = selectedUser.filter((user)=> user.id !== selected.id)
     setSelectedUser(updatedSlectedUser);

     const updatesEmailSet = new Set(selectedUserSet)
     updatesEmailSet.delete(selected.email)
     setSelectedUserSet(updatesEmailSet)
  }

  const handleKeyDown = (e) => {
    if(e.key === "Backspace" && search==="" && selectedUser.length > 0) {
        const updatedList = selectedUser[selectedUser.length -1]
        handleSelectedUserRemover(updatedList)
    }
  }

  return (
    <div className='multi-search-slect-box'>
     <div className='multi-search-slect-box-inner'>
        {/* <div className='outer-pill-container'> */}
        {selectedUser?.map((selected)=>
        <Pills key={selected.email} {...selected} onClick={()=>handleSelectedUserRemover(selected)}/>
        )}
        {/* </div> */}
        {/* input box */}
        <div className='search-box'>
            <input ref={inputRef} type="type" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)}/>
            <ul className='user-lists'>
                {
                    userSuggestion?.map((user)=>
                    {return !selectedUserSet.has(user.email) ?
                    <li key={user.email} onClick={()=>handleSlectedUser(user)}><span><img src={user.image} alt={user.firstName} /><label>{user.firstName} {user.lastName}</label></span></li> : <></>
                    }
                )
                } 
            </ul>
        </div>
      </div>
    </div>
  )
}

export default MultiSelectSearch