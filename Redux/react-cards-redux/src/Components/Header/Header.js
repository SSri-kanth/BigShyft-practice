import React, { useState } from "react";
import './Header.css';
import UserFormModal from '../UserFormModal';


const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    var {addUser} = props;

    return (
        <div className="header">
            <div>
                <span className="back">&#8249;</span>
            </div>
            <div>
                <span className="title">Card List</span>
            </div>
            <nav>
                <button className="add_button" onClick={() => { setModalOpen(true); }}> &#43;</button>
                {modalOpen && <UserFormModal isModelOpen = {modalOpen} setModalOpen={setModalOpen} addUser={addUser}/>}
            </nav>
        </div>
    )
}

export default Header;