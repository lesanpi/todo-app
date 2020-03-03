import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

function Input() {
  return (
    <View style={styles.input}>
      <TextInput style={styles.textInput}></TextInput>
      <TouchableOpacity style={styles.sendButton}>
        <Icon
          name="plus"
          size={30}
          type="font-awesome"
          color="#fff"
          onPress={() => setExpanded(!expanded)}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    height: 115,
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
    width: 70,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
export default Input;
