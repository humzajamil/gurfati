import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const Booking = props => {
  return (
    <View style={styles.style}>
      <Text style={styles.textStyle}>Booking data</Text>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
