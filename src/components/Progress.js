import React from 'react';
import {useAppState, useItems} from '../AppContext';
import {StyleSheet, View} from 'react-native';

function Progress() {
  /*const totalAmount = useAppState().items.length;
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
  }*/

  return (
    <View style={{paddingHorizontal: 40, paddingVertical: 10}}>
      <View style={styles.progress}>
        <View style={styles.completed}></View>
        <View style={styles.paused}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    width: '100%',
    height: 30,
    //borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    flexDirection: 'row',
  },
  progressBar: {
    height: '100%',
    width: '20%',
  },
  completed: {
    backgroundColor: '#62dca5',
    height: '100%',
    width: '50%',
    //borderTopLeftRadius: 20,
    //borderBottomLeftRadius: 20,
  },
  paused: {
    backgroundColor: '#f7f879',
    height: '100%',
    width: '25%',
    //borderTopRightRadius: 20,
    //borderBottomRightRadius: 20,
  },
});

export default Progress;
