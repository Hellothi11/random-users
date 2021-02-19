import React from 'react';
import './User.css';

function User({ user }) {
  
  const name = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
      <div className="avatar-container">
        <img alt={name} src={user.picture.thumbnail} className="avatar" />
        <span className="name">{name}</span> 
      </div>

  );
}

export default User;