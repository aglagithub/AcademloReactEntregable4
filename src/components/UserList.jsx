import React from 'react'
import User from "./User"

const UserList = ({users,deleteUser,changeShowModal,setIsUserToUpdate}) => {
    //console.log("Users leidos desde DB:",users)
  return (
    <section className='flex flex-wrap gap-5 justify-center '>
        {
            users.map((user)=> <User 
            key={user.id}  
            user={user} 
            deleteUser={deleteUser} 
            changeShowModal={changeShowModal} 
            setIsUserToUpdate={setIsUserToUpdate}/>)
        }

    </section>
  )
}

export default UserList