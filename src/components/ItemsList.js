import React from 'react';
import Item from './Item';
import Accordian from './Accordian';
import {StyleSheet, ScrollView} from 'react-native';

const itemExample = {
  text: 'Tarea nueva sin completar.',
  status: 'pending',
};
const itemPausedExample = {
  text: 'Tarea pausada.',
  status: 'paused',
};
const itemCompletedExample = {
  text: 'Tarea terminada.',
  status: 'completed',
};

function ItemsList() {
  return (
    <ScrollView style={styles.itemList}>
      <Item item={itemExample} />
      <Item item={itemExample} />

      <Accordian title="Paused">
        <Item item={itemPausedExample} />
      </Accordian>
      <Accordian title="Completed">
        <Item item={itemCompletedExample} />
      </Accordian>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemList: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: 390,
  },
});

export default ItemsList;
