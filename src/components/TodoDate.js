import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 10,
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
    color: 'rgba(0,0,0,0.8)',
  },
  month: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
  year: {
    fontSize: 20,
    fontWeight: '100',
    letterSpacing: 0.1,
    color: 'rgba(0,0,0,0.8)',
  },
  weekDay: {
    justifyContent: 'center',
    fontWeight: '100',
    color: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    fontSize: 23,
  },
});

export default TodoDate;
