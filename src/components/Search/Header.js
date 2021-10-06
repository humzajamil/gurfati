import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';


const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.rangeText}>Sep 30</Text>
        <Text style={styles.rangeText}>-</Text>
        <Text style={styles.rangeText}>oct 15</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: 55,
    backgroundColor:COLORS.primary,

    
  },
  rangeText: {
    paddingRight: 10,
    color: COLORS.secondary,
    fontSize: 16,
    
  },
});
