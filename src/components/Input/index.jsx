import React, { useEffect, useRef } from 'react';
import { TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import style from './styles';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

export default function Input() {
  const { desc, setDesc, currentId, setCurrentId, getTodos } =
    useContext(TodoContext);

  const refInput = useRef(null);

  if(currentId) {
    refInput.current.focus()
  }

  function submitTodo() {
    axios[currentId === '' ? 'post' : 'put'](`${BASE_URL}${currentId}`, {
      desc,
    })
      .then(() => {
        getTodos();
        setDesc('');
        setCurrentId('');
      })
      .catch((err) => console.error(err));
  }

  function cancelEditing() {
    setCurrentId('');
    setDesc('');
    Keyboard.dismiss();
  }

  return (
    <View style={style.inputArea}>
      <TextInput
        style={style.input}
        placeholder="Insira uma tarefa"
        value={desc}
        onChangeText={(text) => setDesc(text)}
        onSubmitEditing={submitTodo}
        ref={refInput}
      />
      {currentId !== '' && (
        <TouchableOpacity
          style={style.cancelButton}
          onPress={() => cancelEditing()}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
