import React from 'react'

const Header = ({changeShowModal}) => {
  const handleClickShowModal =()=>{
    changeShowModal()
  }
  return (
    <section className='flex  justify-between items-center p-4'>Header
        <button onClick={handleClickShowModal} className='btn-primary'><i className='bx bx-plus'></i>Crear nuevo usuario</button>
    </section> 
  )
}

export default Header