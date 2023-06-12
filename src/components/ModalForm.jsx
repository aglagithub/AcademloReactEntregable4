import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";

const ModalForm = ({ isShownModal, changeShowModal, createUser, isUserToUpdate, updateUser,resetModalForm
}) => {
    const { register, handleSubmit, reset } = useForm()

    const submit = (data) => {

        if (!data.birthday) {
            data.birthday = null
        }
        //console.log("información a enviar:", data)
    
        if (isUserToUpdate) {
            console.log("Updating user")
            updateUser(data,reset)
        }
        else {
            createUser(data, reset)
        }

    }

    const handleCloseModal = () => {
        resetModalForm(reset)

    }
    useEffect(() => {
        if (isUserToUpdate) {

            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])

    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShownModal ? "opacity-100 visible" : "invisible opacity-0 transition-opacity"}`}>
            <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4 grid gap-6 relative '>
                <h3 className='font-bold text-3xl'>{isUserToUpdate ? "Editar usuario" : "Nuevo Usuario"}</h3>

                {/*  Input del nombre */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="first_name_input">Nombre (*)</label>
                    <input id="first_name_input" placeholder={isUserToUpdate ? "" : "Ingresa tu Nombre ..."} className='bg-gray-100 outline-none invalid:border-red-500 invalid:border-solid' type="text" required maxLength="25" minLength="1"
                        {...register("first_name")} />
                </div>
                {/* Input del nombre. end */}
                {/* Input de los Apellidos */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="last_name_input">Apellidos (*)</label>
                    <input id="last_name_input" placeholder="Ingresa tus Apellidos ..." className='bg-gray-100 outline-none' type="text" required maxLength="25" minLength="1"
                        {...register("last_name")} />
                </div>
                {/* Input de los Apellidos. end */}
                {/* Input del correo */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="email_input">Correo (*)</label>
                    <input id="email_input" placeholder="Ingresa tu Correo ..." className='bg-gray-100 outline-none' type="email" required maxLength="150" minLength="1"
                        {...register("email")} />
                </div>
                {/* Input del Correo. end */}
                {/* Input de la contraseña */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="password_input">Contraseña  (*)</label>
                    <input id="password_input" placeholder="Ingresa Contraseña ..." className='bg-gray-100 outline-none' type="password" required maxLength="25" minLength="1"
                        {...register("password")} />
                </div>
                {/* Input de la contraseña. end */}
                {/* Input del cumpleaños */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="birthday_input">Cumpleaños</label>
                    <input id="birthday_input" placeholder="Ingresa tu fecha de cumpleaños ..." className='bg-gray-100 outline-none' type="date"
                        {...register("birthday")} />
                </div>
                {/* Input del cumpleaños. end */}
                <div>(*) Información requerida</div>
                <button className='btn-primary'>{isUserToUpdate ? "Guardar Cambios" : "Agregar Nuevo Usuario"}</button>
                <button onClick={handleCloseModal} className='absolute top-2 right-2 font-bold text-2xl hover:text-red' type="button"><i className='bx bx-x hover:text-red'></i>
                </button>
            </form>
        </section>
    )

}

export default ModalForm