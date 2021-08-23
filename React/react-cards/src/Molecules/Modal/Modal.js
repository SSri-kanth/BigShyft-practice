import React from "react";
import './Modal.css';
import PropTypes from "prop-types";


const Modal = ({ children, isOpen, setModalOpen }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <span className="close_icon" onClick={() => { setModalOpen(false); }}>&times;</span>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.any,
    isOpen: PropTypes.bool,
    setModalOpen: PropTypes.func
};

Modal.defaultProps = { isOpen: false }

export default Modal;