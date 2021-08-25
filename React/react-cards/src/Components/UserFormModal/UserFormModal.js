import React from "react";
import Modal from "../../Molecules/Modal";
import PropTypes from "prop-types";
import UserForm from "../UserForm/UserForm";


const UserFormModal = ({ isModelOpen, setModalOpen, addUser }) => {
    return (
        <Modal isOpen={isModelOpen} setModalOpen={setModalOpen}>
            <UserForm addUser={addUser}/>
        </Modal>
    );
}


UserFormModal.propTypes = {
    isModelOpen: PropTypes.bool,
    setModalOpen: PropTypes.func,
    addUser: PropTypes.func
}

export default UserFormModal;