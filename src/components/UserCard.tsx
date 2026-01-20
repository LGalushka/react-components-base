import React from "react";

// 1. Описываем какие данные должна принимать карточка
interface UserCardPrors {
  name: string;
  role: string;
  isOnline: boolean;
}

// 2. Создаем компонено. Используем деструктуризацию props Для чистоты
const UserCard: React.FC<UserCardPrors> = ({ name, role, isOnline }) => {
  return (
    <div style={{
      border: '1px solid #444',
      padding: '20px',
      borderRadius: '12px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      widows: '250px'
    }}>
      <h2 style={{ margin: '0 0 10px 0', color: '#2c3e50', fontSize: '1.5rem' }}>{name}</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '15px' }}>Должность: {role}</p>

      {/**Используем логическое "И" (&&) для условного рендеринга */}
      {isOnline && <span style={{ color: 'green', fontSize: 'bold'}}>● Online</span>}
      {!isOnline && <span style={{ color: 'gray'}}>○ Offline</span>}
    </div>
  );
};

export default UserCard;