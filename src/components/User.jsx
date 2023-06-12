import React from 'react'

const User = ({ user, deleteUser,changeShowModal,setIsUserToUpdate  }) => {
    //console.log("informacion usuario:", user)

    // manejador botón Borrar (trash can)
    const handleClickDelete = () => {
        console.log("Borrando registro:", user.id)
        deleteUser(user.id)
    }

    //Manejador Botón Editar (pencil)
    const handleClickUpdate = () => {
        console.log("Update A registro:", user.id)
        changeShowModal()
        setIsUserToUpdate(user)

    }
    
    return (
        <section >

            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <div>
                <h5>Correo</h5>
                <span>{user.email}</span>
            </div>
            <div>
                <h5>Cumpleaños</h5>
                <span><i className='bx bx-gift'></i>{user.birthday || "No Disponible"}</span>
            </div>
            <button onClick={handleClickDelete}><i className='bx bx-trash'></i></button>
            <button onClick={handleClickUpdate}><i className='bx bx-pencil'></i></button>


        </section>
    )
}

export default User