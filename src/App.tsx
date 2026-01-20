import React from "react";
import UserCard from "./components/UserCard";

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial'}}>
      <h1>Команда проекта</h1>
      <div style={{ display: 'flex' }}>
        {/**Передаем данные серез Props.
         * Попробуй специально передать число в name TS подсветит ошибку!
         */}
        <UserCard
        name="Алексей"
        role="Frontend Developer"
        isOnline={true}
        />
        <UserCard
        name="Лилия"
        role="UI/UX Designer"
        isOnline={false}
        />
      </div>
    </div>
  );
};

export default App;