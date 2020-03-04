import React from 'react';
import {useAppState, useItems} from '../AppContext';
import {StyleSheet, View} from 'react-native';

function Progress() {
  const totalAmount = useAppState().items.length;
  const {paused, completed} = useItems();
  const completedAmount = completed.length;
  const pausedAmount = paused.length;

  let completedPorcentage = completedAmount / totalAmount;
  let pausedPorcentage = pausedAmount / totalAmount + completedPorcentage;

  if (isNaN(completedPorcentage)) {
    completedPorcentage = 0;
  }
  if (isNaN(pausedPorcentage)) {
    pausedPorcentage = 0;
  }

  return (
    <View style={{paddingHorizontal: 40, paddingVertical: 10}}>
      <View style={styles.progress}>
        <View
          style={{
            backgroundColor: '#62dca5',
            height: '100%',
            width: completedPorcentage,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          ></View>
        <View
          style={{
            backgroundColor: '#f7f879',
            height: '100%',
            width: pausedPorcentage,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    width: '100%',
    height: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
    flexDirection: 'row',
  },
  progressBar: {
    height: '100%',
    width: '20%',
  },
});

export default Progress;
