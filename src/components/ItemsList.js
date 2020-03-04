import React from 'react';
import Item from './Item';
import Accordian from './Accordian';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useAppReducer, useItems} from '../AppContext';

function ItemsList() {
  const dispatch = useAppReducer();
  const {pending, paused, completed} = useItems();

  return (
    <ScrollView style={styles.itemList}>
      {pending.length > 0 ? (
        pending.map(item => <Item item={item} key={item.key} />)
      ) : (
        <View
          style={{justifyContent: 'center', alignItems: 'center', height: 100}}>
          <Text style={{fontSize: 20}}>Nothing to do!</Text>
        </View>
      )}

      <Accordian title="Paused">
        {paused.length > 0 &&
          paused.map(item => <Item item={item} key={item.key} />)}
      </Accordian>
      <Accordian title="Completed">
        {completed.length > 0 &&
          completed.map(item => <Item item={item} key={item.key} />)}
      </Accordian>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemList: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: '65%',
  },
});

export default ItemsList;
