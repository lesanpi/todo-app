import React from 'react';
import {useAppState} from '../AppContext';
import {View, Text, StyleSheet} from 'react-native';

function TodoDate() {
  const {date} = useAppState();

  return (
    <View style={styles.dayBar}>
      <View style={styles.dayMonthYear}>
        <Text style={styles.dayNumber}>{date.dayDisplay}</Text>
        <View style={styles.monthYear}>
          <Text style={styles.month}>{date.monthDisplay}</Text>
          <Text style={styles.year}>{date.year}</Text>
        </View>
      </View>
      <Text style={styles.weekDay}>{date.weekday}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dayBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 90,
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
