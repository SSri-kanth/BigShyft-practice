import React, { useState } from "react";
import './Modal.css';
import PropTypes from "prop-types";


const Modal = ({ children, isOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                {children}
            </div>
            
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.any,
    isOpen: PropTypes.bool
};

Modal.defaultProps = { isOpen: false }

export default Modal;