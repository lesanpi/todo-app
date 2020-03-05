import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {useAppReducer} from '../AppContext';

function Item({item}) {
  const dispatch = useAppReducer();
  let text = item.text;
  let paused = item.status === 'paused';
  let completed = item.status === 'completed';

  function deleteItem() {
    dispatch({type: 'DELETE_ITEM', item});
  }
  function pauseItem() {
    const pausedItem = {...item, status: 'paused'};
    dispatch({type: 'UPDATE_ITEM', item: pausedItem});
  }
  function resumeItem() {
    const pendingItem = {...item, status: 'pending'};
    dispatch({type: 'UPDATE_ITEM', item: pendingItem});
  }
  function completeItem() {
    const completedItem = {...item, status: 'completed'};
    dispatch({type: 'UPDATE_ITEM', item: completedItem});
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemName}>
        <Text style={styles.name}>{text}</Text>
      </View>
      <View style={styles.buttons}>
        {}
        <Icon
          name="close"
          size={35}
          type="font-awesome"
          color="#f76060"
          iconStyle={styles.button}
          onPress={deleteItem}
        />
        {!paused && !completed && (
          <Icon
            name="pause"
            size={25}
            type="font-awesome"
            color="#f7f879"
            iconStyle={styles.button}
            onPress={pauseItem}
          />
        )}
        {paused && !completed && (
          <Icon
            name="play"
            size={28}
            type="font-awesome"
            color="#62dca5"
            iconStyle={styles.button}
            onPress={resumeItem}
          />
        )}
        {!completed && !paused && (
          <Icon
            name="check"
            size={35}
            type="font-awesome"
            color="#62dca5"
            iconStyle={styles.button}
            onPress={completeItem}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 70,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  itemName: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
    width: '70%',
    fontWeight: '100',
  },
  name: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.9)',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30%',
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 5,
  },
});

export default Item;
