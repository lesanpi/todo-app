import React, {useRef, useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useAppReducer} from '../AppContext';

function Input() {
  const dispatch = useAppReducer();
  //let inputRef = useRef();

  const [value, onChangeText] = useState('');

  function addItem() {
    const newItem = {
      text: value,
      key: Date.now(),
      status: 'pending',
    };

    dispatch({
      type: 'ADD_ITEM',
      item: newItem,
    });

    onChangeText('');
  }

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity style={styles.sendButton} onPress={addItem}>
        <Icon name="plus" size={30} type="font-awesome" color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
    height: '100%',
    padding: 15,
    fontSize: 20,
    color: 'rgba(0,0,0,0.8)',
  },
  sendButton: {
    width: 60,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
export default Input;
