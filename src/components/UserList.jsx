import React from 'react'
import User from "./User"

const UserList = ({users,deleteUser,changeShowModal,setIsUserToUpdate}) => {
    //console.log("Users leidos desde DB:",users)
  return (
    <section className='grid gap-6'>
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