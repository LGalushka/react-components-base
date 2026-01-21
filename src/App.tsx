import React from "react";
import UserCard from "./components/UserCard";
import type { User } from "./types";

const App: React.FC = () => {
  // 2. Имитируем получение данных (например, из базы данных)
  // указывает тип миссива: User[]
  const users: User[] = [
    { id: 1, name: 'Алексей', role: 'Frontend Developer', isOnline: true },
    { id: 2, name: 'Мария', role: 'UI/UX Designer', isOnline: true},
    { id: 3, name: "Дмитрий", role: 'Team Lead', isOnline: true },
    { id: 4, name: "Елена", role: 'Backend Developer', isOnline: false }
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', backgroundColor: '#888888ff'}}>
      <h1 style={{ color: '#1a1a1a', textAlign: 'center' }}>Наша команда</h1>

      {/** 3. Контейнер для списка */}
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'        
        }}>

        {/** 4. Рендерим список через .map() */}

        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}

      </div>
    </div>
  );
};

export default App;