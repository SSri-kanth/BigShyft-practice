import React, { Component, useState } from "react";
import './Header.css';
import UserFormModal from '../UserFormModal';


function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <nav className="header">
            <div>
                <span className="back">&#8249;</span>
            </div>
            <div>
                <span className="title">Card List</span>
            </div>
            <div>
                <button className="add_button" onClick={() => { setModalOpen(true); }}> &#43;</button>
                {modalOpen && <UserFormModal isModelOpen = {modalOpen} />}
            </div>
        </nav>
    )
}

export default Header;