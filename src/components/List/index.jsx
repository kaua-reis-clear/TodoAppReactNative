import React from 'react'
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { todos } from '../../mock/todos'
import { ListItem } from '../ListItem'

export default function List() {
  return (
    <FlatList
    data={todos}
    renderItem={({item, index}) => <ListItem todo={item}/>}
    keyExtractor={item => item.id}/>
    
  )
}