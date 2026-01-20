/**
 * 1. Создаем интерфейс для объекта пользователя
 * Это гарантирует, что каждый объект в массиве будет иметь нужные поля 
 */

export interface User {
  id: number;
  name: string;
  role: string;
  isOnline: boolean;
}