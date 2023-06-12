import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import UserList from "./components/UserList";

//URL Base
const BASE_URL = "https://users-crud.academlo.tech";

//Nombres con los que seristraron los campos del formulario
const DEFAULT_VALUES = {
  birthday: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};
function App() {
  const [isShownModal, setIsShowModal] = useState(false);

  //Estado para almacenar listado de usuarios
  const [users, setUsers] = useState([]);

  //Estado para indicar Modo update
  const [isUserToUpdate, setIsUserToUpdate] = useState();

  /*Función para cambiar el estado para visibilada del formato de datos */
  const changeShowModal = () => {
    console.log("Cambio Modal");
    setIsShowModal(!isShownModal);
  };

  /*Manejo del CRUD */
  /*Obteber todos los usuarios con un GET*/
  const getAllUsers = () => {
    const url = BASE_URL + "/users/";
    axios
      .get(url)
      .then(({ data }) => {
        //console.log(data)
        setUsers(data); // pasa los usuarios leidos al estado
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //console.log("Servicio finalizado. bien o mal")
      });
  };

  /*Con un POST,  Enviar usuario en cuadro de dialogo a DB */
  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/";
    axios
      .post(url, data)
      .then(({ data }) => {
        //console.log("Registro enviado por POST: ", data)
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => {
        //console.log("Error realizando el POST")
        //console.log(err)
      })
      .finally(() => {
        //console.log("Servicio finalizado. bien o mal")
      });
  };

  /*Delete user*/
  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`;
    axios
      .delete(url)
      .then(() => {
        getAllUsers();
      })
      .catch((err) => {
        console.log("Error realizando DELETE ");
      });
  };
  /*Delete user. End*/

  /*Update User*/
  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`;
    console.log("Patching:", data);
    axios
      .patch(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
      })
      .catch((err) => {
        console.log("Error realizando PATCH ");
      });
  };
  /*Update User. End*/

  /*Manejo del CRUD.end */
  /*Función para vaciar el modal*/
  const resetModalForm = (reset) => {
    setIsShowModal(false);
    reset(DEFAULT_VALUES);
    setIsUserToUpdate(null);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className='font-["Roboto"] max-w-[800px]'>
      <Header changeShowModal={changeShowModal} />

      <ModalForm
        changeShowModal={changeShowModal}
        isShownModal={isShownModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={resetModalForm}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />
    </main>
  );
}

export default App;
