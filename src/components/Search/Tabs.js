import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../constants/COLORS';


const Tabs = () => {
  return (
    <View>
    <View style={styles.view_hor}/>
    <View style={styles.container}>
    
    <View style={{width:25,flex:1,alignItems:'center'}}>
        <Text style={styles.rangeText}>Popular</Text>
        </View>


        <View style={styles.view}/>


        <View style={{width:25,flex:1,alignItems:'center'}}>
        <Text style={styles.rangeText}>Rating</Text>
        </View>
        
        <View style={styles.view}/>


        <View style={{width:25,flex:1,alignItems:'center'}}>
        <Text style={styles.rangeText}>price</Text>
        </View>

        <View style={styles.view}/>

        <View style={{width:25,flex:1,alignItems:'center'}}>
        <Text style={styles.rangeText}>Filters</Text>
        </View>
    </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:COLORS.primary
  },
  rangeText: {
    paddingRight: 10,
    alignItems:'center',
    color: COLORS.secondary,
    fontSize: 16
  },
  view:{
    height:33,
      width: 0.5,
      margin:10,
      backgroundColor:COLORS.secondary
  },
  view_hor:{
      height:0.5,
      backgroundColor:COLORS.secondary
  }
});
