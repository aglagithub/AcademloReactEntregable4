import React from "react";

const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  //console.log("informacion usuario:", user)

  // manejador botón Borrar (trash can)
  const handleClickDelete = () => {
    console.log("Borrando registro:", user.id);
    deleteUser(user.id);
  };

  //Manejador Botón Editar (pencil)
  const handleClickUpdate = () => {
    console.log("Update A registro:", user.id);
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <section className="border border-6 border-solid border-black p-4 w-[280px] rounded-md">
      <h4 className="font-bold text-center pb-3">{`${user.first_name} ${user.last_name}`}</h4>
      <div>
        <h5 className="text-gray-500 "> Correo</h5>
        <span className="text-sm">{user.email}</span>
      </div>
      <div>
        <h5 className="text-gray-500 ">
          <span className="text-sm">Cumpleaños</span>
        </h5>
        <span>
          <i className="bx bx-gift pr-2"></i>
          <span className="text-sm">{user.birthday || "No Disponible"}</span>
        </span>
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <button className=" bg-secondary border border-solid border-1 border-gray-500 rounded"onClick={handleClickDelete}>
          <i className="bx bx-trash p-1 text-white"></i>
        </button>
        <button className="border border-solid border-1  border-gray-500 rounded " onClick={handleClickUpdate}>
          <i className="bx bx-pencil p-1"></i>
        </button>
      </div>
    </section>
  );
};

export default User;
