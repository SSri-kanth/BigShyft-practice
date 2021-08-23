import React from "react";
import Modal from "../../Molecules/Modal";
import PropTypes from "prop-types";
import UserForm from "../UserForm/UserForm";


const UserFormModal = ({ isModelOpen, setModalOpen }) => {
    return (
        <Modal isOpen={isModelOpen} setModalOpen={setModalOpen}>
            <UserForm />
        </Modal>
    );
}


UserFormModal.propTypes = {
    isModelOpen: PropTypes.bool,
    setModalOpen: PropTypes.func
}

export default UserFormModal;