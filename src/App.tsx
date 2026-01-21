import React, { useState } from "react";
import UserCard from "./components/UserCard";
import type { User } from "./types";
import AddUserForm from "./components/AddUserForm";

const App: React.FC = () => {
  // Состояние для списка пользователей
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Алексей', role: 'Frontend Developer', isOnline: true },
    { id: 2, name: 'Мария', role: 'UI/UX Designer', isOnline: true},
    { id: 3, name: "Дмитрий", role: 'Team Lead', isOnline: true },
    { id: 4, name: "Елена", role: 'Backend Developer', isOnline: false }
  ]);

  // Состояние для поисковой строки
  const [searchTerm, setSearchTerm] = useState<string>('');

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]); // Создаем новый массив (иммутабельность!)
  };

  // Логика фильтрации (вычисляется при каждом рендере)
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px' }}>
      <h1>Управление командой</h1>
      <AddUserForm onAdd={addUser} />

      <input 
        type="text" 
        placeholder="Поиск по имени..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}>          
        </input>
        

      {/** 3. Контейнер для списка */}
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'        
        }}>

        {/** 4. Рендерим список через .map() */}

        {filteredUsers.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      {filteredUsers.length === 0 && <p>Никто не найден.</p>}
    </div>
  );
};

export default App;