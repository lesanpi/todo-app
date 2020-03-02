import React, {Component} from 'react';
import {View, Text} from 'react-native';

function TodoDate() {
  return (
    <View style={styles.dayBar}>
      <View style={styles.dayMonthYear}>
        <Text style={styles.dayNumber}>9</Text>
        <View style={styles.monthYear}>
          <Text style={styles.month}>Mar</Text>
          <Text style={styles.year}>2020</Text>
        </View>
      </View>
      <Text style={styles.weekDay}>Monday</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dayBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dayMonthYear: {
    flexDirection: 'row',
    width: '70%',
  },
  monthYear: {
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: 60,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#1f1f1f',
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  year: {
    fontSize: 20,
    fontWeight: '100',
    letterSpacing: 0.1,
    color: '#1f1f1f',
  },
  weekDay: {
    justifyContent: 'center',
    fontWeight: '100',
    color: '#1f1f1f',
    alignItems: 'center',
    fontSize: 23,
  },
});

export default TodoDate;
