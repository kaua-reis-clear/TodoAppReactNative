import axios from 'axios';
import { createContext, useContext, useState, useRef } from 'react';
import { BASE_URL } from '../../constants';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [desc, setDesc] = useState('');
  const [currentId, setCurrentId] = useState('');
  const refInput = useRef(null);

  function getTodos() {
    return new Promise((resolve, reject) => {
      axios.get(BASE_URL).then((request) => {
        setTodos(request.data);
        resolve(request.data);
      });
    });
  }

  const value = {
    todos,
    getTodos,
    desc,
    setDesc,
    currentId,
    setCurrentId,
    refInput
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
