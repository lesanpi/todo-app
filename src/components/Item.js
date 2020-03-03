import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

function Item({item}) {
  let text = item.text;
  let paused = item.status === 'paused';
  let completed = item.status === 'completed';
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
        />
        {!paused && !completed && (
          <Icon
            name="pause"
            size={25}
            type="font-awesome"
            color="#f7f879"
            iconStyle={styles.button}
          />
        )}
        {paused && !completed && (
          <Icon
            name="play"
            size={28}
            type="font-awesome"
            color="#62dca5"
            iconStyle={styles.button}
          />
        )}
        {!completed && !paused && (
          <Icon
            name="check"
            size={35}
            type="font-awesome"
            color="#62dca5"
            iconStyle={styles.button}
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
