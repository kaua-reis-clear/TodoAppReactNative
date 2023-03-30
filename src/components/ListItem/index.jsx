import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import style from './style';

export function ListItem({ todo }) {
  return (
    <View style={style.row}>
      <Text style={style.desc}>{todo.desc}</Text>
      <View style={style.buttons}>
        <TouchableOpacity style={style.button(todo.done, 'done')}>
          {todo.done ? (
            <MaterialCommunityIcons name="reload" size={24} color="white" />
          ) : (
            <AntDesign name="check" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={style.button(null, 'edit')}>
          <AntDesign name="edit" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={style.button(null, 'del')}>
          <FontAwesome name="trash-o" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
