import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { ListItem } from '../ListItem';
import { TodoContext } from '../context/TodoContext';

export default function List({ children }) {
  const { getTodos, todos } = useContext(TodoContext);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {children}
      <FlatList
        data={todos}
        renderItem={({ item, index }) => <ListItem todo={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
