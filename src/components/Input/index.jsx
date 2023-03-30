import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import style from './styles';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

export default function Input() {
  const { desc, setDesc, currentId, setCurrentId, getTodos } = useContext(TodoContext);

  function submitTodo() {
    axios
      [currentId === '' ? 'post' : 'put'](`${BASE_URL}${currentId}`, { desc })
      .then(() => {
        getTodos();
        setDesc('');
        setCurrentId('');
      })
      .catch((err) => console.error(err));
  }

  return (
    <View style={style.inputArea}>
      <TextInput
        style={style.input}
        placeholder="Insira ou busque uma tarefa"
        value={desc}
        onChangeText={(text) => setDesc(text)}
        onSubmitEditing={submitTodo}
      />
    </View>
  );
}
