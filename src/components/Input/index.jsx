import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import style from './styles';

export default function Input() {
  return (
    <View>
      <TextInput style={style.input} placeholder="Insira uma nova tarefa"/>
    </View>
  );
}
