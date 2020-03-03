import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

function Accordian(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.accordion}>
      <View style={{flexDirection: 'row'}}>
        {expanded ? (
          <Icon
            name="angle-down"
            size={35}
            type="font-awesome"
            color="#000"
            onPress={() => setExpanded(!expanded)}
          />
        ) : (
          <Icon
            name="angle-right"
            size={35}
            type="font-awesome"
            color="#000"
            onPress={() => setExpanded(!expanded)}
          />
        )}
        <Text
          style={styles.accordionTitle}
          onPress={() => setExpanded(!expanded)}>{` ${props.title}`}</Text>
      </View>

      {expanded && props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  accordion: {
    marginTop: 10,
    marginBottom: 10,
  },
  accordionTouchable: {
    flexDirection: 'row',
  },
  accordionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'rgba(0,0,0,0.8)',
  },
});

export default Accordian;
