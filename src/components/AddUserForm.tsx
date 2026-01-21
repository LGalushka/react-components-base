/**
 * Создаем форму, которая позволит добавлять новых людей в команду
 */

import type React from "react";
import type { User } from "../types";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface AddUserProps {
  onAdd: (user: User) => void;
}

const AddUserForm: React.FC<AddUserProps> = ({ onAdd }) => {
  // 1. Создаем стейт для полей формы
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');

  // 2. Типизируем обработчик изменения инпута
  const handlNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlSubmit = (e: FormEvent) => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    if(!name || !role) return;

    // Создаем новый объект
    const newUser: User = {
      id: Date.now(),
      name,
      role,
      isOnline: true
    };

    onAdd(newUser);
    setName('');  // Очищаем поля
    setRole('');
  };

  return (
    <form onSubmit={handlSubmit} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '15px'}}>
      <input
      type="text"
      placeholder="Имя"
      value={name}
      onChange={handlNameChange}
      />
      <input
      type="text"
      placeholder="Роль"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit">Добавить сотрудника</button>
    </form>
  );
};

export default AddUserForm;




