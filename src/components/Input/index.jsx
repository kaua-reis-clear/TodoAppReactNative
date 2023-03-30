import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import style from './styles';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { BASE_URL } from '../../constants';
import axios from 'axios';

export default function Input() {
  const { desc, setDesc, getTodos } = useContext(TodoContext)

  function addTodo() {
    axios.post(BASE_URL, { desc }).then(() => getTodos()).catch(err => console.error(err))
  }

  return (
    <View>
      <TextInput style={style.input} placeholder="Insira uma nova tarefa" value={desc} onChangeText={text => setDesc(text)} onSubmitEditing={addTodo}/>
    </View>
  );
}
