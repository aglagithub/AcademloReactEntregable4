import React from 'react'

const ModalForm = () => {
    return (
        <section className='fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center'>
            <form className='bg-white w-[280px] p-4 grid gap-6'>
                <h3 className='font-bold text-3xl'>Nuevo Usuario</h3>

                {/* Input del nombre */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm"htmlFor="">Nombre</label>
                    <input placeholder="Ingresa tu Nombre ..." className='bg-gray-100 outline-none' type="text" />
                </div>
                 {/* Input del nombre. end */}

                <button className='btn-primary'>Agregar Nuevo Usuario</button>
            </form> 
        </section>
    )
}

export default ModalForm