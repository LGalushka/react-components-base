import React from "react";
import type { User } from "../types";
import './UserCard.css';


// Используем интерфейс User как основу для пропсов
const UserCard: React.FC<User> = ({ name, role, isOnline }) => {
  return (
    <div className="user-card">
    
      <h2 className="user-name">{name}</h2>
      <p className="user-role">Должность: {role}</p>

      <span className={isOnline ? 'status-online' : 'status-offline'}>
        {isOnline ? '● Online' : '○ Offline'}
      </span>
    </div>
  );
};

export default UserCard;