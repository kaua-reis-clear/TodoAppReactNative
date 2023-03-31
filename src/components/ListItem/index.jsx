import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import style from './style';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { TodoContext } from '../context/TodoContext';

export function ListItem({ todo }) {
  const { getTodos, setCurrentId, setDesc, refInput } = useContext(TodoContext)

  function toggleTodo() {
    axios.put(`${BASE_URL}done/${todo.id}`, { done: todo.done }).then(() => getTodos())
  }

  function deleteTodo() {
    axios.delete(`${BASE_URL}${todo.id}`).then(() => getTodos())
  }

  function updateDescription() {
    setCurrentId(todo.id);
    setDesc(todo.desc);
    refInput.current.focus()
  }

  return (
    <View style={style.row}>
      <Text style={style.desc(todo.done)}>{todo.desc}</Text>
      <View style={style.buttons}>
        <TouchableOpacity style={style.button(todo.done, 'done')} onPress={() => toggleTodo()}>
          {todo.done ? (
            <MaterialCommunityIcons name="reload" size={24} color="white" />
          ) : (
            <AntDesign name="check" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={style.button(null, 'edit')} onPress={() => updateDescription()}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.button(null, 'del')} onPress={() => deleteTodo()}>
          <FontAwesome name="trash-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
