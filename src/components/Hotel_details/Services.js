import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const Services = props => {
  
   
  
  return (
    <View style={styles.style}>
    <Text style={styles.textStyle}>Services data</Text>
  </View>
  );
};

export default Services;

const styles = StyleSheet.create({
    style:{
        flex:1,
        justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
        
    },
    textStyle:{
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
    }
});
