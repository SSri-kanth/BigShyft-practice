import React from 'react';
import './UserCard.css';


const UserCard = ({item}) => (
        <div className="user_card">
            <span className="card_id">{item.id}</span>
            <span className="card_name">{item.name}</span>
            <span>{item.username}</span>
            <span>{item.email}</span>
            <span>{item.website}</span>
            <span>{item.phone}</span>
        </div>
);


export default UserCard;